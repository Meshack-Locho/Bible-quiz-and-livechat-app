<?php

session_start();
include("config.php");

if (!isset($_SESSION["id"])) {
    $_SESSION['redirect_to'] = $_SERVER['REQUEST_URI'];
    header("Location: login.php");
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bible Quiz</title>
    <link rel="stylesheet" href="css/quiz_styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header>
        <div class="player-profile">
            <div class="player">
                <div class="player-details">
                    <?php
                        if (isset($_SESSION["email"])) {?>
                                <img src="profile-image/<?= $_SESSION['profile']?>" alt="" id="player-pfp" width="50px">
                                <h4 id="player-name"><?= $_SESSION["name"]?></h4>
                        <?php } else{?>
                                <img src="images/profile-icon-png-909.png" alt="">
                                <h4 id="player-name">Player Name</h4>
                        <?php } ?>
                    
                
                </div>
                <div class="score-cont">
                    <h4 id="score">Score: 0</h4>
                </div>
                <progress value="0" max="100" id="level-progress"></progress>
            </div>

            <?php
             if (isset($_SESSION["email"])) {?>
                <a href="logout.php" class="add-prof">Logout</a>
             <?php } else {?>
                <a href="login.php" class="add-prof">Log in</a>
             <?php }
             
            ?>
                
                <i class="fa-solid fa-bars menu-toggle"></i>
            
        </div>

        <div class="music-player">
            <h4>Play Some Music:</h4>
            <i class="fa-solid fa-play" title="Play"></i>
            <i class="fa-solid fa-stop stop-music" title="Stop"></i>
            <i class="fa-solid fa-forward" title="Next"></i>
            <div>
                <h5>Volume: </h5>
                <input type="range" class="volume-control">
            </div>
        </div>

        <div class="background">
            <input type="checkbox" name="checkbox" id="checkbox">
            <label for="checkbox" class="mode-label">
                <div class="circle"></div>
            </label>

            <button id="next-que-btn" disabled>Next</button>
            <button id="restart-btn">Restart</button>
        </div>
    </header>

     <div class="menu">
        <i class="fa-solid fa-arrow-right menu-toggle"></i>
        <div>
            <?php
                if (isset($_SESSION["email"])) {?>
                        <img src="profile-image/<?= $_SESSION['profile']?>" alt="" id="player-pfp" width="50px">
                        <h4 id="player-name"><?= $_SESSION["name"]?></h4>
            <?php } else{?>
                        <img src="images/profile-icon-png-909.png" alt="">
                        <h4 id="player-name">Player Name</h4>
            <?php } ?>
        </div>
                <nav>
                    <ul>
                        <li><a href="index.php">Exit</a></li>
                        <li id="about-info">About</li>
                        <li id="progress-save-btn">Save Progress</li>
                        <li id="details-caller">Your Details and Stats</li>
                        <li id="chat-opener"><a href="chat.php">Open Chat</a></li>
                    </ul>
                </nav>
      </div>

    <div class="container">
    </div>

    <div class="save-status">
        <h3>Saved Succesfully</h3>
    </div>

    <div class="add-prof-popup">
        <i class="fa-solid fa-circle-xmark close-prof-popup"></i>
        <h3>Click image to select another profile picture.</h3>
        <label for="selected-image">
            <img src="images/profile-icon-png-909.png" alt="" class="image-b4-submission">
        </label>
        <input type="file" id="selected-image" accept="png/jpeg/jpg">
        <label for="player-name-inp">Enter your name: </label>
        <input type="text" id="player-name-inp" placeholder="Player name">
        <button id="submit-details">Okay</button>
    </div>

    <div class="answer-popup">
        <i class="fa-solid fa-cross answer-cross"></i>
        <h3>Congratulations!! You are right.</h3>
        <img src="images/golden ribbon.png" alt="image showing a golden ribbon">
    </div>

    <img src="images/bible.jpg" alt="Image showing a Bible" class="bg-image">

    <div class="level-passed-indicator">
        <img src="images/gold medal.png" alt="an image of a gold medal with leaves on the sides" class="medal-img">
        <img src="images/crack 2.png" alt="transparent image showing a crack" class="wall-crack">
        <h4 class="level-passed-text">Level 1 Passed.</h4>
        <button id="close-button2">OKAY</button>
    </div>

    <div class="about">
        <i class="fa-solid fa-circle-xmark close-about"></i>
        <h2>Bible Quiz</h2>
        <h3>Created by - <a href="">Meshack Locho</a> (Web Developer)</h3>
        <h4>Take a tour through the Old Testament</h4>
        <p>Hey there, I am Meshack Locho, a Web Developer. This is a quiz game I developed to assist me remember some readings in the Old Testament and thought i'd share it with all of you. Every Question and answer that is correct is from the Holy Bible and is thoroughly researched. The Bible verse reference is given for your assistance and rememberance. Remember, the app is still in development and may lack some of your preferred features. If you have any messages, suggestions or questions, you may write to me down below: </p>
        <form action="messages.php" method="post">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your Email" required>
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject" placeholder="Subject of the Message" required>
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <input type="submit" value="Submit">
        </form>
    </div>

    <div class="player-progress-details">
    <img src="images/crack 2.png" alt="transparent image showing a crack" class="wall-crack">
    <i class="fa-solid fa-circle-xmark"></i>
        <?php
            if (isset($_SESSION["id"])) {?>
                <h2><i class="fa-solid fa-user"></i> Your name: <?= $_SESSION["name"]?></h2>
                <h3><i class="fa-solid fa-id-badge"></i> Your id: <?= $_SESSION["id"]?></h3>
                <h3><i class="fa-solid fa-calendar"></i> Your Age: <?= $_SESSION["age"]?></h3>
                <div> <h3><i class="fa-solid fa-image"></i> Your Profile Picture:</h3> <img src="profile-image/<?=$_SESSION['profile']?>" alt="player profile picture" id="user-prof-img"></div>
                
                <?php
                        $user_id = $_SESSION['id'];
                        $result = $conn->query("SELECT * FROM levels WHERE user_id = '$user_id' ORDER BY id DESC LIMIT 1");

                        if ($result->num_rows > 0) {
                          while ($row = $result->fetch_assoc()) { ?>
                            <h3 id="score"><i class="fa-solid fa-trophy"></i> Highest score without exiting the app: <?php echo $row["score"]?></h3>

                        <?php } 
                            }else{
                                echo "No Score";
                            }
                }else{ ?>
                    <h2>Your name: N/A</h2>
                    <h3>Your id: N/A</h3>
                    <h3>Your Profile Picture: N/A</h3>
                    <h4>Highest score without exiting the app: N/A</h4>
                <?php }

        ?>
    </div>

    <div class="image-zoom">
        <i class="fa-solid fa-xmark"></i>
        <img src="" alt="">
    </div>

    <div class="timer">
        <h4>Play Time: </h4>
        <div>
        <span class="hrs">00:</span>
        <span class="mins">00:</span>
        <span class="secs">00</span>
        </div>
    </div>

    <script src="js/quiz_js.js"></script>
</body>
</html>