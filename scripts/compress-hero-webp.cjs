/**
 * Re-encode the home hero WebP for smaller transfer (Lighthouse "Improve image delivery").
 * Run: node scripts/compress-hero-webp.cjs
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const target = path.join(__dirname, "../public/assets/images/developer-pic-1.webp");

async function main() {
    const buf = fs.readFileSync(target);
    const out = await sharp(buf)
        .rotate()
        .resize(560, 560, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: 72, effort: 6, smartSubsample: true })
        .toBuffer();

    fs.writeFileSync(target, out);
    console.log(`Written ${target} (${(out.length / 1024).toFixed(1)} KiB)`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
