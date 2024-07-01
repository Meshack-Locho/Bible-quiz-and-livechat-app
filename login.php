<?php

session_start();
include("config.php");

if (isset($_POST["submit"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];
    $stmt = $conn->prepare("SELECT * FROM players WHERE email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $details = $result->fetch_assoc();
        if (password_verify($password, $details["password"])) {
            echo "Successfully Logged in";
            $_SESSION["name"] = $details["name"];
            $_SESSION["email"] = $email;
            $_SESSION["id"] = $details["id"];
            $_SESSION["age"] = $details["age"];
            $_SESSION["profile"] = $details["profile"];
            if (isset($_SESSION['redirect_to'])) {
                $redirect_to = $_SESSION['redirect_to'];
                unset($_SESSION['redirect_to']);
                header("Location: $redirect_to");
                exit();
        }else{
            header("Location: index.php?user=". $_SESSION['name']);
            exit();
        }
        } else {
            echo "<div class='confirmation'>
                    <h4>Password is Incorrect</h4>
                    <i class='fa-solid fa-circle-xmark'></i>
                 </div>";
        }
        
    }else{
        echo "<div class='confirmation'>
                <h4>User Not Found</h4>
                <i class='fa-solid fa-circle-xmark'></i>
            </div>";
    }
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Bible Quiz</title>
    <link rel="stylesheet" href="css/forms.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="form-wrapper">
        <form method="post">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" required>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required placeholder="Enter your password">

            <a href="pass-reset.php" style="align-self: flex-end;">Forgot Password?</a>

            <input type="submit" value="Log in" name="submit">
            
        </form>

        <div class="cover"></div>

        <p>Don't have an account? <a href="signup.php">Sign up</a></p>
    </div>

    <img src="images/cross-image.jpg" alt="Image of Jesus' cross" class="bg-image">
</body>
</html>