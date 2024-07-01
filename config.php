<?php

$conn = new mysqli("localhost", "root", "", "bible_quiz_users");

if ($conn->connect_error) {
    die("Oooops!! Something went wrong");
}
?>