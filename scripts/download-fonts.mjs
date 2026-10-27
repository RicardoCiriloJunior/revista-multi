import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

fs.mkdirSync('public/assets/fonts', { recursive: true });
const request = 'https://fonts.googleapis.com/css2?family=Anton&family=Archivo:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;1,400&display=swap';
const css = execFileSync('curl.exe', ['--fail', '--location', '--silent', '--show-error', '--max-time', '120', '--user-agent', 'Mozilla/5.0', request], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
const urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(match => match[1]))];
let localCss = css;
for (let i = 0; i < urls.length; i++) {
  const url = urls[i];
  const extension = new URL(url).pathname.split('.').pop();
  const filename = `font-${i}.${extension}`;
  const destination = `public/assets/fonts/${filename}`;
  if (!fs.existsSync(destination)) execFileSync('curl.exe', ['--fail', '--location', '--silent', '--show-error', '--retry', '2', '--max-time', '120', '--output', destination, url], { stdio: 'inherit' });
  localCss = localCss.replaceAll(url, `/assets/fonts/${filename}`);
}
fs.writeFileSync('src/fonts.css', '/* Original font families used in the Figma design. Local copies for offline presentation. */\n' + localCss);
console.log(`Saved ${urls.length} font files.`);
