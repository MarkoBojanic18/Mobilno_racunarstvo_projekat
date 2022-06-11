<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$markOfTheCar = $data['markOfTheCar'];
$modelOfTheCar = $data['modelOfTheCar'];
$carMade = $data['carMade'];
$carCrossed = $data['carCrossed'];
$carFuelType = $data['carFuelType'];
$carCubicCapacity = $data['carCubicCapacity'];
$carEnginePower = $data['carEnginePower'];
$carTransmission = $data['carTransmission'];
$carEmissionClass = $data['carEmissionClass'];
$carClimate = $data['carClimate'];
$carDoors = $data['carDoors'];
$carBody = $data['carBody'];
$carSeats = $data['carSeats'];
$carColor = $data['carColor'];
$carDrive = $data['carDrive'];
$carPrice = $data['carPrice'];
$carType = $data['carType'];
$carImage = $data['carImage'];
$accessories = $data['accessories'];
$carLikes = $data['carLikes'];
$carDislikes = $data['carDislikes'];
$carReserved = $data['carReserved'];
$carOwnerId = $data['carOwnerId'];
$id = $_GET['id'];

$q = mysqli_query($con, "UPDATE `car` SET `markOfTheCar`='$markOfTheCar',`modelOfTheCar`='$modelOfTheCar',`carMade`='$carMade',
`carCrossed`='$carCrossed',`carFuelType`='$carFuelType',`carCubicCapacity`='$carCubicCapacity',
`carEnginePower`='$carEnginePower',`carTransmission`='$carTransmission',`carEmissionClass`='$carEmissionClass',
`carClimate`='$carClimate',`carDoors`='$carDoors',`carBody`='$carBody',
`carSeats`='$carSeats',`carColor`='$carColor',`carDrive`='$carDrive',
`carPrice`='$carPrice',`carType`='$carType',`carImage`='$carImage',
`accessories`='$accessories',`carLikes`='$carLikes',`carDislikes`='$carDislikes',
`carReserved`='$carReserved',`carOwnerId`='$carOwnerId' WHERE `id` = '{$id}' LIMIT 1");

if($q){
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);