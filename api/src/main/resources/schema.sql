DROP DATABASE IF EXISTS onomatopoeias;

CREATE DATABASE onomatopoeias;

USE onomatopoeias;

CREATE TABLE `onomatopoeias` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `onomatopoeia` varchar(255) DEFAULT NULL,
  `meaning` varchar(255) DEFAULT NULL,
  `example` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


