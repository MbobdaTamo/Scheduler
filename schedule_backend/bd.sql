-- Adminer 4.8.0 MySQL 5.5.5-10.3.27-MariaDB-0+deb10u1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Amphi`;
CREATE TABLE `Amphi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `capacite` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `Classe`;
CREATE TABLE `Classe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `effectif` int(11) NOT NULL,
  `departement` varchar(40) NOT NULL,
  `niveau` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `Enseignant`;
CREATE TABLE `Enseignant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `grade` varchar(30) NOT NULL,
  `departement` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `PlageHoraire`;
CREATE TABLE `PlageHoraire` (
  `id` int(11) NOT NULL,
  `annee` int(11) NOT NULL,
  `semestre` int(11) NOT NULL,
  `jour` enum('lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche') NOT NULL,
  `debut` int(11) NOT NULL,
  `fin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `Sceance`;
CREATE TABLE `Sceance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `period` varchar(100) NOT NULL,
  `transition` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `salle` int(11) NOT NULL,
  `classe` int(11) NOT NULL,
  `enseignant` int(11) NOT NULL,
  `annee` int(11) NOT NULL,
  `semestre` varchar(40) NOT NULL,
  `jour` varchar(20) NOT NULL,
  `heure_debut` int(11) NOT NULL,
  `heure_fin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `classe` (`classe`),
  KEY `enseignant` (`enseignant`),
  KEY `salle` (`salle`),
  CONSTRAINT `Sceance_ibfk_1` FOREIGN KEY (`classe`) REFERENCES `Classe` (`id`),
  CONSTRAINT `Sceance_ibfk_2` FOREIGN KEY (`enseignant`) REFERENCES `Enseignant` (`id`),
  CONSTRAINT `Sceance_ibfk_3` FOREIGN KEY (`salle`) REFERENCES `Amphi` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2022-06-04 10:17:23
-- Adminer 4.8.0 MySQL 5.5.5-10.3.27-MariaDB-0+deb10u1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Amphi`;
CREATE TABLE `Amphi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `capacite` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `Classe`;
CREATE TABLE `Classe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `effectif` int(11) NOT NULL,
  `departement` varchar(40) NOT NULL,
  `niveau` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `Enseignant`;
CREATE TABLE `Enseignant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `grade` varchar(30) NOT NULL,
  `departement` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `PlageHoraire`;
CREATE TABLE `PlageHoraire` (
  `id` int(11) NOT NULL,
  `annee` int(11) NOT NULL,
  `semestre` int(11) NOT NULL,
  `jour` enum('lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche') NOT NULL,
  `debut` int(11) NOT NULL,
  `fin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `Sceance`;
CREATE TABLE `Sceance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `period` varchar(100) NOT NULL,
  `transition` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `salle` int(11) NOT NULL,
  `classe` int(11) NOT NULL,
  `enseignant` int(11) NOT NULL,
  `annee` int(11) NOT NULL,
  `semestre` varchar(40) NOT NULL,
  `jour` varchar(20) NOT NULL,
  `heure_debut` int(11) NOT NULL,
  `heure_fin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `classe` (`classe`),
  KEY `enseignant` (`enseignant`),
  KEY `salle` (`salle`),
  CONSTRAINT `Sceance_ibfk_1` FOREIGN KEY (`classe`) REFERENCES `Classe` (`id`),
  CONSTRAINT `Sceance_ibfk_2` FOREIGN KEY (`enseignant`) REFERENCES `Enseignant` (`id`),
  CONSTRAINT `Sceance_ibfk_3` FOREIGN KEY (`salle`) REFERENCES `Amphi` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2022-06-04 10:17:23
