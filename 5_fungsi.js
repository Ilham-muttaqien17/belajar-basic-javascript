// Cara menggabungkan dua atau lebih kata(string)
let namaDepan = 'Bunga';
let namaBelakang = 'Putri';

console.log(namaDepan + namaBelakang);

// Fungsi adalah Kumpulan kode untuk menghasilkan sebuah nilai
namaSaya();

function namaSaya() {
  console.log('Nama saya Ilham');
}

// Parameter
// function sebutNamaSaya(nama, umur, hobi) {
//   console.log(
//     'Nama saya adalah ' + nama + ' , umur saya ' + umur + ' , hobi saya ' + hobi
//   );
// }

// sebutNamaSaya('Bunga', 21, 'Baca buku');

// deklarasi fungsi versi umur
function spell(kata1) {
  return 'Nama saya ' + kata1;
}

console.log(spell('Bunga'));

// Menyimpan sebuah fungsi dalam variabel
const penjumlahan = function (a, b) {
  return a + b;
};

console.log(penjumlahan(1, 2));

// arrow function
const pengurangan = (a, b) => {
  return a - b;
};

console.log(pengurangan(4, 2));
