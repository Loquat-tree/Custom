-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2021 年 06 月 16 日 10:03
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `php`
--
CREATE DATABASE IF NOT EXISTS `php` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `php`;

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `admin_pw` int(30) NOT NULL,
  `create_time` date NOT NULL,
  `admin_type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_pw`, `create_time`, `admin_type`) VALUES
(1, '沈大大', 456789, '2021-05-31', '系统管理员');

-- --------------------------------------------------------

--
-- 表的结构 `emp_info`
--

CREATE TABLE IF NOT EXISTS `emp_info` (
  `e_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `e_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `e_sex` enum('男','女') COLLATE utf8_unicode_ci NOT NULL,
  `e_dept` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `e_birth` date NOT NULL,
  `e_entry` date NOT NULL,
  PRIMARY KEY (`e_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=35 ;

--
-- 转存表中的数据 `emp_info`
--

INSERT INTO `emp_info` (`e_id`, `e_name`, `e_sex`, `e_dept`, `e_birth`, `e_entry`) VALUES
(1, '谢丽', '女', '广东', '1995-10-12', '2016-01-06'),
(2, '张强大', '男', '贵州', '1989-02-06', '2018-10-05'),
(3, '王雪松', '男', '北京', '1992-06-15', '2019-05-06'),
(5, '钱敏敏', '女', '广东', '1995-01-12', '2019-12-06'),
(6, '赵孙模', '男', '广西', '1989-11-01', '2018-11-18'),
(7, 'eee', '女', '甘肃', '2021-05-28', '2021-05-29'),
(8, 'edad123', '男', '安徽', '2021-05-14', '2021-05-14'),
(10, 'eee123', '男', '重庆', '2021-05-21', '2021-05-22'),
(11, 'wq', '女', '北京', '2021-05-21', '2021-05-29'),
(12, 'adad', '女', '广东', '2021-05-13', '2021-05-05'),
(13, 'sxt', '女', '北京', '2000-06-01', '2018-05-16'),
(28, '游乐王子', '男', '北京', '2021-06-04', '2021-06-19'),
(32, '哇啦哇啦', '女', '重庆', '2021-06-18', '2021-06-07'),
(33, '咕咕', '男', '广东', '2021-06-01', '2021-07-08'),
(34, '嘻嘻嘻', '女', '重庆', '2021-06-02', '2021-08-13');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
