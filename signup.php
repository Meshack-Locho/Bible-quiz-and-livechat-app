<?php

include("config.php");



if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $age = $_POST["age"];
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);
    $file_name = $_FILES['profile']["name"];
    $tempname = $_FILES["profile"]["tmp_name"]; 
    $folder = 'profile-image/'.$file_name;
    $query = mysqli_query($conn, "SELECT * FROM players WHERE email='$email'");
    if (mysqli_num_rows($query)>0) {
        echo "Email Already Exits";
    }else{
        $stmt = $conn->prepare("INSERT INTO players (name, email, age, password, profile) VALUES (?,?,?,?,'$file_name')");
        $stmt->bind_param("ssis", $name, $email, $age, $password);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if (move_uploaded_file($tempname, $folder)) {
            echo "uploaded";
        }else{
            echo "error";
        }

        $_SESSION["name"] = $name;
        $_SESSION["email"] = $email;

        header("Location: login.php");
    }
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up - Bible Quiz</title>
    <link rel="stylesheet" href="css/forms.css">
</head>
<body>
    <div class="form-wrapper">
        <form method="POST" enctype='multipart/form-data'>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required placeholder="Enter a short nickname max 10 characters" maxlength="10">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your Email" required>
            <label for="age">Age</label>
            <input type="text" name="age" id="age" placeholder="Enter your age" required>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter secure password" required>
            <label for="pfp" id="profile-label">Profile Picture</label>
            <div>
                <input type="file" name="profile" id="pfp" accept="image/png/jpeg/jpg">
                <span id="image-name"></span>
            </div>
            <input type="submit" value="Sign up" name="submit">
        </form>     
        <div class="cover"></div>

        <p>Already have an Account? <a href="login.php">Login</a></p>
    </div>

    <img src="images/cross-image.jpg" alt="image of Jesus' cross" class="bg-image">

    <script src="js/forms.js"></script>
    
</body>
</html>