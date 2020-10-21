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
$message = array();
$id=$data->id; 

$query = "DELETE FROM  `add_pg_detail` WHERE id='$postjson[id]'";
$result = mysqli_query($con, $query);

if ($result == 0) {
    $message['status'] = "Error"; 
}
    else{
    $message['status'] = "Success";
    }
	echo  json_encode($message);
mysqli_close($con); 
?>
