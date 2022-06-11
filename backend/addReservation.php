<?php
//ovde pravimo API

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$takeoverDate = $data['takeoverDate'];
$takeoverAddress = $data['takeoverAddress'];
$numberOfDays = $data['numberOfDays'];
$total = $data['total'];
$carId = $data['carId'];
$userId = $data['userId'];
$carImage = $data['carImage'];

$q = mysqli_query($con, "INSERT INTO `reservations` (`takeoverDate`,`takeoverAddress`,`numberOfDays`,`total`,`carId`,`userId`,
`carImage`) VALUES ('$takeoverDate','$takeoverAddress','$numberOfDays','$total','$carId','$userId','$carImage')");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);