function akarPangkat2(x) {
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    } else {
      return Math.sqrt(x);
    }
  }

  // Contoh penggunaan
  const prompt = require('prompt-sync')({sigint: true});
  const input = prompt("Masukkan bilangan genap: ");
const angka = parseInt(input);

const result = akarPangkat2(angka);
console.log(result);