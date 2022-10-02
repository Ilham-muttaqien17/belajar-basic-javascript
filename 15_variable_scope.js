let myGlobal = 10; // Global variable -> variable yang di deklarasi diluar fungsi dalam sebuah file

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let myLocal = 15; // Local variable -> variable yang di deklarasi di dalam fungsi/scope dan hanya bisa diakses dalam fungsi/scope tersebut
  console.log(myGlobal);
  console.log(myLocal);
}

// console.log(myLocal); -> error dikarenakan myLocal adalah sebuah local variable

console.log(fun2());
