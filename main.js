//CASE 1

let nomorSatu = prompt("isi angka pertama");
let nomorDua = prompt("isi angka kedua");
let pembagian = nomorSatu / nomorDua;
let pangkat = Math.pow(nomorSatu, nomorDua);
let panggilalert = alert(
  `hasil pembagiannya adalah ${pembagian} dan hasil perpangkatannya adalah ${pangkat}`
);

//CASE 3

let today = new Date();
today.setDate(today.getDate());

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

let tanggal = alert(
  `Tanggal hari ini adalah ${today.toDateString()} dan kemarin adalah ${yesterday.toDateString()} sedangkan besok ${tomorrow.toDateString()}`
);

//CASE 5

let kata = prompt("masukan kata atau kalimat");
let jumlahkarakter = alert(`jumlah karatkernya adalah ${kata.length}`);
