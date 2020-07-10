-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 10 2020 г., 16:50
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `description`
--

-- --------------------------------------------------------

--
-- Структура таблицы `description`
--

CREATE TABLE `description` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `description`
--

INSERT INTO `description` (`id`, `name`, `quantity`, `distance`, `date`) VALUES
(1, 'VLad', 10, 750, '2020-07-07 17:06:42'),
(2, 'Dima', 2, 900, '2020-07-07 17:06:42'),
(3, 'Alena', 5, 300, '2020-07-07 17:06:42'),
(4, 'Roman', 7, 400, '2020-07-07 17:06:42'),
(5, 'Tanya', 18, 950, '2020-07-08 11:35:04'),
(6, 'Valentin', 15, 1300, '2020-07-08 13:21:57'),
(7, 'Roma', 360, 1500, '2020-07-08 13:21:57'),
(8, 'Yura', 120, 3200, '2020-07-08 13:21:57'),
(9, 'Yura', 120, 3200, '2020-07-08 13:21:57'),
(10, 'Yura', 120, 3200, '2020-07-08 13:21:57'),
(11, 'Yura', 120, 3200, '2020-07-08 13:21:57'),
(12, 'Yura', 120, 3200, '2020-07-08 13:21:57'),
(13, 'Yura', 120, 3200, '2020-07-08 13:21:57'),
(14, 'Yura', 120, 3200, '2020-07-08 13:21:57'),
(15, 'Yura', 120, 3200, '2020-07-08 13:21:57'),
(16, 'Roma', 360, 1500, '2020-07-08 13:21:57'),
(17, 'Roma', 360, 1500, '2020-07-08 13:21:57'),
(18, 'Roma', 360, 1500, '2020-07-08 13:21:57'),
(19, 'Valentin', 15, 1300, '2020-07-08 13:21:57'),
(20, 'Valentin', 15, 1300, '2020-07-08 13:21:57'),
(21, 'Alena', 5, 300, '2020-07-07 17:06:42'),
(22, 'Alena', 5, 300, '2020-07-07 17:06:42'),
(23, 'Roman', 7, 400, '2020-07-07 17:06:42');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `description`
--
ALTER TABLE `description`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `description`
--
ALTER TABLE `description`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
