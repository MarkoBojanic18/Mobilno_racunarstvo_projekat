<?php
//ovde pravimo API

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$firstName = $data['firstName'];
$lastName = $data['lastName'];
$phoneNumber = $data['phoneNumber'];
$email = $data['email'];
$password = $data['password'];
$admin = $data['admin'];

$q = mysqli_query($con, "INSERT INTO `user` (`firstName`,`lastName`,`phoneNumber`,`email`,`password`,`admin`) VALUES ('$firstName','$lastName','$phoneNumber','$email','$password','$admin')");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);