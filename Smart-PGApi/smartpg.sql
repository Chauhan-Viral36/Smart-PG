-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2020 at 10:36 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartpg`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_pg_detail`
--

CREATE TABLE `add_pg_detail` (
  `id` int(3) NOT NULL,
  `pg_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pg_price` int(10) NOT NULL,
  `pg_amenities` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pg_address` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `pg_area` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `deposite` text COLLATE utf8_unicode_ci NOT NULL,
  `pg_description` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Available',
  `user_id` int(10) NOT NULL,
  `book_user_id` int(10) NOT NULL DEFAULT 0,
  `images` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `add_pg_detail`
--

INSERT INTO `add_pg_detail` (`id`, `pg_name`, `pg_price`, `pg_amenities`, `pg_address`, `pg_area`, `deposite`, `pg_description`, `status`, `user_id`, `book_user_id`, `images`) VALUES
(8, 'Maruti', 4000, 'geyser', 'Ahmedabad', 'Maninagar', '12000', 'Nice Accomodation', 'UnAvailable', 3, 0, 'http://localhost/smart-pgapi/Upload_image/5f8fdd3424e752020-10-21-09-03-16.jpg'),
(9, 'nn', 3655, 'tv', 'kjhjkdf', 'kmkrg', '10000', 'jgkjkegjkg', 'UnAvailable', 3, 0, 'http://localhost/smart-pgapi/Upload_image/5f901156641ed2020-10-21-12-45-42.jpg'),
(10, 'kljfgkletgl', 5200, 'geyser', ',mgkgrkg', ';lkgkr', '15000', 'lkjgklgjkelgk', 'Available', 3, 0, 'http://localhost/smart-pgapi/Upload_image/5f9011d4797542020-10-21-12-47-48.jpg'),
(11, 'klgkljkgrl', 3525, 'wifi', 'rjgnergnegl', 'lrgklrlg', '36522', ',mmgklerjkgemek', 'UnAvailable', 2, 0, 'http://localhost/smart-pgapi/Upload_image/5f9012bd5079a2020-10-21-12-51-41.jpg'),
(12, 'klgkljkgrl', 3525, 'wifi', 'rjgnergnegl', 'lrgklrlg', '36522', ',mmgklerjkgemek', 'Available', 3, 0, 'http://localhost/smart-pgapi/Upload_image/blob:http://localhost:8100/f883c3e0-4284-48b7-bd04-b972767e3b9b'),
(13, 'klgkljkgrl', 3525, 'wifi', 'rjgnergnegl', 'lrgklrlg', '36522', ',mmgklerjkgemek', 'UnAvailable', 2, 3, 'blob:http://localhost:8100/f883c3e0-4284-48b7-bd04-b972767e3b9b'),
(14, 'klgkljkgrl', 3525, 'wifi', 'rjgnergnegl', 'lrgklrlg', '36522', ',mmgklerjkgemek', 'UnAvailable', 3, 2, 'blob:http://localhost:8100/f883c3e0-4284-48b7-bd04-b972767e3b9b'),
(15, 'klgkljkgrl', 3525, 'wifi', 'rjgnergnegl', 'lrgklrlg', '36522', ',mmgklerjkgemek', 'Available', 3, 0, 'blob:http://localhost:8100/f883c3e0-4284-48b7-bd04-b972767e3b9b');

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `id` int(3) NOT NULL,
  `amenities_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `feedback` (
  `id` int(3) NOT NULL,
  `user_id` int(10) NOT NULL,
  `description` varchar(300) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `user_id`, `description`) VALUES
(1, 3, 'kljfgkdj;;lhlh;;hhlh;l;lg'),
(2, 2, 'hhkgkbbkkgkg');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `user_id` int(10) NOT NULL,
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
  `profile_photo` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`user_id`, `f_name`, `m_name`, `l_name`, `address`, `pincode`, `city`, `dob`, `gender`, `email`, `contact_no`, `password`, `profile_photo`) VALUES
(1, 'admin', 'admin', 'admin', 'admin', 1234, 'ahmedabad', '1997-11-11', '', 'admin@gmail.com', '123456789', 'admin@123', ''),
(2, 'Ami', 'G', 'Soni', 'Ahmedabd', 380013, 'Ahmedabad', '1997-11-14', 'female', 'ami@gmail.com', '7894561320', 'ami@1411', ''),
(3, 'Reenal', 'Babulal', 'Patel', 'Nikol', 352625, 'Ahmedabad', '2020-10-18', 'female', 'reenal@gmail.com', '7325659852', 'reenal@123', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_pg_detail`
--
ALTER TABLE `add_pg_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_pg_detail`
--
ALTER TABLE `add_pg_detail`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
