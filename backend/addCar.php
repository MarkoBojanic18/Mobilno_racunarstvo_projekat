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

$q = mysqli_query($con, "INSERT INTO `car` (`markOfTheCar`,`modelOfTheCar`,`carMade`,`carCrossed`,`carFuelType`,
`carCubicCapacity`,`carEnginePower`,`carTransmission`,`carEmissionClass`,`carClimate`,`carDoors`,`carBody`,`carSeats`,
`carColor`,`carDrive`,`carPrice`,`carType`,`carImage`,`accessories`,`carLikes`,`carDislikes`,`carReserved`,`carOwnerId`) 
VALUES ('$markOfTheCar','$modelOfTheCar','$carMade','$carCrossed','$carFuelType','$carCubicCapacity',
'$carEnginePower','$carTransmission','$carEmissionClass','$carClimate','$carDoors','$carBody',
'$carSeats','$carColor','$carDrive','$carPrice','$carType','$carImage',
'$accessories','$carLikes','$carDislikes','$carReserved','$carOwnerId')");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);