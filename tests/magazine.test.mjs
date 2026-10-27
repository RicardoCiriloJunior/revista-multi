import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { pages, pendingPages, importedCount, summaryLinks, indexFromHash, fitScale } from '../src/magazine.mjs';

test('All 22 Figma frames are present in the original reading order', () => {
  assert.equal(pages.length, 22);
  assert.equal(importedCount, 22);
  assert.equal(pendingPages.length, 0);
  const imported = JSON.parse(fs.readFileSync('design/pages-imported.json', 'utf8'));
  assert.deepEqual(imported.map(page => page.id), pages.map(page => page.id));
  assert.equal(new Set(pages.map(page => page.id)).size, 22);
  assert.deepEqual(pages.map(page => page.number), ['00', ...Array.from({length:21}, (_, index) => String(index + 2).padStart(2, '0'))]);
  for (const id of pendingPages) assert.ok(pages.some(page => page.id === id));
});

test('The summary exposes all current Figma destinations including the approved 10/11 fixes', () => {
  assert.equal(summaryLinks['196:781'], '10');
  assert.equal(summaryLinks['196:788'], '11');
  assert.equal(summaryLinks['156:818'], '09');
  assert.equal(summaryLinks['156:783'], '04');
  assert.equal(summaryLinks['156:895'], '22');
  assert.deepEqual(Object.values(summaryLinks).sort(), pages.slice(2).map(page => page.number));
});

test('Deep links select the correct page and invalid hashes return to the cover', () => {
  assert.equal(indexFromHash('#pagina=10'), 9);
  assert.equal(indexFromHash('#pagina=22'), 21);
  assert.equal(indexFromHash('#pagina=00'), 0);
  assert.equal(indexFromHash('#pagina=999'), 0);
  assert.equal(indexFromHash('#pagina=<script>'), 0);
});

test('Fit mode keeps the complete Figma page inside desktop and phone viewports', () => {
  for (const [width, height] of [[1440, 900], [1920, 1080], [390, 640]]) {
    for (const pageHeight of [959, 1024]) {
      const scale = fitScale(width, height, pageHeight);
      assert.ok(1440 * scale <= width - 47.99);
      assert.ok(pageHeight * scale <= height - 47.99);
    }
  }
});

test('All imported assets have local, nonempty files', () => {
  const assets = JSON.parse(fs.readFileSync('design/assets-manifest.json', 'utf8'));
  assert.ok(assets.length >= 30);
  for (const asset of assets) assert.ok(fs.statSync(asset.file).size > 0, asset.file);
});

test('Annual chart data and its explanatory text reproduce the Figma variable assignments', async () => {
  const { annualData } = await import('../src/interaction-data.mjs');
  assert.deepEqual(annualData['2023'].levels, ['18,2%', '5,3%', '4,1%']);
  assert.equal(annualData['2023'].total, '27,6%');
  assert.deepEqual(annualData['2024'].levels, ['16,4%', '4,5%', '3,2%']);
  assert.equal(annualData['2024'].total, '24,2%');
  for (const [year, data] of Object.entries(annualData)) {
    assert.ok(data.explanation.includes(year));
    assert.ok(data.description.includes(year));
    data.levels.forEach((level, index) => assert.ok(Math.abs(data.widths[index] - Number(level.replace('%','').replace(',','.')) / 20 * 604) < 0.001));
  }
});

test('Every interactive slot uses its complete source component instead of an unwired instance', () => {
  const slots = {
    'Page156_913.tsx': '<EbiaPanel ',
    'Page156_933.tsx': '<Thinkers ',
    'Page156_979.tsx': '<Evolution ',
    'Page156_1095.tsx': '<Voices ',
    'Page156_1142.tsx': '<PhotoCarousel ',
  };
  for (const [file, component] of Object.entries(slots)) assert.ok(fs.readFileSync(`src/pages/${file}`, 'utf8').includes(component), file);
});

test('Runtime pages contain no temporary Figma asset URLs or unconverted utility classes', () => {
  for (const filename of fs.readdirSync('src/pages')) {
    const code = fs.readFileSync(`src/pages/${filename}`, 'utf8');
    assert.ok(!code.includes('https://www.figma.com/api/mcp/asset/'), filename);
    assert.ok(!/className="[^\"]*\[/.test(code), filename);
  }
});
