<?php

session_start();
include("config.php");

if (isset($_POST["submit"])) {
    if (!isset($_SESSION["email"])) {
        header("Location: login.php");
    }else{
    $email = $_SESSION["email"];
    $name = $_SESSION["name"];
    $subject = "BIBLE QUIZ APP FEEDBACK from $name";
    $usermessage = $_POST["feedback"];
    $to = "meshacklocho5@gmail.com";
    $headers = "From: $email";

    if (mail($to, $subject, $usermessage, $headers)) {
        ?>
        <div class="feedback-res">
            <h1>Thank you,<?php echo $name?>, Your Feedback was Sent</h1>
            <button onclick="history.back()">Go back</button>
        </div>
    <?php }else{ ?>
        <div class="feedback-res">
            <h1>Feedback not sent, Please try again</h1>
            <button onclick="history.back()">Go back</button>
        </div>
    <?php }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
    <link rel="stylesheet" href="css/forms.css">
</head>
<body>
        <img src="images/cross-image.jpg" alt="image of jesus' cross" class="bg-image">
</body>
</html>