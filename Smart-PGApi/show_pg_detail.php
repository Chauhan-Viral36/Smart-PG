<?php
include 'connection.php';
header('Content-Type: application/json');
                                
                            $query="SELECT * FROM `add_pg_detail` WHERE status = 'Available'" ;
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