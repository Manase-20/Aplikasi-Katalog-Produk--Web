<?php
$servername = "localhost";
$ussername = "root";
$password = "";
$dbname = "db_logistik";

// Membuat koneksi
$conn = mysqli_connect($servername, $ussername, $password, $dbname);

// Memeriksa koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}else {
    echo "koneksi berhasil" ;
}
?>