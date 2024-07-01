<?php

session_start();
include("config.php");

if (isset($_POST["submit"])) {
    $email = $_POST["email"];
    $token = $_POST["token"];
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);

    $res = $conn->query("UPDATE players SET password='$password', reset_token=NULL WHERE email='$email' AND reset_token ='$token'");

    if ($res) {
        echo "<div class='confirmation'>
                    <h4>Password Updated</h4> 
                    <i class='fa-solid fa-circle-check'></i>
            </div>";
        header("Location: login.php");
    }else{
        echo "<div class='confirmation'>
                <h4>Error Updating Password, Please try again</h4>
                <i class='fa-solid fa-circle-xmark'></i>
             </div>";
    }
$conn->close();

}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Password Reset</title>
    <link rel="stylesheet" href="css/forms.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="form-wrapper">
    <form method="post">
        <label for="password">Enter New Password</label>
        <input type="hidden" name="email" value="<?php echo $_GET['email']; ?>">
        <input type="hidden" name="token" value="<?php echo $_GET['token']; ?>">
        <input type="password" name="password" placeholder="Enter your new password" required id="password">
        <input type="submit" value="Reset Password" name="submit">
    </form>
    </div>

    <img src="images/cross-image.jpg" alt="Image of Jesus' cross" class="bg-image">
</body>
</html>