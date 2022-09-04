// For loop -> terdapat 3 expression (deklarasi, kondisi, increment/decrement)
// Increment -> i++
// Decrement -> i--
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// // i++ -> i += 1 -> i = i + 1;

// menampilkan bilangan ganjil dari 1 - 10
for (let j = 1; j <= 10; j += 2) {
  console.log(j);
}

// .length -> digunakan untuk menghitung panjang sebuah array
let myArr = ['satu', 'dua', 'tiga', 'empat', 'lima'];

// menampilkan semua data pada array sesuai panjang array
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}
