<?php error_reporting (E_ALL ^ E_NOTICE); ?>
<?php
header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') 
    {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }
    
include 'connection.php';

$input = file_get_contents('php://input'); 
$data =(object) json_decode($input, true); 
$message = array();
   global $data;


$status=$data->status;
$user_id=$data->user_id;

$query = "UPDATE `add_pg_detail` SET `status`= 'UnAvailable' where user_id= '$user_id'";

$result = mysqli_query($con, $query);
if ($result) {
   $message['status'] = "Success"; 
}
    else{
    $message['status'] = "Error";
    }

echo  json_encode($message);
mysqli_close($con);

?>