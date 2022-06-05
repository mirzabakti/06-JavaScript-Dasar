/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

// perulangan dari 1 sampai 100
for (let i = 1; i <= 100; i++) {
    let flag = 0;

    // perulangan dimulai dari 2 sampai input
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // jika bilangan lebih besar dari 1 dan tidak habis dibagi bilangan lain
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
// let primeCounter = 0;
// let fiftiethPrime;
/// EDIT HERE

const findPrime = num => {
    let i, primes = [2, 3], n = 5;
    const isPrime = n => {
       let i = 1, p = primes[i],
       limit = Math.ceil(Math.sqrt(n));
       while (p <= limit) {
          if (n % p === 0) {
             return false;
          }
          i += 1;
          p = primes[i];
       }
       return true;
    }
    for (i = 2; i <= num; i += 1) {
       while (!isPrime(n)) {
          n += 2;
       }
       primes.push(n);
       n += 2;
    };
    return primes[num - 1];
 }
 console.log(findPrime(50));


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
// do { .... } while (....)

// nthOdd = (n) => {
//     return (2 * n - 1);
// }

// console.log(nthOdd(50));

nthOdd = (n) => {
    let i = n;
    do {
        return (2 * n - 1);
    } while (i = n);
}

console.log(nthOdd(50));