// nexro-news-20261121 — stages the finished 21 Nov 2026 poster as the entry.
// The poster is drawn once (dev/make_image.py) and stored as entry.png;
// this program only checks it and puts the same bytes in /output/entry.png.
// No network, no randomness, no dependencies: two runs write identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ARTWORK = new URL("./entry.png", import.meta.url);
const SIDE = 1024;
const LIMIT = 1024 * 1024;

function u32be(bytes: Buffer, at: number): number {
  return bytes.readUInt32BE(at);
}

function confirmSignature(bytes: Buffer): void {
  const sig = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  if (!sig.every((b, i) => bytes[i] === b)) {
    throw new Error("entry.png is not a PNG file");
  }
}

function confirmSquare(bytes: Buffer): void {
  const chunk = bytes.subarray(12, 16).toString("ascii");
  if (chunk !== "IHDR") {
    throw new Error(`first PNG chunk is ${chunk}, expected IHDR`);
  }
  const w = u32be(bytes, 16);
  const h = u32be(bytes, 20);
  if (w !== SIDE || h !== SIDE) {
    throw new Error(`poster is ${w}x${h}, expected ${SIDE}x${SIDE}`);
  }
}

function loadEntry(): Buffer {
  const bytes = readFileSync(ARTWORK);
  if (bytes.length > LIMIT) {
    throw new Error(`poster is ${bytes.length} bytes, over the 1 MiB cap`);
  }
  confirmSignature(bytes);
  confirmSquare(bytes);
  return bytes;
}

function deliverEntry(bytes: Buffer): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  const dest = join(dir, "entry.png");
  writeFileSync(dest, bytes);
  return dest;
}

const placed = deliverEntry(loadEntry());
console.log(`staged ${placed}`);
