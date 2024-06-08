// Mendefinisikan objek mahasiswa pertama
var mahasiswa1 = {
  nama: "Zara", // Nama mahasiswa pertama
  nim: 2311102441054, // NIM mahasiswa pertama
  jurusan: "Teknik Informatika" // Jurusan mahasiswa pertama
};

// Mendefinisikan objek mahasiswa kedua
var mahasiswa2 = {
  nama: "Josclyn", // Nama mahasiswa kedua
  nim: 2311102441070, // NIM mahasiswa kedua
  jurusan: "Sistem Informasi" // Jurusan mahasiswa kedua
};

// Menyimpan objek mahasiswa ke dalam sebuah array
var daftarMahasiswa = [mahasiswa1, mahasiswa2]; // Array yang berisi objek mahasiswa pertama dan kedua

// Iterasi melalui array mahasiswa untuk mencetak informasi masing-masing mahasiswa
console.log("Daftar Mahasiswa:"); // Mencetak judul daftar mahasiswa
daftarMahasiswa.forEach(function(mahasiswa, index) { // Iterasi melalui array untuk setiap mahasiswa
  console.log("Mahasiswa ke-" + (index + 1) + ":"); // Mencetak nomor urut mahasiswa
  console.log("Nama: " + mahasiswa.nama); // Mencetak nama mahasiswa
  console.log("Nim: " + mahasiswa.nim); // Mencetak NIM mahasiswa
  console.log("Jurusan: " + mahasiswa.jurusan); // Mencetak jurusan mahasiswa
  console.log("--------------------"); // Garis pemisah antar mahasiswa
});

// Menambahkan mahasiswa baru ke dalam array
var mahasiswaBaru = {
  nama: "Syafira", // Nama mahasiswa baru
  nim: 2311102441200, // NIM mahasiswa baru
  jurusan: "Teknik Komputer" // Jurusan mahasiswa baru
};

daftarMahasiswa.push(mahasiswaBaru); // Menambahkan mahasiswa baru ke array daftarMahasiswa

// Mencetak daftar mahasiswa setelah penambahan mahasiswa baru
console.log("Daftar Mahasiswa setelah penambahan:"); // Mencetak judul daftar mahasiswa setelah penambahan
daftarMahasiswa.forEach(function(mahasiswa, index) { // Iterasi melalui array untuk setiap mahasiswa
  console.log("Mahasiswa ke-" + (index + 1) + ":"); // Mencetak nomor urut mahasiswa
  console.log("Nama: " + mahasiswa.nama); // Mencetak nama mahasiswa
  console.log("Nim: " + mahasiswa.nim); // Mencetak NIM mahasiswa
  console.log("Jurusan: " + mahasiswa.jurusan); // Mencetak jurusan mahasiswa
  console.log("--------------------");
});