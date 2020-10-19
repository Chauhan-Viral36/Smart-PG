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

$f_name = $data->f_name;
$m_name = $data->m_name;
$l_name = $data->l_name;
$address = $data->address;
$pincode = $data->pincode;
$city = $data->city;
$dob = $data->dob;
$gender = $data->gender;
$email = $data->email;
$contact_no = $data->contact_no;
$profile_photo = $data->profile_photo;
$user_id = $data->user_id;

 $query = "UPDATE `registration` SET `f_name`='$f_name',`m_name`='$m_name',`l_name`='$l_name',`address`='$address',`pincode`='$pincode',`city`= '$city',`dob`='$dob',`gender`='$gender',`email`='$email',`contact_no`='$contact_no',`profile_photo`='$profile_photo' WHERE `user_id` = '$user_id'";

$result = mysqli_query($con, $query);
if ($result) {
   $message['status'] = "Success"; 
}
elseif ($result == '') 
{
	 $message['status'] = "Blank VALUES";
}
else
{
    $message['status'] = "Error";   
}
   
echo  json_encode($message);
mysqli_close($con);
?>
