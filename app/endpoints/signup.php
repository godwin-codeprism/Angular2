<?php
    include("connection.php");
    $username = 'harish';
    $password = 'qls_22';
    $q = "INSERT INTO qlsusers (username, password) VALUES(:username, :password)";
    $query = $db-> prepare($q);
    $execute = $query->execute(array(
        ":username" => $username,
        ":password" => sha1($password)
    ));
    echo json_encode($username);
?>
