import { createCanvas } from "canvas";
import { readFileSync, writeFileSync } from "fs";

// Simple icon generator - draw SL logo on canvas
function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");
  const s = size / 512;

  // Background
  ctx.fillStyle = "#1f2937";
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, 80 * s);
  ctx.fill();

  // Draw 4 hollow squares (besi hollow pattern)
  const positions = [[60, 60], [272, 60], [60, 272], [272, 272]];
  const colors = ["#eab308", "#eab308", "#60a5fa", "#60a5fa"];

  positions.forEach(([x, y], i) => {
    ctx.strokeStyle = colors[i];
    ctx.lineWidth = 28 * s;
    ctx.beginPath();
    ctx.roundRect(x * s, y * s, 180 * s, 180 * s, 16 * s);
    ctx.stroke();

    ctx.fillStyle = "#1f2937";
    ctx.beginPath();
    ctx.roundRect((x + 40) * s, (y + 40) * s, 100 * s, 100 * s, 8 * s);
    ctx.fill();
  });

  return canvas.toBuffer("image/png");
}

writeFileSync("public/icon-192.png", drawIcon(192));
writeFileSync("public/icon-512.png", drawIcon(512));
console.log("Icons generated!");
