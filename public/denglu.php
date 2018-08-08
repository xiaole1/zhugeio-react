<?php
    header("content-type:text/html;charset=utf-8");
    header("Access-Control-Allow-Origin: *");
    $username=$GET['name'];
    $password=$GET['passwd'];
    echo $password;
?>