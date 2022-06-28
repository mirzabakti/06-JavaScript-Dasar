/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
taxCalc = (salary) => {
    if (salary < 5000000) {
        return 0;
    } else if (salary >= 5000000 && salary < 10000000) {
        return (salary / 100) * 5;
    } else if (salary >= 10000000 && salary < 20000000) {
        return (salary / 100) * 10;
    } else if (salary >= 20000000) {
        return (salary / 100) * 20;
    }
};

console.log(taxCalc(20000000))

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE

// checkBMI = (height, weight) => {
//     $BMI = (weight / (height**2)) * 10000;
//     console.log($BMI)
//     if ($BMI < 18.5) {
//         return "under weight";
//     } else if ($BMI > 18.5 && $BMI < 24.9) {
//         return "normal";
//     } else if ($BMI > 25 && $BMI < 29.9) {
//         return "over weight";
//     } else if ($BMI > 30 && $BMI < 34.9) {
//         return "obese";
//     } else if ($BMI > 35) {
//         return "extremely obese";
//     }
// };

// console.log(checkBMI(160, 63.8));

// Menurut saya soalnya kurang tepat
// apabila mengikuti instruksi pada soal
// jika hasil $BMI 18.5, 24.9 - 25, 29.9 - 30, 34,9 - 35
// maka akan tercetak undifined atau hasil else
// sehingga saya merubah code sebagai berikut agar lebih berfungsi sebagaimana mestinya

checkBMI = (height, weight) => {
    $BMI = (weight / (height**2)) * 10000;
    if ($BMI < 18.5) {
        return "under weight";
    } else if ($BMI >= 18.5 && $BMI < 25) {
        return "normal";
    } else if ($BMI >= 25 && $BMI < 30) {
        return "over weight";
    } else if ($BMI >= 30 && $BMI < 35) {
        return "obese";
    } else if ($BMI >= 35) {
        return "extremely obese";
    }
};

console.log(checkBMI(170, 80));

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
convToUpperCase = (sentence) => {
    return sentence.replace(/\w\S*/g, function(kata) { 
    const kataBaru = kata.slice(0,1).toUpperCase() + kata.substr(1);
    return kataBaru
    });
}

console.log(convToUpperCase("bogor kota indah, sejuk, nyaman. \nbagai bunga di dalam taman. \nselalu disinggahi wisatawan. \nsungguh menarik perhatian. \n\ndisana banyak pemandangaan dan peristirahatan. \nnan indah tenang serta damai. \ndisana aku dilahirkan dan aku dibesarkan. \ndikota kesayangan. BOGOR!!"));


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
    if (word.indexOf(' ') >= 0) {
        return `word = "${word}" \nHuruf pertama yang tidak kembar adalah "Kata Tidak Boleh Dipisah"`
    }else{
    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);
        if (word.indexOf(letter) == i && word.indexOf(letter, i + 1) == -1) {
            return `word = "${word}" \nHuruf pertama yang tidak kembar adalah "${letter}"`
        }
    }
    return `word = "${word}" \nHuruf pertama yang tidak kembar adalah ""`;
}
}

console.log(firstNonRepeatedChar("mmirzabaktirz"));