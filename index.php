<?php

session_start();
include("config.php");
if (!isset($_SESSION["id"])) {
    header("Location: login.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Bible games, quizes and chats</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nova Cut">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Josefin Sans">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header>
        <h3>Welcome <?= $_SESSION["name"]?>, Jesus Loves you</h3>
    </header>

    <main>
        <section class="section1">
            <div class="activities-available">
                <a href="bible quiz.php">
                    <img src="images/Bible-questionmark.jpeg" alt="image of a question mark alongside a Bible">
                    <h4>Bible quiz (OLD Testament, Part1)</h4>
                    <i class="fa-solid fa-cross"></i>
                </a>
                <a href="chat/chat.php">
                    <img src="images/bible-chat.jpeg" alt="image of a chat icon alongside a Bible">
                    <h4>Bible Chat</h4>
                    <i class="fa-solid fa-cross"></i>
                </a>
                <a href="#">
                    <img src="images/bible-character.jpeg" alt="image of a questionmark alongside a Bible character">
                    <h4>Guess the Character(Coming Soon)</h4>
                    <i class="fa-solid fa-cross"></i>
                </a>
                <a href="#">
                    <img src="images/garden.jpeg" alt="image of a beatiful garden">
                    <h4>Bible Events(Coming Soon)</h4>
                    <i class="fa-solid fa-cross"></i>
                </a>
            </div>
        </section>

        <section class="section2">
            <div class="user-details">
                <div>
                    <img src="images/trophy.png" alt="image of a trophy with no background" style="object-fit: contain;">
                    <h4>Highest Score: 
                    <?php
                            $user_id = $_SESSION['id'];
                            $res = $conn->query("SELECT * FROM levels WHERE user_id = $user_id ORDER BY score DESC LIMIT 1");

                            if ($res->num_rows > 0) {
                                while ($row = $res->fetch_assoc()) {?>
                                    <span id="high-score-val"><?php echo $row['score']?></span>
                               <?php }
                            }else{?>
                                <span id="high-score-val">No data Yet</span>
                           <?php }
                            
                            ?>
                        
                    </h4>
                </div>
                <div>
                    <img src="profile-image/<?= $_SESSION["profile"] ?>" alt="Profile Picture">
                    <h4>Your name: <?= $_SESSION["name"]?></h4>
                </div>
                <div>
                    <img src="images/timer.jpeg" alt="image showing an ancient timer on an island">
                    <?php
                     $timeRes = $conn->query("SELECT * FROM time_played WHERE user_id = $user_id ORDER BY time DESC LIMIT 1");
                     if ($timeRes->num_rows > 0) {
                        while ($row = $timeRes->fetch_assoc()) {?>
                            <h4>Highest Play time: <?php echo $row['time']?></h4>
                       <?php }
                     }else{ ?>
                            <h4>Highest Play time: No data yet</h4>
                     <?php }
                    
                    ?>
                    
                </div>
                <div>
                    <img src="images/highest-level.jpeg" alt="image showing the highest level in a game">
                    <?php
                        $level = $conn->query("SELECT * FROM levels WHERE user_id=$user_id ORDER BY level DESC LIMIT 1");
                        if ($level->num_rows > 0) {
                            while ($row=$level->fetch_assoc()) { ?>
                                <h4>Highest level: <?php echo $row['level']?></h4>
                            <?php }
                            }else{ ?>
                                <h4>Highest level: No data yet</h4>
                      <?php  } 
                    ?>
                </div>
            </div>
        </section>
        <img src="images/cross-image.jpg" alt="image of jesus' cross" class="bg-image">
    </main>
    <img src="images/cross-image.jpg" alt="image of jesus' cross" class="bg-image">

    <footer>
        
        <nav>
            <ul>
                <li>Contact</li>
                <li>About</li>
                <li><a href="https://meshacklocho.co.ke" target="_blank">Creator</a></li>
            </ul>
        </nav>

        <hr>

        <div>
            <h4>&copy; Copyright 2024, Meshack Locho</h4>
            <a href="https://meshacklocho.co.ke" target="_blank">Portfolio</a>
        </div>

    </footer>

    <script src="js/index.js"></script>
</body>
</html>