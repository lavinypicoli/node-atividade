CREATE DATABASE  IF NOT EXISTS `atividade` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `atividade`;
-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: localhost    Database: atividade
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.24-MariaDB-1~precise

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dados`
--

DROP TABLE IF EXISTS `dados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estacao_id` int(11) NOT NULL,
  `temperatura` float DEFAULT NULL,
  `velocidade_vento` float DEFAULT NULL,
  `umidade` float DEFAULT NULL,
  `data` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dados`
--

LOCK TABLES `dados` WRITE;
/*!40000 ALTER TABLE `dados` DISABLE KEYS */;
INSERT INTO `dados` VALUES (1,1,12.3,3,42,'2017-03-01'),(2,1,13,4,44,'2017-03-02'),(3,1,15.5,3,46,'2017-03-03'),(4,1,13,5,50,'2017-03-04'),(5,1,14.6,4,51,'2017-03-05'),(6,1,13,4,48,'2017-03-06'),(7,2,18,2,65,'2017-03-01'),(8,2,19,2,66,'2017-03-02'),(9,2,20,4,65,'2017-03-03'),(10,2,17,5,68,'2017-03-04'),(11,2,14,6,68,'2017-03-05'),(12,2,13,5,69,'2017-03-06'),(13,2,11,4,68,'2017-03-07'),(14,3,23,1,73,'2017-03-01'),(15,3,22,1,74,'2017-03-02'),(16,3,22.4,1,74,'2017-03-03'),(17,3,23.5,2,74,'2017-03-04'),(18,3,25.1,1,73,'2017-03-05'),(19,3,27.6,0,72,'2017-03-06'),(20,3,28,1,71,'2017-03-07'),(21,3,28,1,72,'2017-03-08'),(22,4,31,2,86,'2017-03-01'),(23,4,30.6,2,88,'2017-03-02'),(24,4,30.1,3,86,'2017-03-03'),(25,4,29.8,3,85,'2017-03-04'),(26,4,30.5,4,86,'2017-03-05'),(27,5,17.2,1,62,'2017-03-01'),(28,5,17.6,0,62,'2017-03-02'),(29,5,18,0,63,'2017-03-03'),(30,5,18.3,0,64,'2017-03-04'),(31,5,17.9,1,64,'2017-03-05'),(32,5,18.7,1,70,'2017-03-06'),(33,5,19,2,71,'2017-03-07'),(34,5,19.8,1,71,'2017-03-08'),(35,5,19.3,0,73,'2017-03-09');
/*!40000 ALTER TABLE `dados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estacoes`
--

DROP TABLE IF EXISTS `estacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estacoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serial` varchar(255) DEFAULT NULL,
  `lat` varchar(255) DEFAULT NULL,
  `lon` varchar(255) DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estacoes`
--

LOCK TABLES `estacoes` WRITE;
/*!40000 ALTER TABLE `estacoes` DISABLE KEYS */;
INSERT INTO `estacoes` VALUES (1,'A50650A017','-18.2108333333','-53.2041666667','São Paulo'),(2,'B205843A03','-11.7664444444','-45.6497500000','Santa Maria'),(3,'A004155033','-12.9020277778','-45.4990555556','Porto Alegre'),(4,'A00655N019','-28.5052777778','-53.2658333333','Florianópolis'),(5,'A91123N234','-18.6166666667','-49.4166666667','Curitiba');
/*!40000 ALTER TABLE `estacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'atividade'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-02 12:05:29
