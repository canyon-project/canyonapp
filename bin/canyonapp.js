#!/usr/bin/env node

import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);
const packageRoot = resolve(currentDir, "..");
const serverEntry = resolve(packageRoot, "dist/index.js");

if (!existsSync(serverEntry)) {
  console.error(
    "[canyonapp] 未找到 dist/index.js，请先执行 `npm run build` 或确保发布包包含 dist 目录。"
  );
  process.exit(1);
}

await import(serverEntry);
