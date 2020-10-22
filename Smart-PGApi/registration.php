<?php error_reporting (E_ALL ^ E_NOTICE); ?>
<?php

// header('Access-Control-Allow-Origin: *');
// header("Acess-Control-Allow-Credencials: true");
// header("access-control-expose-headers", "Authorization");
// header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, X-Requested-With, enctype, Content-Description");
// header("Content-Type: application/json; charset=utf-8");

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
//print($data->f_name);

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
$password = $data->password;

 $query = "INSERT INTO `registration`(`f_name`, `m_name`, `l_name`, `address`, `pincode`, `city`, `dob`, `gender`, `email`, `contact_no`, `password`) VALUES ('$f_name','$m_name','$l_name','$address','$pincode','$city','$dob','$gender','$email','$contact_no','$password')";
// $query = "INSERT INTO `registration`(`f_name`, `m_name`, `l_name`, `address`, `pincode`, `city`, `dob`, `gender`, `email`, `contact_no`, `password`) "
//        . "VALUES ('ami','g','soni','ahmedabad','123456','ahd','1212/12/12','f','ami@g.com','789456130','ami')";

 
$result = mysqli_query($con, $query);
if ($result) {
   $message['status'] = "Success"; 
	 // json_encode(array('success'=>true));
}
elseif ($result == '') {
	 $message['status'] = "Blank VALUES";
	 // json_encode(array('success'=>false, 'msg'=>'Blank VALUES'));
	}
    else{
    $message['status'] = "Error";
    // json_encode(array('success'=>false, 'msg'=>'error'));
    }
   
// echo $query;
// json_encode($query);
   echo  json_encode($message);
    // echo json_encode($msg);
// echo $query;
mysqli_close($con);

?>
