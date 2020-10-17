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
$user_id=$data->user_id;
$images=$data->images;

//$target_path = "Upload_image/";
 
//$target_path = $target_path . basename( $_FILES['file']['name']);
 
//if (move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
 //   echo "Upload and move success";
//}
//else {
//    echo $target_path;
//    echo "There was an error uploading the file, please try again!";
//}

$query = "INSERT INTO `add_pg_detail`(`pg_name`, `pg_price`, `pg_amenities`, `pg_address`, `pg_area`, `deposite`,`pg_description`,`user_id`, `images`) VALUES ('$pg_name','$pg_price','$pg_amenities','$pg_address','$pg_area','$deposite','$pg_description','$user_id','$images')";
 
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
