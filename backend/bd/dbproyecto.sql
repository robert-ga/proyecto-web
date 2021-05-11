-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-05-2021 a las 06:50:31
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbproyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `apellido` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `nombreus` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `correo` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`id`, `nombre`, `apellido`, `nombreus`, `correo`, `password`) VALUES
(3, 'ddsffsfsfsf', 'fsfsfsff', 'fsfsfsf', 'arm@gmail.com', '1111abcd'),
(8, 'useer2', 'prueba user', 'user2@gmail.com', 'cualquiera', '1212');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buses`
--

CREATE TABLE `buses` (
  `id_bus` int(50) NOT NULL,
  `origenbus` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `destinobus` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `fecha` varchar(80) COLLATE utf8_bin DEFAULT NULL,
  `hora` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `nombrebus` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `tipobus` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `precio` varchar(150) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `buses`
--

INSERT INTO `buses` (`id_bus`, `origenbus`, `destinobus`, `fecha`, `hora`, `nombrebus`, `tipobus`, `precio`) VALUES
(7, 'la paz', 'cochabamba', '2021-05-13', '22:53', 'n1', 'Bus Cama', '70'),
(12, 'oruro', 'la paz', '2021-05-12', '23:30', 'n6', 'Bus Cama', '110');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `id_ruta` int(11) NOT NULL,
  `origen` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `destino` varchar(70) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rutas`
--

INSERT INTO `rutas` (`id_ruta`, `origen`, `destino`) VALUES
(1, 'oruro', 'cochabamba'),
(3, 'cochabamba', 'oruro'),
(4, 'la paz', 'oruro'),
(12, 'oruro', 'la paz');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `buses`
--
ALTER TABLE `buses`
  ADD PRIMARY KEY (`id_bus`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD PRIMARY KEY (`id_ruta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `buses`
--
ALTER TABLE `buses`
  MODIFY `id_bus` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `rutas`
--
ALTER TABLE `rutas`
  MODIFY `id_ruta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
