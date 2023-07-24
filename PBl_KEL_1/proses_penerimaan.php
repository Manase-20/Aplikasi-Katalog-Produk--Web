<?php
// Mendapatkan nilai-nilai dari formulir penerimaan
$namaPenerima = $_POST['nama_penerima'];
$alamatPenerima = $_POST['alamat_penerima'];
$nomorPaket = $_POST['nomor_paket'];
$tanggalPenerimaan = $_POST['tanggal_penerimaan'];

// Lakukan pemrosesan atau penyimpanan data penerimaan di sini

// Contoh tindakan sederhana: Menampilkan data penerimaan yang dikirim
echo "Data Penerimaan:";
echo "<br>";
echo "Nama Penerima: " . $namaPenerima;
echo "<br>";
echo "Alamat Penerima: " . $alamatPenerima;
echo "<br>";
echo "Nomor Paket: " . $nomorPaket;
echo "<br>";
echo "Tanggal Penerimaan: " . $tanggalPenerimaan;
?>
