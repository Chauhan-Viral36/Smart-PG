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
header('Content-Type: application/json');
$postjson = json_decode(file_get_contents('php://input'), true);
$book_user_id=$data->book_user_id;                                
   
    $query="SELECT * FROM `add_pg_detail` WHERE status = 'UnAvailable' AND book_user_id = '$postjson[book_user_id]' " ;
    
      $result = mysqli_query($con, $query);
               if ($result) 
                   {
                      while ($row[] = mysqli_fetch_assoc($result)) {
                       $json=json_encode($row);
                    }
                  }

    ?>
                                <?php 
                                echo $json;                               
    ?>   