<?php
session_start();
include("config.php");

if (isset($_POST["submit"])) {
    $email = $_POST["email"];
    $token= md5(uniqid(rand(), true));
    $sql = "UPDATE players SET reset_token='$token' WHERE email='$email'";
    $res = $conn->query($sql);

    if ($res) {
        $reseLink = "http://localhost:8080/mysite/pages/bible%20quiz%20app/password-reset-form.php?email=$email&token=$token";
        $to = $email;
        $subject = "Password Reset";
        $message =  "<html>
                    <head>
                    <body>
                        <h2>To reset your password, click the following link:</h2>
                        <a href='$reseLink'>Reset Password</a>
                    </body>
                    </head>
                    </html>";
        $headers = array(
            'From' => "meshacklocho5@gmail.com",
            'MIME-Version' => '1.0',
            'Content-type' => 'text/html; charset=iso-8859-1'
        );
        if (mail($to, $subject, $message, $headers)) {
            echo "<h3 class='confirmation'><span>You have received a link in your email, If you did not see it, check your spam folder.</span> <i class='fa-solid fa-circle-check'></i></h3>";
        }else{
            echo "<h3 class='confirmation'><span>Request not sent</span> <i class='fa-solid fa-circle-xmark'></i></h3>";
        }
    }else {
        echo "Error updating profile: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Reset Password</title>
    <link rel="stylesheet" href="css/forms.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="form-wrapper">
    <form method="post">
        <label for="email">Enter Email</label>
        <input type="email" name="email" placeholder="Enter your email" required id="email">
        <input type="submit" value="Reset Password" name="submit">
    </form>
    </div>

    <img src="images/cross-image.jpg" alt="Image of Jesus' cross" class="bg-image">
</body>
</html>
