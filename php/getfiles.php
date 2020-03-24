<?php
require ('connection.php');

$query = mysqli_query($link, "SELECT * FROM `files`;");

$query_result = mysqli_fetch_all($query, MYSQLI_ASSOC);

echo json_encode($query_result, JSON_UNESCAPED_UNICODE);
?>