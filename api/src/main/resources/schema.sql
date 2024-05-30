DROP DATABASE IF EXISTS onomatopoeias;

CREATE DATABASE onomatopoeias;

USE onomatopoeias;

CREATE TABLE `categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `onomatopoeias` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category_id` bigint DEFAULT NULL,
  `date_created` date DEFAULT NULL,
  `onomatopoeia` varchar(255) DEFAULT NULL,
  `meaning` varchar(255) DEFAULT NULL,
  `example` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
);




