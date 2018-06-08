<?php
    $con = new mysqli('localhost', 'root', 'root', 'pancake-app');
    $arr = [];

    if($con->ping()) {
        $arr['connected'] = true;
    } else {
        $arr['connected'] = false;
    }



    $arr['status'] = ['READY'];
    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $arr['name'] = $_POST['name'];
        $arr['message'] = $_POST['message'];
    } else {
        $arr['name'] = 'anonymous';
        $arr['message'] = 'NONE';
    }
    echo json_encode($arr);

    $sql = $con->prepare("INSERT INTO `pancakes` (`name`, `message`) VALUES (?,?)");
    $reqsql = $sql->bind_param('ss', $arr['name'], $arr['message']);
    if($reqsql) {
        $sql->execute();
        $arr['id'] = $con->insert_id;
    }

?>