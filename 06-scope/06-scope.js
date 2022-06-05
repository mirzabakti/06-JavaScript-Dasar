/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// Terdapat dua jenis variabel scope yang ada di JavaScript yaitu Global Variable dan Local Variable.
// Lingkup global adalah ketika sebuah variabel bisa diakses dari mana saja, baik di dalam maupun di luar dari suatu fungsi atau blok (grup) kode.
// Sebaliknya, lingkup lokal adalah ketika sebuah variabel hanya bisa diakses di dalam sebuah fungsi atau blok kode. Semua variabel yang dideklarasikan di dalam sebuah fungsi/blok hanya bisa di dalam fungsi/blok tersebut saja.

// Contoh Lingkup Lokal

// dibagian ini variabel 'makanan' tidak dapat diakses
simpleFunction = () => {

    let makanan = "Gado-gado";
    // jika variabel 'makanan' ditaruh di dalam sini maka variabel 'makanan' dapat diakses
  
  }

// Contoh Lingkup Global

let makananRingan = "Kuaci";  
// disini kamu bisa menggunakan variabel 'makananRingan'

fungsiSederhana = () => {   
// disini kamu bisa menggunakan variabel 'makananRingan'

}


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
// "Mariah"
// Karena (name) pada fungsi printFirstName adalah parameter di fungsi tersebut dan membutuhkan argument dari printFirstName("Mariah Carey")
// Dan karena return name.split(" ")[0]; tidak dapan mengakses const name = "John Watson"; sebab di luar lingkupnya,

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));