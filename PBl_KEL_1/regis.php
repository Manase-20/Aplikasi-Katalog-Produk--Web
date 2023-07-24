<?php
include 'koneksi.php';

$fullname = $_POST['fullname'];
$ussername = $_POST['ussername'];
$email = $_POST['email'];
$password = $_POST['password'];

$query_sql = "INSERT INTO tbl_users (fullname, ussername, email, password)
            VALUES ('$fullname', '$ussername', '$email', '$password')";

if (mysqli_query($conn, $query_sql)) {
    header("Location: login.html");
} else {
    echo "Pendaftaran Gagal: " . mysqli_error($conn);
}
?>
