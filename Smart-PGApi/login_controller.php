<?php error_reporting(E_ALL ^ E_NOTICE); ?>
<?php
header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

include 'connection.php';
$postjson = json_decode(file_get_contents('php://input'), true);

$user_id = $data ->user_id;
$f_name = $data->f_name;
$l_name = $data->l_name;
$email = $data->email;
$password = $data->password;


$query = mysqli_query($con, "SELECT * FROM registration WHERE email='$postjson[email]' AND password='$postjson[password]'");
$result = mysqli_num_rows($query);

if ($result > 0) {

     $data = mysqli_fetch_array($query);
    
    	$datauser = array(
    		  'user_id' => $data['user_id'],
          'f_name' => $data['f_name'],
          'l_name' => $data['l_name'],
        	'email' => $data['email'],
        	'password' => $data['password']
    );

      if ($data) {
                   // $result = json_encode(array('success' => true, 'result' => $datauser));
			 $result = json_encode(array('success' => true, 'result' => 'Login Success','message'=>$datauser['f_name'] . $datauser['l_name'] , 'id' => $datauser['user_id']));	   
         // $result = json_encode(array('success' => true, 'result' => 'Login Success' , 'message' => $datauser['f_name']));
                }  
}
else {
       $result = json_encode(array('success' => false, 'result' => 'Invalid Data OR User Not Register'));
    }

echo $result;

mysqli_close($con);

?>


