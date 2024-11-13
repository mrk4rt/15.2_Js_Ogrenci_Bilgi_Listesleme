const students = [
  { isim: "Ahmet", yas: 15, sinif: "9A" },
  { isim: "Mehmet", yas: 16, sinif: "10B" },
  { isim: "Ayşe", yas: 14, sinif: "8C" }
];

students.forEach(ogrenci => {
  console.log("İsim: " + ogrenci.isim + ", Yaş: " + ogrenci.yas + ", Sınıf: " + ogrenci.sinif);
});
