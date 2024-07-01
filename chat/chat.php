<?php

session_start();
require_once("config.php");


if (isset($_POST["submit"])) {
    if (!isset($_SESSION["email"])) {
        header("Location: http://localhost:8080/mysite/pages/bible%20quiz%20app/login.php");
    }else{
    $message = $_POST["comment"];
    $replyTo = $_POST["reply-to"]; 
    $user_id = $_SESSION["id"];
    $user_name = $_SESSION["name"];
    $user_profile = $_SESSION["profile"];
    $image_name = $_FILES["shared-image"]["name"];
    $image_tmp_name = $_FILES["shared-image"]["tmp_name"];
    $folder = "chat-images/".$image_name;

    $stmt = $conn->prepare("INSERT INTO chats (user_id, user_name, user_profile, reply_to, comment, shared_image) VALUES (?,?,?,?,?, '$image_name')");
    $stmt->bind_param("issss", $user_id, $user_name, $user_profile, $replyTo, $message);
    $stmt->execute();
    $result = $stmt->get_result();
    if (move_uploaded_file($image_tmp_name, $folder)) {
        echo "<h2 class='upload-mes'>Image Uploaded</h2>";
    } else {
        echo "<h2 class='upload-mes'>Image not Uploaded!, Please try again</h2>";
    }
    }
    
}

    


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bible Chat</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/forms.css">
</head>
<body>
    
<?php
    if (isset($_SESSION["email"])) {?>
    <i class="fa-solid fa-bars menu-toggle"></i>
    <div class="menu">
            <i class="fa-solid fa-arrow-left menu-toggle"></i>
             <div>
                    <img src="http://localhost:8080/mysite/pages/bible%20quiz%20app/profile-image/<?= $_SESSION['profile']?>" alt="" id="player-pfp" width="50px">
                    <h4 id="player-name"><?= $_SESSION["name"]?></h4>
            </div>
                        
                    <h3>Hey there, <?= $_SESSION["name"]?>, Care to give me feedback on your experience on the site? Write your feedback below</h3>
                    <form action="feedback.php" method="post">
                        <label for="feedback">Feedback</label>
                        <textarea name="feedback" id="feedback" placeholder="Your Feedback; eg, It's nice"></textarea>
                        <input type="submit" value="Submit" name="submit">
                    </form>

                    <nav>
                        <ul>
                            <li><a href="http://localhost:8080/mysite/pages/bible%20quiz%20app/index.php">Exit Chat</a></li>
                            <li><a href="http://localhost:8080/mysite/pages/bible%20quiz%20app/logout.php">Logout</a></li>
                        </ul>
                    </nav>
    </div>


    <div class="wrapper">
        <div class="messages-cont">

        </div>
        <form method="post" enctype="multipart/form-data" id="message-form">
            <input type="text" name="reply-to" id="reply" placeholder="Reply to">
            <textarea id="user-text" name="comment" required placeholder="Type your message"></textarea>
            <div class="media">
                <label for="image" title="Share Media"><i class="fa-solid fa-image"></i></label>
                <input type="file" name="shared-image" id="image" accept="image/*">
                <h4 id="media-name"></h4>
            </div>
            <button type="submit" name="submit">Send <i class="fa-solid fa-paper-plane"></i></button>
        </form>
    </div>

    <img src="images/cross-image.jpg" alt="image of jesus' cross" class="bg-image">

    <div class="new-message-indicator">
        <h3>New Messages &dArr;</h3>
    </div>

    
    <script src="js/chats.js"></script>

            <?php } else{ 
                $_SESSION['redirect_to'] = $_SERVER['REQUEST_URI'];
                echo "<div class='warning'>
                    <h2>You Must be Signed in to see and contribute to chats.</h2>
                    <a href='http://localhost:8080/mysite/pages/bible%20quiz%20app/login.php'>Log in</a>
                </div>";
                ?>
                <img src="images/cross-image.jpg" alt="image of jesus' cross" class="bg-image">
            <?php }?>

            

    

</body>
</html>