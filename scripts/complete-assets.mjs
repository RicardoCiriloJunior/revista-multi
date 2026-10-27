import fs from 'node:fs';
import { spawn } from 'node:child_process';

const assets = JSON.parse(fs.readFileSync('design/assets-manifest.json', 'utf8'));
const verified = new Set();
try { for (const item of JSON.parse(fs.readFileSync('.local/assets-complete.json', 'utf8'))) verified.add(item); } catch {}
fs.mkdirSync('.local', { recursive: true });

function download(asset) {
  return new Promise((resolve, reject) => {
    if (verified.has(asset.file) && fs.existsSync(asset.file)) return resolve();
    const temporary = `${asset.file}.part`;
    const child = spawn('curl.exe', ['--fail', '--location', '--silent', '--show-error', '--retry', '2', '--max-time', '240', '--output', temporary, asset.url], { stdio: ['ignore', 'ignore', 'pipe'] });
    let error = '';
    child.stderr.on('data', chunk => { error += chunk; });
    child.on('error', reject);
    child.on('exit', code => {
      if (code !== 0) return reject(new Error(`${asset.file}: ${error}`));
      fs.renameSync(temporary, asset.file);
      verified.add(asset.file);
      fs.writeFileSync('.local/assets-complete.json', JSON.stringify([...verified], null, 2));
      console.log(`Saved ${asset.nodeId} / ${asset.name}`);
      resolve();
    });
  });
}

let cursor = 0;
const results = await Promise.allSettled(Array.from({ length: 4 }, async () => {
  while (cursor < assets.length) await download(assets[cursor++]);
}));
for (const result of results) if (result.status === 'rejected') console.error(result.reason.message);
if (results.some(result => result.status === 'rejected')) process.exitCode = 1;
else console.log(`All ${assets.length} original assets saved.`);
