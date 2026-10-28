import fs from 'node:fs';
import path from 'node:path';

// Convert the high fidelity Figma reference classes into ordinary, local CSS.
// No design utilities or remote Figma URLs are needed by the finished site.
const output = 'src/pages';
fs.mkdirSync(output, { recursive: true });
fs.mkdirSync('src/figma-components', { recursive: true });
fs.mkdirSync('public/assets/figma', { recursive: true });
const css = [];
const classes = new Map();
const assets = [];
const pages = [];
const chartTertiary = '#063652';
const runtimeAssetSources = new Set();
const previousAssets = JSON.parse(fs.readFileSync('design/assets-manifest.json', 'utf8'));
const knownAssets = new Map(previousAssets.map(asset => [new URL(asset.url).pathname.split('/').pop(), asset.file]));

function declarations(value) {
  const result = {};
  const transforms = [];
  const plain = {
    absolute: { position: 'absolute' }, relative: { position: 'relative' },
    block: { display: 'block' }, contents: { display: 'contents' }, flex: { display: 'flex' },
    'flex-col': { 'flex-direction': 'column' }, 'flex-none': { flex: 'none' },
    'shrink-0': { 'flex-shrink': '0' }, 'items-center': { 'align-items': 'center' },
    'items-start': { 'align-items': 'flex-start' }, 'justify-center': { 'justify-content': 'center' },
    'content-stretch': { 'align-content': 'stretch' }, 'cursor-pointer': { cursor: 'pointer' },
    'pointer-events-none': { 'pointer-events': 'none' }, 'max-w-none': { 'max-width': 'none' },
    'object-cover': { 'object-fit': 'cover' }, 'overflow-clip': { overflow: 'clip' },
    'whitespace-nowrap': { 'white-space': 'nowrap' }, 'whitespace-pre-wrap': { 'white-space': 'pre-wrap' },
    'font-normal': { 'font-weight': '400' }, 'font-semibold': { 'font-weight': '600' },
    'font-bold': { 'font-weight': '700' }, 'font-extrabold': { 'font-weight': '800' },
    italic: { 'font-style': 'italic' }, 'not-italic': { 'font-style': 'normal' },
    'text-left': { 'text-align': 'left' }, 'text-center': { 'text-align': 'center' },
    'text-right': { 'text-align': 'right' }, 'text-white': { color: '#fff' }, underline: { 'text-decoration-line': 'underline' },
    'decoration-solid': { 'text-decoration-style': 'solid' },
    'decoration-from-font': { 'text-decoration-thickness': 'from-font' },
    border: { 'border-width': '1px' }, 'border-2': { 'border-width': '2px' }, 'border-solid': { 'border-style': 'solid' },
    'inset-0': { inset: '0' }, 'left-0': { left: '0' }, 'top-0': { top: '0' },
    'size-full': { width: '100%', height: '100%' }, 'w-full': { width: '100%' },
    'h-px': { height: '1px' }, 'w-px': { width: '1px' }, 'mb-0': { 'margin-bottom': '0' }, 'min-w-full': { 'min-width': '100%' },
  };
  for (const token of value.split(/\s+/).filter(Boolean)) {
    if (plain[token]) { Object.assign(result, plain[token]); continue; }
    if (/^opacity-\d+$/.test(token)) { result.opacity = Number(token.slice(8)) / 100; continue; }
    const fraction = token.match(/^(top|left|right|bottom|w|h)-(\d+)\/(\d+)$/);
    if (fraction) { result[{w:'width',h:'height'}[fraction[1]] || fraction[1]] = `${Number(fraction[2]) / Number(fraction[3]) * 100}%`; continue; }
    if (token === '-translate-x-1/2') { transforms.push('translateX(-50%)'); continue; }
    if (token === '-translate-x-full') { transforms.push('translateX(-100%)'); continue; }
    if (token === '-translate-y-1/2') { transforms.push('translateY(-50%)'); continue; }
    if (token === '-scale-x-100') { transforms.push('scaleX(-1)'); continue; }
    const m = token.match(/^([a-z-]+)-\[(.*)\]$/);
    if (m) {
      const [, kind, raw] = m;
      if (kind === 'font') {
        const [family, style] = raw.replaceAll("'", '').split(':');
        result['font-family'] = `"${family.replaceAll('_', ' ')}", ${family === 'Archivo' ? 'sans-serif' : 'serif'}`;
        if (style.includes('Italic')) result['font-style'] = 'italic';
        continue;
      }
      const v = raw.replaceAll('_', ' ');
      const props = { w: 'width', h: 'height', top: 'top', left: 'left', right: 'right', bottom: 'bottom', inset: 'inset', leading: 'line-height', rounded: 'border-radius', bg: 'background', gap: 'gap', mb: 'margin-bottom', p: 'padding', aspect: 'aspect-ratio', border: 'border-color', tracking: 'letter-spacing' };
      if (kind === 'blur') { result.filter = `blur(${v})`; continue; }
      if (kind === 'text') { result[/^(#|color:|var\(|rgb)/.test(v) ? 'color' : 'font-size'] = v.replace(/^color:/, ''); continue; }
      if (kind === 'size') { result.width = v; result.height = v; continue; }
      if (kind === 'px') { result['padding-left'] = v; result['padding-right'] = v; continue; }
      if (kind === 'py') { result['padding-top'] = v; result['padding-bottom'] = v; continue; }
      if (props[kind]) { result[props[kind]] = v; continue; }
    }
    if (token.startsWith('[') && token.endsWith(']')) {
      const [k, ...v] = token.slice(1, -1).split(':'); result[k] = v.join(':'); continue;
    }
    throw new Error(`Unconverted Figma class: ${token}`);
  }
  if (transforms.length) result.transform = transforms.join(' ');
  return Object.entries(result).map(([k, v]) => `${k}:${v}`).join(';');
}

function localClass(value) {
  if (!classes.has(value)) {
    const name = `figma-${classes.size}`;
    classes.set(value, name);
    css.push(`.${name}{${declarations(value)}}`);
  }
  return classes.get(value);
}

function convert(code, id) {
  const prefix = code.match(/const assetPathPrefix = "([^"]+)";/)?.[1];
  code = code.replace(/const (img\w+) = `\$\{assetPathPrefix\}\/([^`]+)`;/g, (match, name, asset) => {
    const file = knownAssets.get(asset) || `public/assets/figma/${id.replace(':', '-')}-${asset}`;
    knownAssets.set(asset, file);
    assets.push({ nodeId: id, name, url: `${prefix}/${asset}`, file });
    let runtimeFile = file;
    if (id === '503:752' && ['imgLinhaDaSerieLeve', 'imgPontoLeve2004'].includes(name)) {
      // Keep the original SVG and recolor only its tertiary series for the site.
      runtimeFile = file.replace(/\.svg$/, '-tertiary.svg');
      fs.writeFileSync(runtimeFile, fs.readFileSync(file, 'utf8').replace(/#1d466b/gi, chartTertiary));
    }
    const runtimeSource = '/' + runtimeFile.replace(/^public\//, '');
    runtimeAssetSources.add(runtimeSource);
    return `const ${name} = ${JSON.stringify(runtimeSource)};`;
  }).replace(/const assetPathPrefix = .*?;\n/, '');
  code = code.replace(/className="([^"]*)"/g, (_, v) => `className="${localClass(v)}"`);
  code = code.replace(/className=\{className \|\| "([^"]*)"\}/g, (_, v) => `className={className || "${localClass(v)}"}`);
  code = code.replace(/className=\{`([\s\S]*?)`\}/g, (_, template) => {
    const parts = template.split(/(\$\{[^}]+\})/g).map(part => part.startsWith('${')
      ? part.replace(/"([^"]*)"/g, (_, value) => JSON.stringify(value ? localClass(value) : ''))
      : part.trim() ? ` ${localClass(part.trim())} ` : part);
    return 'className={`' + parts.join('') + '`}';
  });
  code = code.replace(/(<a\b[^>]*target="_blank")/g, '$1 rel="noopener noreferrer"');
  // Empty overlay buttons in Figma need accessible names on the web.
  code = code.replace(/<button\b[^>]*>/g, tag => {
    const name = tag.match(/data-name="([^"]+)"/)?.[1];
    return !name || tag.includes('aria-label') ? tag : tag.replace(/(\s*\/?>)$/, ` aria-label="${name}"$1`);
  });
  return code;
}

function source(file) { return JSON.parse(fs.readFileSync(`design/${file}`, 'utf8')).texts[0]; }
function withoutHelper(code, name) { return code.replace(new RegExp(`function ${name}\\([\\s\\S]*?\\n}\\n`, 'g'), ''); }

function replaceNode(code, id, replacement) {
  const attribute = `data-node-id="${id}"`;
  const at = code.indexOf(attribute);
  if (at < 0) throw new Error(`Missing source node ${id}`);
  const start = code.lastIndexOf('<', at);
  const tag = code.slice(start).match(/^<(\w+)/)[1];
  const openEnd = code.indexOf('>', at) + 1;
  const opening = code.slice(start, openEnd);
  const className = opening.match(/className="([^"]*)"/)?.[1];
  if (opening.endsWith('/>')) return code.slice(0, start) + replacement(className, opening) + code.slice(openEnd);
  const tags = new RegExp(`<\\/?${tag}\\b[^>]*>`, 'g'); tags.lastIndex = start;
  let depth = 0, end = -1;
  for (let match; (match = tags.exec(code));) {
    if (match[0].startsWith('</')) depth--; else if (!match[0].endsWith('/>')) depth++;
    if (depth === 0) { end = tags.lastIndex; break; }
  }
  if (end < 0) throw new Error(`Unclosed source node ${id}`);
  return code.slice(0, start) + replacement(className, code.slice(start, end)) + code.slice(end);
}

function normalizePageRoot(code) {
  const start = code.indexOf('export default function');
  const after = code.indexOf('return (', start);
  const match = code.slice(after).match(/<(a|button)\b/);
  if (!match || match.index > 40) return code;
  const open = after + match.index;
  const end = code.lastIndexOf(`</${match[1]}>`);
  return code.slice(0, open) + code.slice(open, end).replace(new RegExp(`^<${match[1]}\\b`), '<div') + '</div>' + code.slice(end + match[1].length + 3);
}

const shared = [
  ['616-599', 'Ebia', 'EditorialPainelEbiaInterativo'],
  ['47-17', 'Thinkers', 'EditorialPensadoresInterativos'],
  ['265-752', 'Evolution', 'AnaliseGraficaEvolucaoDaInsegurancaAlimentar'],
  ['50-151', 'Voices', 'EditorialCarrosselDeCitacoes'],
  ['75-51', 'Photos', 'CarrosselAutomatico4Fotos'],
];
for (const [id, filename, name] of shared) {
  let reference = source(`figma-new/${id}.json`);
  // Figma attaches the same action to a button and its text. On the web the
  // native outer button supplies one keyboard target while retaining all text.
  if (filename === 'Voices') reference = reference.replaceAll(' role="button"', '').replaceAll(' tabIndex="0"', '');
  if (filename === 'Evolution') {
    reference = reference.replaceAll('--margem-cor-lima,#d5e74e', `--chart-tertiary,${chartTertiary}`);
    // Light labels retain their contrast on the new dark blue segments.
    for (const labelId of [777, 785, 793, 801, 809, 817, 825, 833]) {
      reference = replaceNode(reference, `265:${labelId}`, (_, block) => block.replaceAll('text-[color:var(--margem-cor-verde,#153b2e)]', 'text-[color:var(--margem-cor-papel,#f2efdf)]'));
    }
  }
  let code = convert(reference, id.replace('-', ':'));
  if (!code.includes('export default')) code += `\nexport default ${name};\n`;
  fs.writeFileSync(`src/figma-components/${filename}.tsx`, `import React from 'react';\n\n${code}\n`);
}

const verified = JSON.parse(JSON.parse(fs.readFileSync('design/new-verified.json', 'utf8')).texts[0]);
const annualData = {};
for (const [variant, year] of [['49:40', '2023'], ['49:18', '2024']]) {
  const actions = verified.variants.find(item => item.id === variant).reactions[0].reactions[0].actions;
  const values = Object.fromEntries(actions.filter(action => action.type === 'SET_VARIABLE').map(action => [action.variableId.split(':').pop(), action.variableValue.value]));
  annualData[year] = { explanation: values['527'] };
  // Two collections both end in :527; retain the fully qualified source IDs.
  const byId = Object.fromEntries(actions.filter(action => action.type === 'SET_VARIABLE').map(action => [action.variableId, action.variableValue.value]));
  annualData[year] = { explanation: byId['VariableID:577:527'], levels: [byId['VariableID:586:527'], byId['VariableID:586:528'], byId['VariableID:586:529']], total: byId['VariableID:586:530'], description: byId['VariableID:586:531'], widths: [byId['VariableID:586:532'], byId['VariableID:586:533'], byId['VariableID:586:534']] };
}
fs.writeFileSync('src/interaction-data.mjs', `// Exact variable assignments read from the Figma prototype.\nexport const annualData = ${JSON.stringify(annualData, null, 2)};\n`);

const sourceMap = JSON.parse(fs.readFileSync('design/source-map.json', 'utf8'));
for (const data of sourceMap) {
  let code = normalizePageRoot(source(data.source));
  if (data.id === '196:739') {
    // User-selected removal: Figure 3, "Norte em 2024". Keep the other two
    // figures at their original sizes, centered over the two text columns.
    code = replaceNode(code, '503:643', () => '');
    code = replaceNode(code, '503:665', (_, block) => block.replace('left-[512px]', 'left-[164px]'));
    code = replaceNode(code, '503:711', (_, block) => block.replace('left-[976px]', 'left-[860px]'));
    // The source placed these six year labels at page level, over the chart
    // heading. Reparent them into the historical chart above their own bars.
    const yearLabels = [];
    for (const [id, center, top] of [
      ['722:575', 57.25, 128.25], ['722:576', 103.75, 111.09],
      ['722:577', 150.25, 99.28], ['722:578', 196.75, 118.69],
      ['722:579', 243.25, 101.25], ['722:580', 336.25, 109.41],
    ]) {
      code = replaceNode(code, id, (_, block) => {
        const classes = `-translate-x-1/2 absolute font-['Archivo:SemiBold'] font-semibold h-[24px] leading-[11px] left-[${center}px] text-[#153b2e] text-[9px] text-center top-[${top}px] w-[44px]`;
        yearLabels.push(block.replace(/className="[^"]*"/, `className="${classes}"`).replace(/(\d+,\d+%)\s*\/\s*(\d+,\d+%)/, '$1 /<br />$2'));
        return '';
      });
    }
    code = replaceNode(code, '503:665', (_, block) => {
      const end = block.lastIndexOf('</div>');
      return block.slice(0, end) + yearLabels.join('\n') + '\n' + block.slice(end);
    });
  }
  if (data.id === '196:760') code = code.replaceAll('#1d466b', `var(--chart-tertiary,${chartTertiary})`);
  if (data.id === '156:1021') code = code.replaceAll('bg-[var(--margem-cor-cinza,#67786b)]', `bg-[var(--chart-tertiary,${chartTertiary})]`);
  // These unchanged layouts were reused from the first extraction. The new
  // file's text-layer audit confirms its bibliography calls now say page 22.
  if (['156:933', '156:943', '156:1021'].includes(data.id)) code = code.replaceAll('Referências completas na p. 23.', 'Referências completas na p. 22.');
  // Explicitly approved by the user after reviewing the new file.
  if (['156:904', '156:1060', '156:1130'].includes(data.id)) code = code.replaceAll('referências nas pp. 22–23.', 'referências na p. 22.').replaceAll('Referências completas nas pp. 22–23.', 'Referências completas na p. 22.');
  const names = [];
  if (data.id === '156:913') {
    code = withoutHelper(code, 'EditorialPainelEbiaInterativo').replaceAll('<EditorialPainelEbiaInterativo ', '<EbiaPanel '); names.push('EbiaPanel');
  }
  if (data.id === '156:933') { code = replaceNode(code, '156:940', className => `<Thinkers className="${className}" />`); names.push('Thinkers'); }
  if (data.id === '156:979') { code = replaceNode(code, '503:593', className => `<Evolution className="${className}" />`); names.push('Evolution'); }
  if (data.id === '156:1095') { code = withoutHelper(code, 'EditorialCarrosselDeCitacoes').replaceAll('<EditorialCarrosselDeCitacoes ', '<Voices '); names.push('Voices'); }
  if (data.id === '156:1142') { code = replaceNode(code, '517:547', className => `<PhotoCarousel className="${className}" />`); names.push('PhotoCarousel'); }
  if (data.id === '156:969') {
    names.push('useInteractionState', 'handleAnnualSelection');
    code = code.replace(/(export default function \w+\(\) \{)/, '$1\n  const [year, setYear] = useInteractionState("year", "2024");\n  const data = annualData[year];\n  const is2023 = year === "2023";');
    code = code.replace(/(data-node-id="503:576")/, '$1 onClick={event => handleAnnualSelection(event, setYear)}');
    for (const [id, value] of [['503:582','explanation'],['I503:585;49:49','levels[0]'],['I503:585;49:53','levels[1]'],['I503:585;49:57','levels[2]'],['I503:585;49:59','total'],['I503:585;49:60','description']]) {
      code = replaceNode(code, id, (_, block) => block.replace(/>[\s\S]*<\/p>$/, `>{data.${value}}</p>`));
    }
    code = code.replace('data-node-id="503:585"', 'data-node-id="503:585" style={{ "--gráfico-•-barra-leve": data.widths[0] + "px", "--gráfico-•-barra-moderada": data.widths[1] + "px", "--gráfico-•-barra-grave": data.widths[2] + "px" }}');
    for (const [id, selected] of [['I503:585;49:42',false],['I503:585;49:44',true]]) {
      code = replaceNode(code, id, (_, block) => {
        block = block.replace(/className="([^"]*)"/g, (_, original) => {
          const inverse = original.replaceAll('--margem-cor-papel,#f2efdf','SWAP_PAPER').replaceAll('--margem-cor-verde,#153b2e','--margem-cor-papel,#f2efdf').replaceAll('SWAP_PAPER','--margem-cor-verde,#153b2e');
          return 'className={`${is2023 ? ' + JSON.stringify(selected ? inverse : inverse) + ' : ' + JSON.stringify(original) + '}`}';
        });
        if (!block.includes('role="button"')) block = block.replace(/(<div\b[^>]*data-name="Selecionar 2024")/, '$1 role="button" tabIndex="0"');
        return block;
      });
    }
  }
  code = convert(code, data.currentNode).replace(/^[\t ]+$/gm, '');
  const imports = `${names.length ? `import { ${names.join(', ')} } from '../interactive.jsx';\n` : ''}${data.id === '156:969' ? "import { annualData } from '../interaction-data.mjs';\n" : ''}`;
  const filename = `Page${data.id.replace(':', '_')}.tsx`;
  fs.writeFileSync(path.join(output, filename), `import React from 'react';\n${imports}\n${code}\n`);
  pages.push({ id: data.id, currentNode: data.currentNode, filename, source: data.source });
}
fs.writeFileSync('src/figma.css', css.join('\n') + '\n');
fs.writeFileSync('design/assets-manifest.json', JSON.stringify(assets, null, 2) + '\n');
fs.writeFileSync('design/pages-imported.json', JSON.stringify(pages, null, 2) + '\n');
fs.writeFileSync('src/assets.mjs', `export const imageSources = ${JSON.stringify([...runtimeAssetSources], null, 2)};\n`);
console.log(`Prepared ${pages.length} pages, ${assets.length} original assets, ${classes.size} CSS rules.`);
