<?php

include("config.php");
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!isset($_SESSION['id'])) {
        header("Location: http://localhost:8080/mysite/pages/bible%20quiz%20app/login.php");
    }else{
    $comment_id = $_POST["comment_id"];
    $user_id = $_SESSION['id'];


    $stmt = $conn->prepare("SELECT * FROM likes WHERE comment_id = ? AND user_id = ?");
    $stmt->bind_param("ii", $comment_id, $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 0) {
        $stmt = $conn->prepare("INSERT INTO likes (comment_id, user_id) VALUES (?,?)");
        $stmt->bind_param("ii", $comment_id, $user_id);
        
        if ($stmt->execute()) {
            $sql = "UPDATE chats SET likes = likes + 1 WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $comment_id);
            $stmt->execute();

            $sql = "SELECT likes FROM chats WHERE id=?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $comment_id);
            $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();
            echo "Liked" . $row['likes'];
            header("Location: chat.php");
        }else{
            echo "error" . $stmt->error;
        }
    }else{
        echo "You have already liked this comment";
    }

    $stmt->close();
    }
}

$conn->close();
?>