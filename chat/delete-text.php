<?php


session_start();

include("config.php");

$user_id = $_SESSION["id"];

if (isset($_GET["delete_id"])) {
    $delete_id = $_GET["delete_id"];

    $sql = "SELECT user_id FROM chats WHERE id=$delete_id";
    $res = $conn->query($sql);

    if ($res->num_rows > 0) {
        $row = $res->fetch_assoc();
        $comment_us_id = $row["user_id"];

        if ($user_id === (int)$comment_us_id) {
            $sql = "DELETE FROM chats WHERE id=$delete_id";
            $commRes = $conn->query($sql);

            if ($commRes) {
                echo "Comment Deleted Sucessfully";
                header("Location: chat.php");
            }else{
                echo "Comment not deleted";
                header("Location: chat.php");
            }
        }else{
            echo "You are not authorized to delete this comment";
        }
    }else{
        echo "Comment Not found";
    }
}else{
    echo "NO ID";
}

?>