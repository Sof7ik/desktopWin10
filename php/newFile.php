<?php

require_once './connection.php';

$type = $_POST['fileType'];
$filename = $_POST['fileName'];

$id = mysqli_fetch_assoc(mysqli_query($link, "SELECT `id` FROM `files` ORDER BY `id` DESC LIMIT 1"));
$newId = $id['id']+1;

$insert = mysqli_query($link, 
"INSERT INTO `files`
    (`id`, `type`, `filename`, `file_msg`, `isNew`) 
VALUES 
    ($newId, $type, '$filename', NULL, 1)");

if ($insert)
{
    echo json_encode('Файл создан');
} else 
{
    echo json_encode(mysqli_error($link));
}
?>