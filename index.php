<?php
require_once './php/connection.php';

$users5 = mysqli_fetch_all(mysqli_query($link, "SELECT `login` FROM `users` LIMIT 5"));
?>

<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta name='keywords' content=' '/>
    <meta name='description' content=' '/>
    <meta name='owner' content='bychkov.l47@mail.ru'/>
    <meta name='author' lang='ru' content='ItWebteam <bychkov.l47@mail.ru>'/>
    <meta http-equiv='content-type' content='text/html; charset=UTF-8' />
    <meta name='resource-type' content='Document'/>
    <meta name='robots' content='noindex,nofollow'/>

    <title>Вход</title>

<!--    <link rel='stylesheet' href='styles/boot-screen.scss'>-->
<!--    <link rel='stylesheet' href='styles/style.scss'>-->

    <link rel="stylesheet" href="./dist/index.css">
    
</head>
<body>
    <div class="container">
        
        <aside class="left-user-list">
            <input type="search" name="" list="datalist1" style="width: 100%">
            <datalist id="datalist1">
                <?php
                foreach ($users5 as $key => $user) {
                    ?>
                        <option><?echo $user[$key][0]?></option>
                    <?php
                } 
                ?>
            </datalist>

            <ul class="user-list">

            </ul>
        </aside>

        <div class="bootScreen">
            <div class="person-wrapper">
                <div class="person-image">
                    <img class="person-image" src="./icons/bootScreen/person.png" alt="person-avatar">
                </div>
                <span id="username">Лёнька</span>
            </div>
            
            <form action="" method="POST" class="login-inputs">
                <input type="password" name="user-password" id="user-password" autofocus required placeholder="Password">
                <input type="submit" value="" id='login-btn'>
            </form>

            <p class="error-message" id="error-message"></p>
        </div>
    </div>

    <script src="./js/login.js" defer></script>
</body>
</html>