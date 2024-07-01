<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $to = "meshacklocho5@gmail.com";
    $headers = "From: $email";
    if (mail($to, $subject, $message, $headers)) {
        echo "<div class='mes-status'><h1>Message Sent</h1> <i class='fa-solid fa-circle-check'></i> <button onclick='history.back()'>Go back</button></div>";
        
        mail($email, "MESSAGE RECEIVED", 'Hey there, your message has been received', "From: $to");
    }else{
        echo '<div class="mes-status"><h1>Message not sent, Please try again</h1> <i class="fa-solid fa-circle-xmark"></i> <button onclick="history.back()">Go back</button></div>';
    }
} else {
    echo "An error Occurred please try again later";
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Send Message</title>
    <link rel="stylesheet" href="quiz_styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        body{
            height: 100vh;
        }
    </style>
</head>
<body>
    
</body>
</html>