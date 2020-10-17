-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2020 at 08:27 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `smartpg`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_pg_detail`
--

CREATE TABLE IF NOT EXISTS `add_pg_detail` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `pg_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pg_price` int(10) NOT NULL,
  `pg_amenities` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pg_address` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `deposite` text COLLATE utf8_unicode_ci NOT NULL,
  `pg_description` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Available',
  `user_id` int(10) NOT NULL,
  `images` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `add_pg_detail`
--

INSERT INTO `add_pg_detail` (`id`, `pg_name`, `pg_price`, `pg_amenities`, `pg_address`, `deposite`, `pg_description`, `status`, `user_id`, `images`) VALUES
(1, 'Radhe', 5000, 'AC,WIFI', 'Maninagar', '500', '1BHK', 'Available', 2, 'http://localhost/smartpg/Upload_image/logo.png'),
(2, 'Krishna', 8000, 'AC,WIFI,Lift', 'Narnapura', '1000', '2BHK', 'UnAvailable', 3, ''),
(7, 'shah', 15000, 'ac,wifi', 'ahmedabd', '1500', '3BHK', 'Available', 2, '../Upload_image/ . ');

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE IF NOT EXISTS `amenities` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `amenities_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`id`, `amenities_name`) VALUES
(1, 'AC'),
(2, 'WIFI');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(3) NOT NULL,
  `user_id` int(10) NOT NULL,
  `description` varchar(300) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE IF NOT EXISTS `registration` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `f_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `m_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `l_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `pincode` int(6) NOT NULL,
  `city` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `contact_no` text COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `profile_photo` blob NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`user_id`, `f_name`, `m_name`, `l_name`, `address`, `pincode`, `city`, `dob`, `gender`, `email`, `contact_no`, `password`, `profile_photo`) VALUES
(1, 'admin', 'admin', 'admin', 'admin', 1234, 'ahmedabad', '1997-11-11', '', 'admin@gmail.com', '123456789', 'admin@123', ''),
(2, 'Ami', 'G', 'Soni', 'Ahmedabd', 380013, 'Ahmedabad', '1997-11-14', 'female', 'ami@gmail.com', '7894561320', 'ami@1411', ''),
(3, 'Reenal', 'B', 'Patel', 'Bapunagar', 382350, 'Ahmedabad', '1997-06-17', 'female', 'reenal@gmail.com', '4561237990', 'reenal@123', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
