/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// Type Error adalah kesalahan yang terjadi saat variabel atau parameter bukan tipe yang valid.
// Reference Error adalah kesalahan yang terjadi saat mereferensikan referensi yang tidak valid.
// Range Error adalah kesalahan yang terjadi saat variabel numerik atau parameter berada di luar rentang validnya.
// Syntax Error adalah kesalahan sintaks.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// Ketika kita menjalankan console.log(salaryWithVar) maka yang terjadi adalah undefined
// sementara jika menjalankan console.log(salaryWithConst) maka yang terjadi adalah Uncaught ReferenceError: salaryWithConst is not defined
// Error ini termasuk kategori Reference Error
// Hal ini terjadi karena pada saat console.log(salaryWithConst) dijalankan variabel salaryWithConst belum dideklarasikan
// Hal tersebut akan terjadi jika menggunakan Const ataupun Let
// Lain halnya jika menggunakan Var, karena Var memiliki efek hoisting

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;