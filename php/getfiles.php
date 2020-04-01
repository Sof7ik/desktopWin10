<?php
require ('connection.php');

$query = mysqli_query($link, "SELECT files.id, filename, type_name, file_msg FROM `files`, `types` WHERE files.type = types.id;");

$query_result = mysqli_fetch_all($query, MYSQLI_ASSOC);

echo json_encode($query_result, JSON_UNESCAPED_UNICODE);
?>