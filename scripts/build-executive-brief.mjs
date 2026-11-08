// Renders docs/executive-brief.html to public/executive-brief.pdf.
// Usage: node scripts/build-executive-brief.mjs
// Needs Playwright with Chromium available (not a project dependency).
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'docs/executive-brief.html');
const out = path.join(root, 'public/executive-brief.pdf');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(src).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: out,
  format: 'Letter',
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();
console.log(`Wrote ${path.relative(root, out)}`);
