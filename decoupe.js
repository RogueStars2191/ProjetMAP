const sharp = require('sharp');
const path = require('path');

const inputImage = path.join(__dirname, 'MAPGONDWA.webp');
const outputDir = path.join(__dirname, 'tiles');

console.log("Début du découpage propre de Gondwa... Ça va aller très vite !");

sharp(inputImage)
  .tile({
    size: 256,
    layout: 'dz', // On passe en format plane standard
    background: { r: 0, g: 0, b: 0, alpha: 1 }
  })
  .toFile(outputDir)
  .then(() => {
    console.log("🎉 Découpage réussi à 100 % !");
  })
  .catch(err => {
    console.error("Erreur :", err);
  });