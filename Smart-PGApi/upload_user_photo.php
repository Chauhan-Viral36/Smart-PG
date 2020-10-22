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

$profile_photo = $data->profile_photo;
$user_id = $data->user_id;

	define('UPLOAD_DIR', 'Upload_profile/');
        $image_parts = explode(";base64,", $profile_photo);
        $image_type_aux = explode("Upload_profile/", $image_parts[0]);
        $image_type = $image_type_aux[1];
        $image_base64 = base64_decode($image_parts[1]);
        $file = UPLOAD_DIR . uniqid() . '.png';
        file_put_contents($file, $image_base64);


 $query = "UPDATE `registration` SET `profile_photo`='http://localhost/Smart-PGApi/$file' WHERE `user_id` = '$user_id'";

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
