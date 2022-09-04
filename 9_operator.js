// Assignment operator

let a = 10;
let b = 5;
let c;

// a = a + b;
a += b;

// b = b - a
b -= a;

console.log(a);
console.log(b);

// Comparasion Operator

let result = a === b ? true : false;

// == -> sama dengan (value saja)
// === -> sama dan identik dengan (value dan tipe data)
// ! (not) -> negasi/kebalikan

if (1 !== '1') {
  console.log('Sama');
}

// false nilainya sama dengan 0
// true nilainya lebih dari 0 (misal 1 sampe n)

if (true === 1) {
  console.log('Sama ke dua');
}

a = 5;
console.log(a == 5);

// tanda (+) juga disebut concatanation (menggabungkan 2 atau lebih string)
console.log('Saya' + true);

// Tips. Lebih baik menggunakan perbandingan dengan menggunakan sama dengan 3 (===)

// Ternary Operator (?)
let angka1 = 5;
let angka2 = 10;

let result1 = angka1 > angka2 ? 'tidak' : 'ya';
console.log(result1);
