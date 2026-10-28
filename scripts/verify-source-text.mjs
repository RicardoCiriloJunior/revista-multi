import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'rolldown';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const verified = { pages: JSON.parse(JSON.parse(fs.readFileSync('design/all-source-texts.json', 'utf8')).texts[0]) };
const mapping = JSON.parse(fs.readFileSync('design/source-map.json', 'utf8'));
fs.mkdirSync('.local', { recursive: true });
const entries = verified.pages.map(page => mapping.find(item => item.currentNode === page.id));
const entryCode = ["export { InteractionProvider } from '../src/interactive.jsx';", ...entries.map((page,index) => `import Page${index} from '../src/pages/Page${page.id.replace(':','_')}.tsx';`), `export const components = [${entries.map((_,index)=>`Page${index}`).join(',')}];`].join('\n');
fs.writeFileSync('.local/audit-entry.mjs', entryCode);
await build({ input: path.resolve('.local/audit-entry.mjs'), external: id => id === 'react' || id.startsWith('react/') || id === 'react-dom' || id.startsWith('react-dom/'), platform: 'node', output: { file: path.resolve('.local/audit-bundle.mjs'), format: 'esm' } });
const { InteractionProvider, components } = await import(pathToFileURL(path.resolve('.local/audit-bundle.mjs')).href);
const normalize = value => value.replace(/\s|\u200b/g, '');
function plain(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&#x([\da-f]+);/gi, (_, value) => String.fromCodePoint(parseInt(value, 16))).replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value))).replaceAll('&quot;', '"').replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>');
}
  for (const [index,page] of verified.pages.entries()) {
    const Component = components[index];
    const rendered = normalize(plain(renderToStaticMarkup(React.createElement(InteractionProvider, null, React.createElement(Component)))));
    let expectedTexts = ['503:511','503:1009','503:1115'].includes(page.id) ? page.texts.map(text => text.replaceAll('referências nas pp. 22–23.', 'referências na p. 22.').replaceAll('Referências completas nas pp. 22–23.', 'Referências completas na p. 22.')) : page.texts;
    if (page.id === '503:637') {
      const removedStart = expectedTexts.indexOf('FIGURA 3 · NORTE · PNAD CONTÍNUA 2024');
      const nextFigure = expectedTexts.indexOf('FIGURA 4 · NORTE · LEVANTAMENTOS 2004–2024');
      if (removedStart < 0 || nextFigure <= removedStart) throw new Error('Could not identify the explicitly removed Figure 3 in the source audit.');
      expectedTexts = [...expectedTexts.slice(0, removedStart), ...expectedTexts.slice(nextFigure)];
    }
    const missing = expectedTexts.filter(text => !rendered.includes(normalize(text)));
    if (missing.length) { console.error(`${page.name}: missing original text: ${JSON.stringify(missing)}`); process.exitCode = 1; }
    else console.log(`Verified ${page.name}: ${expectedTexts.length} retained text layers.`);
  }
