// Random JavaScript snippet: ASCII noise art generator
// Usage: node random_snippet.js [width] [height]

function randInt(max) {
  return Math.floor(Math.random() * max);
}

function generateNoiseArt(width = 64, height = 12) {
  const chars = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@'];
  let out = '';
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = Math.floor((Math.sin(x * 0.3) + Math.cos(y * 0.5) + Math.random() * 0.8) * 4 + 4);
      out += chars[Math.max(0, Math.min(chars.length - 1, i))];
    }
    out += '\n';
  }
  return out;
}

if (require.main === module) {
  const [, , w, h] = process.argv;
  const width = Math.max(10, parseInt(w, 10) || 64);
  const height = Math.max(4, parseInt(h, 10) || 12);
  console.log(generateNoiseArt(width, height));
}

module.exports = { generateNoiseArt };
