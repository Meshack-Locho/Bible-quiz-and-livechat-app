<?php


session_start();
include("config.php");

$time = json_decode(file_get_contents('php://input'), true);

$user_id = $_SESSION['id'];

$time = $conn->real_escape_string($time['time']);

$sql = "INSERT INTO time_played (time, user_id) VALUES ('$time', '$user_id')";
$conn->query($sql);

if ($conn) {
    echo $time;
}else{
    echo "time not saved";
}

?>