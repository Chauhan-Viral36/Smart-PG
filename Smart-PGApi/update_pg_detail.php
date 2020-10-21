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

$input = file_get_contents('php://input'); 
$data =(object) json_decode($input, true); 
$message = array();
global $data;

$pg_name = $data->pg_name;
$pg_price = $data->pg_price;
$pg_amenities = $data->pg_amenities;
$pg_address = $data->pg_address;
$pg_area = $data->pg_area;
$deposite = $data->deposite;
$pg_description = $data->pg_description;
$status=$data->status;
$id=$data->id;
// $target_path=$data->target_path;

$query = "UPDATE `add_pg_detail` SET `pg_name`='$pg_name',`pg_price`='$pg_price',`pg_amenities`='$pg_amenities',`pg_address`='$pg_address',`pg_area`='$pg_area', `deposite`='$deposite',`pg_description`='$pg_description' WHERE `id`= '$id'";
 
$result = mysqli_query($con, $query);
if ($result) {
   $message['status'] = "Success"; 
}
elseif ($result === '') {
     $message['status'] = "Blank VALUES";
    }
    else{
    $message['status'] = "Error";
    }

echo  json_encode($message);
mysqli_close($con);

?>
