import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execSync} from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const outDir = path.join(repoRoot, 'out');
const deployDir = path.join(repoRoot, 'deploy', 'netlify');

function ensureEmptyDir(dir) {
  fs.rmSync(dir, {recursive: true, force: true});
  fs.mkdirSync(dir, {recursive: true});
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, {recursive: true});
  const entries = fs.readdirSync(src, {withFileTypes: true});
  for (const entry of entries) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else if (entry.isSymbolicLink()) {
      const link = fs.readlinkSync(from);
      fs.symlinkSync(link, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

console.log('Building static site (Next.js export -> out/)...');
execSync('npm run build:netlify', {cwd: repoRoot, stdio: 'inherit'});

if (!fs.existsSync(outDir)) {
  throw new Error(`Expected ${outDir} to exist after build.`);
}

console.log('Preparing deploy/netlify folder...');
ensureEmptyDir(deployDir);
copyDir(outDir, deployDir);

// Helpful for drag-and-drop deploys: ensure SPA-ish fallback doesn’t 404 on deep links.
// (This site is mostly anchors, but it’s safe to include.)
fs.writeFileSync(
  path.join(deployDir, '_redirects'),
  '/* /index.html 200\n',
  'utf8'
);

console.log(`Done. Upload this folder to Netlify: ${deployDir}`);
