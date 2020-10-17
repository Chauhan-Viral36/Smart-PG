<?php error_reporting (E_ALL ^ E_NOTICE); ?>
<?php

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') 
    {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }
include 'connection.php';
global $data;
$postjson = json_decode(file_get_contents('php://input'), true);
$pg_area=$data->pg_area;
header('Content-Type: application/json');
                                
                            $query="SELECT * FROM `add_pg_detail` WHERE pg_area = '$postjson[pg_area]'" ;
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