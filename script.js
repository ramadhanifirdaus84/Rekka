function tampilWaktu() {
  const waktu = new Date();

  const hari = [
    "Minggu", "Senin", "Selasa", "Rabu",
    "Kamis", "Jumat", "Sabtu"
  ];

  const bulan = [
    "Januari", "Februari", "Maret", "April",
    "Mei", "Juni", "Juli", "Agustus",
    "September", "Oktober", "November", "Desember"
  ];

  const namaHari = hari[waktu.getDay()];
  const tanggal = waktu.getDate();
  const namaBulan = bulan[waktu.getMonth()];
  const tahun = waktu.getFullYear();

  let jam = waktu.getHours();
  let menit = waktu.getMinutes();
  let detik = waktu.getSeconds();

  // Tambah 0 di depan jika < 10
  jam = jam < 10 ? "0" + jam : jam;
  menit = menit < 10 ? "0" + menit : menit;
  detik = detik < 10 ? "0" + detik : detik;

  document.getElementById("jam").innerHTML =
    `${namaHari}, ${tanggal} ${namaBulan} ${tahun} | ${jam}:${menit}:${detik}`;
}

// Jalankan saat halaman dibuka
tampilWaktu();

// Update setiap 1 detik
setInterval(tampilWaktu, 1000);