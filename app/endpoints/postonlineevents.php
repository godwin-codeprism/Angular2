<?php
    include('connection.php');
    $data=file_get_contents("php://input");
    $jsonFile=fopen("../../data/online_events.json","w");
    fwrite($jsonFile,$data);
    echo json_encode($data);
?>