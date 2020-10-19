<?php error_reporting(E_ALL ^ E_NOTICE); ?>
<?php

include 'connection.php';
$postjson = json_decode(file_get_contents('php://input'), true);

$id=$data->id;                                
$pg_name = $data->pg_name; 


$query = mysqli_query($con, "SELECT * FROM `add_pg_detail` WHERE status = 'Available'");
$result = mysqli_num_rows($query);

if ($result > 0) {

     $data = mysqli_fetch_array($query);
    
    	$datauser = array(
    		  'id' => $data['id']
    );

      if ($data) {
                  //  $result = json_encode(array('success' => true, 'result' => $datauser));
          $result = json_encode(array('success' => true, 'result' => 'Success','id'=>$datauser['id']));
          // echo $data;
          // echo $query;
        }  
}
else {
       $result = json_encode(array('success' => false, 'result' => 'Invalid Data OR User Not Register'));
    }

echo $result;
mysqli_close($con);

?>


