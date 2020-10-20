<?php

require_once './connection.php';

$type = $_POST['fileType'];
$filename = $_POST['fileName'];

$insert = mysqli_query($link, 
"INSERT INTO `files`
    (`id`, `type`, `filename`, `file_msg`) 
VALUES 
    (NULL, $type, $filename, '')");

if ($insert)
{
    json_encode('Файл создан');
}
?>