<?php

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
$id = $_GET['id'];

$q = mysqli_query($con, "UPDATE `user` SET `firstName`='$firstName',`lastName`='$lastName',`phoneNumber`='$phoneNumber',`email`='$email',`password`='$password',`admin`='$admin' WHERE `id` = '{$id}' LIMIT 1");

if($q){
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);