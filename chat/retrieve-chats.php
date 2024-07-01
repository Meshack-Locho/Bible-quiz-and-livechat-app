<?php

session_start();
include("config.php");

$user_id = $_SESSION["id"];

$result = $conn->query("SELECT * FROM chats ORDER BY id ASC");


if ($result->num_rows > 0) {
    while ($row= $result->fetch_assoc()) {
        $comment_id = $row['id'];
        $comment_us_id = $row['user_id'];
        $time = new DateTime($row['time']);
        $formatTime = $time->format('Y-m-d H:i');
        $likes = $row['likes'];
    ?> 
            <div class="message" onclick="addReceipient()">
                <div class="user">
                    <img src="http://localhost:8080/mysite/pages/bible%20quiz%20app/profile-image/<?php echo $row['user_profile']?>" alt="profile picture">
                    <h4><?php echo $row['user_name']?></h4>
                    <?php
                        if ($row["reply_to"] !== "") { ?>
                               <h4>Reply to: <?php  echo $row["reply_to"]?></h4>
                       <?php }else{ ?>
                                <h4></h4>
                       <?php }

                    ?>
                </div>
                <div class="message-body">
                    <p><?php echo $row['comment']?></p>
                    <?php 
                        if ($row["shared_image"] !== "") {?>
                            <img src="chat-images/<?php echo $row['shared_image']?>" alt="shared image" id="shared-img" class="shared-images">
                       <?php }
                    ?>
                    <h4><?php echo $formatTime ?></h4>
                </div>
                <?php 
                if ((int)$comment_us_id  === $user_id) { ?>
                    <div class="actions">
                        <a href="delete-text.php?delete_id=<?php echo $row["id"]?>"><i class="i fa-solid fa-trash"></i></a>
                        <form action="likes.php" method="post" id="like-form">
                            <input type="hidden" name="comment_id" value="<?php echo $comment_id?>">
                            <button type="submit" id="like-btn"><i class="fa-solid fa-heart like-btn" ></i></button>
                        </form>
                        <h4>Likes: <?php echo $likes?></h4>
                    </div>
               <?php }else{?>
                        <div class="actions">
                            <form action="likes.php" method="post">
                            <input type="hidden" name="comment_id" value="<?php echo $comment_id?>">
                            <button type="submit" id="like-btn"><i class="fa-solid fa-heart like-btn" ></i></button>
                            </form>
                            <h4>Likes: <?php echo $likes?></h4>
                        </div>
              <?php }
               
                ?>

        </div>
             
        <?php 
        }
    }else{
    echo "No chats yet";
}


?>
