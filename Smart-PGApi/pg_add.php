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
$deposite = $data->deposite;
$pg_description = $data->pg_description;
// $images = $data->images;

function getDataUrl(img) {
   // Create canvas
   const canvas = document.createElement('canvas');
   const ctx = canvas.getContext('2d');
   // Set width and height
   canvas.width = img.width;
   canvas.height = img.height;
   // Draw the image
   ctx.drawImage(img, 0, 0);
   return canvas.toDataURL('image/jpeg');
}
// Select the image
const img = document.querySelector('#my-image');
img.addEventListener('load', function (event) {
   const dataUrl = getDataUrl(event.currentTarget);
   console.log(dataUrl);
});

 $query = "INSERT INTO `add_pg_detail`(`pg_name`, `pg_price`, `pg_amenities`, `pg_address`, `deposite`,`pg_description`, `images`) VALUES ('$pg_name','$pg_price','$pg_amenities','$pg_address','$deposite','$pg_description','$target_path')";
 
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
