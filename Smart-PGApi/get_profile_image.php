<?php error_reporting (E_ALL ^ E_NOTICE); ?>
<?php
include 'connection.php';
header('Content-Type: application/json');

$postjson = json_decode(file_get_contents('php://input'), true);

$user_id = $data->user_id;
                                
                            $query="SELECT profile_photo FROM `registration` WHERE `user_id` = '$postjson[user_id]'" ;
                                $result = mysqli_query($con, $query);
                                if ($result) 
                                {
                                    while ($row[] = mysqli_fetch_assoc($result)) {
                                           $json=json_encode($row);
                                    }
                                }?>
                                <?php 
                                echo $json;
                                
    ?>