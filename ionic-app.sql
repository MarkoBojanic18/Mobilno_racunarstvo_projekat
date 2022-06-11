-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2022 at 11:56 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ionic-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `id` int(11) NOT NULL,
  `markOfTheCar` varchar(256) NOT NULL,
  `modelOfTheCar` varchar(256) NOT NULL,
  `carMade` varchar(256) NOT NULL,
  `carCrossed` varchar(256) NOT NULL,
  `carFuelType` varchar(256) NOT NULL,
  `carCubicCapacity` varchar(256) NOT NULL,
  `carEnginePower` varchar(256) NOT NULL,
  `carTransmission` varchar(256) NOT NULL,
  `carEmissionClass` varchar(256) NOT NULL,
  `carClimate` varchar(256) NOT NULL,
  `carDoors` varchar(256) NOT NULL,
  `carBody` varchar(256) NOT NULL,
  `carSeats` varchar(256) NOT NULL,
  `carColor` varchar(256) NOT NULL,
  `carDrive` varchar(256) NOT NULL,
  `carPrice` varchar(256) NOT NULL,
  `carType` varchar(256) NOT NULL,
  `carImage` varchar(256) NOT NULL,
  `accessories` varchar(256) NOT NULL,
  `carLikes` int(255) NOT NULL,
  `carDislikes` int(255) NOT NULL,
  `carReserved` varchar(7) NOT NULL,
  `carOwnerId` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`id`, `markOfTheCar`, `modelOfTheCar`, `carMade`, `carCrossed`, `carFuelType`, `carCubicCapacity`, `carEnginePower`, `carTransmission`, `carEmissionClass`, `carClimate`, `carDoors`, `carBody`, `carSeats`, `carColor`, `carDrive`, `carPrice`, `carType`, `carImage`, `accessories`, `carLikes`, `carDislikes`, `carReserved`, `carOwnerId`) VALUES
(5, 'Audi', 'dsfdf', 'sfdsfs', 'sfeff', 'Dizel', 'sfefse', 'sfefesf', 'sefesf', 'sefsefe', 'fsefesfes', '4', 'Caravan', 'fesfsef', 'esfsfef', 'fsefsef', '50', 'sfsefsef', 'https://pngimg.com/uploads/audi/audi_PNG99491.png', 'sefesfesfsfse', 4, 1, 'true', 13),
(8, 'Škoda', 'Octavia', '2014', '245.000', 'Dizel', '235', '32434', 'Manuel', 'Euro 3', 'Manuel', '4', 'Limousine', '4', 'red', 'sfefe', '45', 'Sport', 'https://cdn.skoda-storyboard.com/2020/01/NEW_OCTAVIA_FRONT.png', 'sfefesffesfe', 1, 0, 'false', 25);

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(255) NOT NULL,
  `takeoverDate` varchar(256) NOT NULL,
  `takeoverAddress` varchar(256) NOT NULL,
  `numberOfDays` varchar(256) NOT NULL,
  `total` varchar(256) NOT NULL,
  `carId` int(255) NOT NULL,
  `userId` int(255) NOT NULL,
  `carImage` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `takeoverDate`, `takeoverAddress`, `numberOfDays`, `total`, `carId`, `userId`, `carImage`) VALUES
(7, '12-05-2022, 09:00', 'Vršava Iii, 76001 Zlín, Zlín, Czech Republic', '3', '150', 5, 21, 'https://pngimg.com/uploads/audi/audi_PNG99491.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(256) NOT NULL,
  `lastName` varchar(256) NOT NULL,
  `phoneNumber` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `admin` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `phoneNumber`, `email`, `password`, `admin`) VALUES
(13, 'Vlada', 'Bojanic', '23424344', 'vladabojanic@gmail.com', '123456', 'true'),
(21, 'Marko', 'Bojanic', '3424343', 'markobojanic@gmail.com', '123456', 'false'),
(27, 'Dragan', 'Bojanic', '3423434', 'draganbojanic@gmail.com', '123456', 'true'),
(29, 'Milica', 'Bicanin', '32432423', 'milicabicanin@gmail.com', '1234567', 'false');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
