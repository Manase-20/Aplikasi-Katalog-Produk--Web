<?php
session_start();

// Periksa apakah pengguna telah login
if (!isset($_SESSION['tbl_users'])) {
    // Jika pengguna belum login, alihkan mereka ke halaman login
    header("Location: login.php");
    exit;
}

// Jika pengguna telah login, dapatkan ID pengguna dari sesi
$tbl_users = $_SESSION['tbl_users'];

// Selanjutnya, Anda dapat menggunakan ID pengguna ini untuk mengambil informasi profil pengguna dari database dan menampilkannya di halaman.
