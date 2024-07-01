<?php

session_start();
include("config.php");

$level = json_decode(file_get_contents('php://input'), true);
$score = json_decode(file_get_contents('php://input'), true);

$user_id = $_SESSION["id"];

$level = $conn->real_escape_string($level["level"]);

$score = $conn->real_escape_string($score["score"]);

$stmt = $conn->prepare("INSERT INTO levels (user_id, level, score) VALUES (?,?,?)");
$stmt->bind_param("iii", $user_id, $level, $score);
$stmt->execute();
$res = $stmt->get_result();

if ($res) {
    echo "<h4>$level</h4>";
}else{
    echo "<h4>Error passing data</h4>";
}

?>