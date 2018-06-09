<?php
$connection = new mysqli('localhost', 'root', 'root', 'pancake-app');
$arr = [];

// checks if connection to the database is successful
if($connection->ping()) {
    $arr['connected'] = true;
} else {
    $arr['connected'] = false;
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $arr['xid'] = $_POST['xid'];
    $arr['name'] = $_POST['name'];
    $arr['message'] = $_POST['message'];
    $arr['action'] = $_POST['action'];
} else {
    $arr['xid'] = '222';
    $arr['name'] = $_POST['noname'];
    $arr['message'] = $_POST['nomessage'];
    $arr['action'] = 'GET';
}

if (preg_match('/^[0-9]+$/', $arr['xid'])) {

}

if($arr['action'] === 'ADD') {
    $sqla = $connection->prepare("SELECT xid FROM `pancakes` WHERE xid=?");
    $requestsqla = $sqla->bind_param('i', $arr['xid']);
    $sqla->execute();
    $result = $sqla->get_result();

    if($result->num_rows === 0) {
        $sql = $connection->prepare("INSERT INTO `pancakes` (`name`, `message`, `xid`) VALUES (?,?,?);");
        $requestsql = $sql->bind_param('ssi', $arr['name'], $arr['message'], $arr['xid']);
        if($requestsql) { $sql->execute(); $arr['id'] = $connection->insert_id; } $arr['status'] = 'Added';
    } else {
        $sqlb = $connection->prepare("UPDATE `pancakes` SET `name` = ?, `message` = ? WHERE `xid` = ?;");
        $requestsqlb = $sqlb->bind_param('ssi', $arr['name'], $arr['message'], $arr['xid']);
        if($requestsqlb) { $sqlb->execute(); $arr['status'] = 'Updated';}
    }

if($arr['action'] === 'GET') {
    $sqla = $connection->prepare("SELECT xid FROM `pancakes` WHERE xid=?");
    $requestsqla = $sqla->bind_param('i', $arr['xid']);
    $sqla->execute();
    $result = $sqla->get_result();
    $data = [];
    if($result->num_row > 0) {
        while($row=$result->fetch_assoc()) {
            $data[] = $row;
        }
        $arr['response'] = $data;
    }

}


} // ----- end of if statement

echo json_encode($arr);

?>