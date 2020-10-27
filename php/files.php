<?php

require_once './connection.php';

$tmp_name = $_FILES['bgImage']['tmp_name'];
$name = $_FILES['bgImage']['name'];

$userId = $_GET['userId'];

if (!file_exists(dirname(__DIR__) . '\desktop-bg\\' . $name))
{
    move_uploaded_file($tmp_name, dirname(__DIR__)."/desktop-bg//".$name);
}

try {
    $updateQuery = mysqli_query($link, 
    "UPDATE 
        `config` 
    SET 
       `bg`= '$name' 
    WHERE `id_user` = $userId");
} catch (\Throwable $th) {
    throw $th;
}

header('Location: /desktop.html?id='.$userId);
?>