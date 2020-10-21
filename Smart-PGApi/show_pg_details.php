<?php error_reporting(E_ALL ^ E_NOTICE); ?>
<?php
include 'connection.php';
header('Content-Type: application/json');

$postjson = json_decode(file_get_contents('php://input'), true);
$id=$data->id;   
                                
                            $query="select registration.user_id , registration.f_name,registration.l_name , add_pg_detail.* from add_pg_detail left join registration on registration.user_id=add_pg_detail.user_id  WHERE id = '$postjson[id]'" ;
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