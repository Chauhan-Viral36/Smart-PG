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
$images = $data->images;


//Call this function after getting base64 by post
//$imageBase64=$_POST['images'];//get base64 of image from client end

// $unique_name =uploadSingleImage($imageBase64);//function call

//function to upload image and get an unique name to store in db

  //  function uploadSingleImage($base64) {

    //   global $uniname; 
      // $uniname = uniqid() . date("Y-m-d-H-i-s") . ".jpg";
        //$new_image_url = "Upload_image/" . $uniname;
        //$base64 = 'data:image/jpeg;base64,' . $base64;
       // $base64 = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64));
      //  file_put_contents($new_image_url, $base64);
    //}
	
	define('UPLOAD_DIR', 'Upload_image/');
        $image_parts = explode(";base64,", $images);
        $image_type_aux = explode("Upload_image/", $image_parts[0]);
        $image_type = $image_type_aux[1];
        $image_base64 = base64_decode($image_parts[1]);
        $file = UPLOAD_DIR . uniqid() . '.png';
        file_put_contents($file, $image_base64);


 $query = "INSERT INTO `add_pg_detail`(`pg_name`, `pg_price`, `pg_amenities`, `pg_address`, `pg_area` , `deposite`,`pg_description`,`user_id`, `images`) VALUES ('$pg_name','$pg_price','$pg_amenities','$pg_address', '$pg_area' ,'$deposite','$pg_description','$user_id','http://localhost/Smart-PGApi/$file')";

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
