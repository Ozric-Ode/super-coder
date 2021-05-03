-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: supercoder
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attempts`
--

DROP TABLE IF EXISTS `attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attempts` (
  `Test_Id` varchar(20) NOT NULL,
  `Student_Id` varchar(10) NOT NULL,
  PRIMARY KEY (`Test_Id`,`Student_Id`),
  KEY `attempts_ibfk_2` (`Student_Id`),
  CONSTRAINT `attempts_ibfk_2` FOREIGN KEY (`Student_Id`) REFERENCES `student` (`Student_Id`) ON DELETE CASCADE,
  CONSTRAINT `attempts_ibk_1` FOREIGN KEY (`Test_Id`) REFERENCES `programming_test` (`Test_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attempts`
--

LOCK TABLES `attempts` WRITE;
/*!40000 ALTER TABLE `attempts` DISABLE KEYS */;
INSERT INTO `attempts` VALUES ('IT-101','201951022');
/*!40000 ALTER TABLE `attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `Blog_id` int NOT NULL AUTO_INCREMENT,
  `Date` datetime NOT NULL,
  `Title` varchar(200) NOT NULL,
  `Upvotes` int NOT NULL,
  `Content` longtext,
  `Downvotes` int NOT NULL,
  `Professor_Id` int DEFAULT NULL,
  `Student_Id` varchar(10) DEFAULT NULL,
  `Problem_Id` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Blog_id`),
  KEY `Professor_Id` (`Professor_Id`),
  KEY `blog_ibfk_2` (`Student_Id`),
  KEY `blog_ibfk_3_idx` (`Problem_Id`),
  CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`Professor_Id`) REFERENCES `professor` (`Professor_Id`),
  CONSTRAINT `blog_ibfk_2` FOREIGN KEY (`Student_Id`) REFERENCES `student` (`Student_Id`),
  CONSTRAINT `blog_ibfk_3` FOREIGN KEY (`Problem_Id`) REFERENCES `programming_problem` (`Problem_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (3,'2021-04-18 00:00:00','Monik is a very good Boy',0,'Monik is the best guy in the universe. Monik is our old monk without him we are nothing!!!',0,NULL,NULL,NULL),(4,'2021-04-18 00:00:00','Doge Coin is skyrocketing ',0,'While all the other crypto currencies are down dogecoin is being a stubborn boy and increasing!!',0,NULL,NULL,NULL),(5,'2021-04-18 00:00:00','asdfsadfsad',0,'fsdfadsfasdfsadf',0,NULL,NULL,NULL),(6,'2021-04-24 00:00:00','Safe Moon',0,'Safemoon Is the best',0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_comments`
--

DROP TABLE IF EXISTS `blog_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_comments` (
  `Comment_Id` int NOT NULL AUTO_INCREMENT,
  `Blog_Id` int NOT NULL,
  `Comments` mediumtext NOT NULL,
  `Student_Id` varchar(45) DEFAULT NULL,
  `Professor_Id` int DEFAULT NULL,
  PRIMARY KEY (`Comment_Id`,`Blog_Id`),
  KEY `blog_id_1_idx` (`Blog_Id`),
  KEY `blog_comments_ibfk_1_idx` (`Student_Id`),
  KEY `blog_comments_ibfk_3_idx` (`Professor_Id`),
  CONSTRAINT `blog_comments_ibfk_1` FOREIGN KEY (`Blog_Id`) REFERENCES `blog` (`Blog_id`),
  CONSTRAINT `blog_comments_ibfk_2` FOREIGN KEY (`Student_Id`) REFERENCES `student` (`Student_Id`),
  CONSTRAINT `blog_comments_ibfk_3` FOREIGN KEY (`Professor_Id`) REFERENCES `professor` (`Professor_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_comments`
--

LOCK TABLES `blog_comments` WRITE;
/*!40000 ALTER TABLE `blog_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `blog_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `Course_Code` varchar(5) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Semester` int NOT NULL,
  `Batch` int NOT NULL,
  PRIMARY KEY (`Course_Code`,`Batch`,`Semester`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('CS202','Database Management',1,2019),('EC101','Basic Electronics',2,2017),('IT101','Web Technology',1,2019),('MA202','Matlab',4,2019);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrolls`
--

DROP TABLE IF EXISTS `enrolls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enrolls` (
  `Course_Code` varchar(5) NOT NULL,
  `Student_Id` varchar(10) NOT NULL,
  PRIMARY KEY (`Course_Code`,`Student_Id`),
  KEY `Student_Id` (`Student_Id`),
  CONSTRAINT `enrolls_ibfk_1` FOREIGN KEY (`Course_Code`) REFERENCES `course` (`Course_Code`),
  CONSTRAINT `enrolls_ibfk_2` FOREIGN KEY (`Student_Id`) REFERENCES `student` (`Student_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrolls`
--

LOCK TABLES `enrolls` WRITE;
/*!40000 ALTER TABLE `enrolls` DISABLE KEYS */;
INSERT INTO `enrolls` VALUES ('CS202','201951022'),('EC101','201951022'),('IT101','201951022'),('EC101','2019510673'),('EC101','201951072'),('CS202','201951134'),('IT101','201951134'),('IT101','201951138'),('IT101','201951139'),('IT101','201952022'),('IT101','2019520223');
/*!40000 ALTER TABLE `enrolls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professor`
--

DROP TABLE IF EXISTS `professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professor` (
  `Professor_Id` int NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `First_Name` varchar(100) DEFAULT NULL,
  `Last_Name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Professor_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professor`
--

LOCK TABLES `professor` WRITE;
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
INSERT INTO `professor` VALUES (1,'antriksh_goswami@iiitvadodara.ac.in','$2b$08$TdgnW9j9Dm/3L7hULdIxx.AVl7HUdldMLJW6OPOn/5BUGsImN3zea','Antriksh','Goswami'),(2,'novarun_deb@iiitvadodara.ac.in','$2b$08$wJXqi6S/MvbKQqAgdrweb.DfjpffkzjbPxyu907y8elGLPQX0PJ9O','Novarun','Deb');
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programming_problem`
--

DROP TABLE IF EXISTS `programming_problem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programming_problem` (
  `Problem_Id` varchar(20) NOT NULL,
  `Title` varchar(200) DEFAULT NULL,
  `Professor_Id` int NOT NULL,
  `Problem_Statement` longtext NOT NULL,
  `Time_Limit` float NOT NULL,
  `Test_Id` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Problem_Id`),
  KEY `programming_problem_ibfk_1_idx` (`Test_Id`),
  CONSTRAINT `programming_problem_ibfk_1` FOREIGN KEY (`Test_Id`) REFERENCES `programming_test` (`Test_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programming_problem`
--

LOCK TABLES `programming_problem` WRITE;
/*!40000 ALTER TABLE `programming_problem` DISABLE KEYS */;
INSERT INTO `programming_problem` VALUES ('CQUES2','Basic Addition',1,'What is a+b+c+d+e?',2,'IT-101'),('DBMS','This Test Is The Best',1,'Best Question',1,'B'),('DBMS-2','This Test Is The Best but not for long',1,'  Worst Question but not for long',2.6,'DBMS-2'),('dbms-3','The Hardest Problem In the universe',1,'This is the hardest problem in the universe nobody will be able to solve it~~',2,NULL),('GYMTYM','Gym Freaks',1,'There are two friends Amit and Saurav, Amit is a gym freak he goes to the gym with a regular schedule of P slots during the gym timings, where each ith slot is defined between ai and bi. Seeing his friend Amit, Saurav also wants to go to the gym, he asks the gym manager for the slots, he gives Q slots for the gym timings, where each ith slot is defined between ci and di. But Saurav wants to workout with his friend Amit, so he asks the gym manager for help.\n\nThe gym manager says that he should shift his schedule by X units of time. Whenever he shift his schedule by X all his slots will be shifted by X period of time ( i.e ith slot will be from ci+X to di+X ). Help Saurav to find the optimal shift of time X by which Amit and Saurav can workout together for the maximum amount of time, X should be between L to R (inclusive). If multiple values of X are possible, print the minimum of them.\n\nPlease Note:- Gym Timings are between 0 to 1000 only.',1,'IT-101'),('OS-102','Operating system ka jaadu',2,'Os is the best thing next to nothing! Will you recommend windows 10 to your friends?',2.5,'IT-101');
/*!40000 ALTER TABLE `programming_problem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programming_test`
--

DROP TABLE IF EXISTS `programming_test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programming_test` (
  `Test_Id` varchar(20) NOT NULL,
  `Title` varchar(200) DEFAULT NULL,
  `Date` date NOT NULL,
  `Start_Time` time NOT NULL,
  `End_Time` time NOT NULL,
  `Course_Code` varchar(5) NOT NULL,
  `Test_Type` varchar(50) DEFAULT NULL,
  `Professor_Id` int DEFAULT NULL,
  PRIMARY KEY (`Test_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programming_test`
--

LOCK TABLES `programming_test` WRITE;
/*!40000 ALTER TABLE `programming_test` DISABLE KEYS */;
INSERT INTO `programming_test` VALUES ('A','Best Test','2019-12-12','00:00:00','02:00:00','CS202',NULL,NULL),('B','Programming Test','2021-04-23','02:00:00','03:00:00','CS202',NULL,1),('C-101','Hardest Test','2021-04-23','14:00:00','15:00:00','CS202',NULL,1),('DBMS-2','DMBS PRE-ENDSEM','2021-04-25','16:00:00','17:00:00','CS202',NULL,1),('IT-101','IT 1st year','2021-04-24','19:00:00','20:00:00','MA202',NULL,1),('Test-101','Test-Test','2021-04-24','00:00:00','23:59:00','MA202',NULL,1),('Test-102','Test-Test','2021-04-24','07:00:00','09:00:00','MA202',NULL,1);
/*!40000 ALTER TABLE `programming_test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ranklist`
--

DROP TABLE IF EXISTS `ranklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ranklist` (
  `Test_Id` varchar(20) NOT NULL,
  `Student_Id` varchar(10) NOT NULL,
  `Score` int DEFAULT '100',
  `Rank` int DEFAULT '0',
  PRIMARY KEY (`Test_Id`,`Student_Id`),
  KEY `Student_Id` (`Student_Id`),
  CONSTRAINT `ranklist_ibfk_3` FOREIGN KEY (`Student_Id`) REFERENCES `student` (`Student_Id`),
  CONSTRAINT `ranklist_ibfk_4` FOREIGN KEY (`Test_Id`) REFERENCES `programming_test` (`Test_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ranklist`
--

LOCK TABLES `ranklist` WRITE;
/*!40000 ALTER TABLE `ranklist` DISABLE KEYS */;
INSERT INTO `ranklist` VALUES ('A','201951022',20,1),('A','201951047',30,2),('A','2019510673',40,3),('A','201951070',60,5),('A','201951071',70,6),('A','201951072',80,7),('A','20195269',90,4),('IT-101','201951022',100,0);
/*!40000 ALTER TABLE `ranklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `Student_Id` varchar(10) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `First_Name` varchar(100) DEFAULT NULL,
  `Last_Name` varchar(100) DEFAULT NULL,
  `Batch` int DEFAULT NULL,
  `Semester` int DEFAULT NULL,
  PRIMARY KEY (`Student_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('201951022','201951022@iiitvadodara.ac.in','$2b$08$hZO9eoyLWuIo8RzeVLazSOtJDNPue/0vSYDMwG.lco1Vc4kdhgg3e','Amitvikram','Dwivedi',2019,2),('201951047','201951047@iiitvadodara.ac.in','$2b$08$abRITUdokQL6Jgw/TItPZuTz02KVyEQOGV5B2D4Fx5FohINFa1yH.','Chiran','Musk',2017,1),('2019510673','dwivedia2001@gmail.com','$2b$08$JAYQw390BUg3a8D7vF1WeegDsFlnFra/P1XqD6pYc.zckH7ZXuzcO','Amitvikram','Dwivedi',2017,2),('201951069','201951069@iiitvadodara.ac.in','$2b$08$xU.0R5PMYpiXO5xG80INgOR2WhclFxqCNeuk496PdwMvv4FtTG.da','Elon','Musk',2019,2),('201951070','dwivedia2001@gmail.com','$2b$08$ozc1C7c0f1qHCo7pp.RPEOqKV7lyaMbHYGFLTvM3/pr00buAhWbuK','Amitvikram','Dwivedi',2018,3),('201951071','dwivedia2001@gmail.com','$2b$08$mripAibijMQldyZVeWlXE.MgCWEPOGdxolc2odj965yTqvsi/XTV6','Amitvikram','Dwivedi',2020,2),('201951072','dwivedia2001@gmail.com','$2b$08$9uGNPLE6oiumVCgcF5.4tucyFDney2.4cbmy.XrD30NH5auaZIYei','Amitvikram','Dwivedi',2017,2),('201951134','201951022@iiitvadodara.ac.in','$2b$08$Ih7dliyxqUJbROWsl0vAJuEIuDrFJB93XZbfOhg6k9m4TAMNwMg0u','Narendra','Modi',2019,1),('201951138','201951022@iiitvadodara.ac.in','$2b$08$DJUr0McmR67DpLPQoOvUiu.e96hu0A396WBw3ImmTAgHd2EnINeGO','Narendra','Modi',2019,1),('201951139','201951022@iiitvadodara.ac.in','$2b$08$CWXJyOKb/BTNMeJGps9que6Y7cQjXTSt1SYjC5pyWYneaLpDH45Wm','Narendra','Modi',2019,1),('201952022','201951022@iiitvadodara.ac.in','$2b$08$LZbGRIyXNlQGZ5scVC9lL.Z8.oWEsGWvP6yCb2Fx2CRK312wDcGsm','Narendra','Modi',2019,1),('2019520223','201951022@iiitvadodara.ac.in','$2b$08$K1EsoIpF2v9hfOSUwV9tsO3eUupwSg37I4tyibpIe.A4FzMSOF4ha','Narendra','Modi',2019,1),('20195269','dwivedia2001@gmail.com','$2b$08$iY07bOyKUAOFsQfXI9KZge7sCXsQFNJSbzxbVWuM4qac1Ru4zJDiG','Amitvikram','Dwivedi',0,5);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submission`
--

DROP TABLE IF EXISTS `submission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submission` (
  `Submission_Id` int NOT NULL AUTO_INCREMENT,
  `Code` longblob NOT NULL,
  `Language` int NOT NULL,
  `Verdict` varchar(100) NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Type_of_submission` varchar(20) NOT NULL,
  `Student_Id` varchar(10) NOT NULL,
  `Problem_Id` varchar(20) NOT NULL,
  PRIMARY KEY (`Submission_Id`),
  KEY `Student_Id` (`Student_Id`),
  KEY `submission_ibfk_4_idx` (`Problem_Id`),
  CONSTRAINT `submission_ibfk_3` FOREIGN KEY (`Student_Id`) REFERENCES `student` (`Student_Id`),
  CONSTRAINT `submission_ibfk_4` FOREIGN KEY (`Problem_Id`) REFERENCES `programming_problem` (`Problem_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submission`
--

LOCK TABLES `submission` WRITE;
/*!40000 ALTER TABLE `submission` DISABLE KEYS */;
/*!40000 ALTER TABLE `submission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_case_file`
--

DROP TABLE IF EXISTS `test_case_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_case_file` (
  `Test_Case_File_Id` int NOT NULL AUTO_INCREMENT,
  `Problem_Id` varchar(20) NOT NULL,
  `Input` longblob NOT NULL,
  `Output` longblob NOT NULL,
  PRIMARY KEY (`Test_Case_File_Id`,`Problem_Id`),
  KEY `test_case_file_ibfk_1_idx` (`Problem_Id`),
  CONSTRAINT `test_case_file_ibfk_1` FOREIGN KEY (`Problem_Id`) REFERENCES `programming_problem` (`Problem_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_case_file`
--

LOCK TABLES `test_case_file` WRITE;
/*!40000 ALTER TABLE `test_case_file` DISABLE KEYS */;
INSERT INTO `test_case_file` VALUES (1,'dbms-3',_binary 'ÿþN\0V\0I\0D\0I\0A\0 \0S\0y\0s\0t\0e\0m\0 \0I\0n\0f\0o\0r\0m\0a\0t\0i\0o\0n\0 \0r\0e\0p\0o\0r\0t\0 \0c\0r\0e\0a\0t\0e\0d\0 \0o\0n\0:\0 \00\04\0/\01\09\0/\02\00\02\00\0 \01\02\0:\04\06\0:\02\04\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0n\0a\0m\0e\0:\0 \0K\0A\0U\0S\0H\0A\0L\0\r\0\n\0\r\0\n\0[\0D\0i\0s\0p\0l\0a\0y\0]\0\r\0\n\0O\0p\0e\0r\0a\0t\0i\0n\0g\0 \0S\0y\0s\0t\0e\0m\0:\0	\0W\0i\0n\0d\0o\0w\0s\0 \01\00\0 \0H\0o\0m\0e\0 \0S\0i\0n\0g\0l\0e\0 \0L\0a\0n\0g\0u\0a\0g\0e\0,\0 \06\04\0-\0b\0i\0t\0\r\0\n\0D\0i\0r\0e\0c\0t\0X\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\02\0.\00\0 \0\r\0\n\0G\0P\0U\0 \0p\0r\0o\0c\0e\0s\0s\0o\0r\0:\0	\0	\0G\0e\0F\0o\0r\0c\0e\0 \08\02\00\0M\0\r\0\n\0D\0r\0i\0v\0e\0r\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\0	\03\06\09\0.\00\09\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0A\0P\0I\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\01\0.\02\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0f\0e\0a\0t\0u\0r\0e\0 \0l\0e\0v\0e\0l\0:\0	\01\01\0_\00\0\r\0\n\0C\0U\0D\0A\0 \0C\0o\0r\0e\0s\0:\0	\0	\09\06\0 \0\r\0\n\0C\0o\0r\0e\0 \0c\0l\0o\0c\0k\0:\0	\0	\07\01\09\0 \0M\0H\0z\0 \0\r\0\n\0S\0h\0a\0d\0e\0r\0 \0c\0l\0o\0c\0k\0:\0	\0	\01\04\03\08\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0d\0a\0t\0a\0 \0r\0a\0t\0e\0:\0	\01\08\00\00\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0i\0n\0t\0e\0r\0f\0a\0c\0e\0:\0	\06\04\0-\0b\0i\0t\0 \0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0b\0a\0n\0d\0w\0i\0d\0t\0h\0:\0	\01\04\0.\04\00\0 \0G\0B\0/\0s\0\r\0\n\0T\0o\0t\0a\0l\0 \0a\0v\0a\0i\0l\0a\0b\0l\0e\0 \0g\0r\0a\0p\0h\0i\0c\0s\0 \0m\0e\0m\0o\0r\0y\0:\0	\06\00\09\09\0 \0M\0B\0\r\0\n\0D\0e\0d\0i\0c\0a\0t\0e\0d\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\02\00\04\08\0 \0M\0B\0 \0D\0D\0R\03\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\00\0 \0M\0B\0\r\0\n\0S\0h\0a\0r\0e\0d\0 \0s\0y\0s\0t\0e\0m\0 \0m\0e\0m\0o\0r\0y\0:\0	\04\00\05\01\0 \0M\0B\0\r\0\n\0V\0i\0d\0e\0o\0 \0B\0I\0O\0S\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\07\05\0.\01\07\0.\08\04\0.\00\00\0.\00\0D\0\r\0\n\0I\0R\0Q\0:\0	\0	\0	\0N\0o\0t\0 \0u\0s\0e\0d\0\r\0\n\0B\0u\0s\0:\0	\0	\0	\0P\0C\0I\0 \0E\0x\0p\0r\0e\0s\0s\0 \0x\04\0 \0G\0e\0n\02\0\r\0\n\0D\0e\0v\0i\0c\0e\0 \0I\0d\0:\0	\0	\01\00\0D\0E\0 \01\01\04\00\0 \00\06\05\05\01\00\02\08\0\r\0\n\0P\0a\0r\0t\0 \0N\0u\0m\0b\0e\0r\0:\0	\0	\02\00\04\01\0 \00\00\01\00\0\r\0\n\0\r\0\n\0[\0C\0o\0m\0p\0o\0n\0e\0n\0t\0s\0]\0\r\0\n\0\r\0\n\0n\0v\0u\0i\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0s\0y\0n\0c\0.\0e\0x\0e\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0p\0l\0c\0y\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0b\0a\0t\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0a\0p\0i\0x\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0N\0V\0C\0P\0L\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0R\0.\0d\0l\0l\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0.\0e\0x\0e\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0W\0S\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0W\0S\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0M\0C\0T\0R\0A\0Y\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0M\0e\0d\0i\0a\0 \0C\0e\0n\0t\0e\0r\0 \0L\0i\0b\0r\0a\0r\0y\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0C\0U\0D\0A\0.\0D\0L\0L\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0U\0D\0A\0 \08\0.\00\0.\00\0 \0d\0r\0i\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0',_binary 'ÿþN\0V\0I\0D\0I\0A\0 \0S\0y\0s\0t\0e\0m\0 \0I\0n\0f\0o\0r\0m\0a\0t\0i\0o\0n\0 \0r\0e\0p\0o\0r\0t\0 \0c\0r\0e\0a\0t\0e\0d\0 \0o\0n\0:\0 \00\04\0/\01\09\0/\02\00\02\00\0 \01\02\0:\04\06\0:\02\04\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0n\0a\0m\0e\0:\0 \0K\0A\0U\0S\0H\0A\0L\0\r\0\n\0\r\0\n\0[\0D\0i\0s\0p\0l\0a\0y\0]\0\r\0\n\0O\0p\0e\0r\0a\0t\0i\0n\0g\0 \0S\0y\0s\0t\0e\0m\0:\0	\0W\0i\0n\0d\0o\0w\0s\0 \01\00\0 \0H\0o\0m\0e\0 \0S\0i\0n\0g\0l\0e\0 \0L\0a\0n\0g\0u\0a\0g\0e\0,\0 \06\04\0-\0b\0i\0t\0\r\0\n\0D\0i\0r\0e\0c\0t\0X\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\02\0.\00\0 \0\r\0\n\0G\0P\0U\0 \0p\0r\0o\0c\0e\0s\0s\0o\0r\0:\0	\0	\0G\0e\0F\0o\0r\0c\0e\0 \08\02\00\0M\0\r\0\n\0D\0r\0i\0v\0e\0r\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\0	\03\06\09\0.\00\09\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0A\0P\0I\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\01\0.\02\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0f\0e\0a\0t\0u\0r\0e\0 \0l\0e\0v\0e\0l\0:\0	\01\01\0_\00\0\r\0\n\0C\0U\0D\0A\0 \0C\0o\0r\0e\0s\0:\0	\0	\09\06\0 \0\r\0\n\0C\0o\0r\0e\0 \0c\0l\0o\0c\0k\0:\0	\0	\07\01\09\0 \0M\0H\0z\0 \0\r\0\n\0S\0h\0a\0d\0e\0r\0 \0c\0l\0o\0c\0k\0:\0	\0	\01\04\03\08\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0d\0a\0t\0a\0 \0r\0a\0t\0e\0:\0	\01\08\00\00\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0i\0n\0t\0e\0r\0f\0a\0c\0e\0:\0	\06\04\0-\0b\0i\0t\0 \0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0b\0a\0n\0d\0w\0i\0d\0t\0h\0:\0	\01\04\0.\04\00\0 \0G\0B\0/\0s\0\r\0\n\0T\0o\0t\0a\0l\0 \0a\0v\0a\0i\0l\0a\0b\0l\0e\0 \0g\0r\0a\0p\0h\0i\0c\0s\0 \0m\0e\0m\0o\0r\0y\0:\0	\06\00\09\09\0 \0M\0B\0\r\0\n\0D\0e\0d\0i\0c\0a\0t\0e\0d\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\02\00\04\08\0 \0M\0B\0 \0D\0D\0R\03\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\00\0 \0M\0B\0\r\0\n\0S\0h\0a\0r\0e\0d\0 \0s\0y\0s\0t\0e\0m\0 \0m\0e\0m\0o\0r\0y\0:\0	\04\00\05\01\0 \0M\0B\0\r\0\n\0V\0i\0d\0e\0o\0 \0B\0I\0O\0S\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\07\05\0.\01\07\0.\08\04\0.\00\00\0.\00\0D\0\r\0\n\0I\0R\0Q\0:\0	\0	\0	\0N\0o\0t\0 \0u\0s\0e\0d\0\r\0\n\0B\0u\0s\0:\0	\0	\0	\0P\0C\0I\0 \0E\0x\0p\0r\0e\0s\0s\0 \0x\04\0 \0G\0e\0n\02\0\r\0\n\0D\0e\0v\0i\0c\0e\0 \0I\0d\0:\0	\0	\01\00\0D\0E\0 \01\01\04\00\0 \00\06\05\05\01\00\02\08\0\r\0\n\0P\0a\0r\0t\0 \0N\0u\0m\0b\0e\0r\0:\0	\0	\02\00\04\01\0 \00\00\01\00\0\r\0\n\0\r\0\n\0[\0C\0o\0m\0p\0o\0n\0e\0n\0t\0s\0]\0\r\0\n\0\r\0\n\0n\0v\0u\0i\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0s\0y\0n\0c\0.\0e\0x\0e\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0p\0l\0c\0y\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0b\0a\0t\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0a\0p\0i\0x\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0N\0V\0C\0P\0L\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0R\0.\0d\0l\0l\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0.\0e\0x\0e\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0W\0S\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0W\0S\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0M\0C\0T\0R\0A\0Y\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0M\0e\0d\0i\0a\0 \0C\0e\0n\0t\0e\0r\0 \0L\0i\0b\0r\0a\0r\0y\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0C\0U\0D\0A\0.\0D\0L\0L\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0U\0D\0A\0 \08\0.\00\0.\00\0 \0d\0r\0i\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0'),(2,'CQUES2',_binary 'ÿþN\0V\0I\0D\0I\0A\0 \0S\0y\0s\0t\0e\0m\0 \0I\0n\0f\0o\0r\0m\0a\0t\0i\0o\0n\0 \0r\0e\0p\0o\0r\0t\0 \0c\0r\0e\0a\0t\0e\0d\0 \0o\0n\0:\0 \00\04\0/\01\09\0/\02\00\02\00\0 \01\02\0:\04\06\0:\02\04\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0n\0a\0m\0e\0:\0 \0K\0A\0U\0S\0H\0A\0L\0\r\0\n\0\r\0\n\0[\0D\0i\0s\0p\0l\0a\0y\0]\0\r\0\n\0O\0p\0e\0r\0a\0t\0i\0n\0g\0 \0S\0y\0s\0t\0e\0m\0:\0	\0W\0i\0n\0d\0o\0w\0s\0 \01\00\0 \0H\0o\0m\0e\0 \0S\0i\0n\0g\0l\0e\0 \0L\0a\0n\0g\0u\0a\0g\0e\0,\0 \06\04\0-\0b\0i\0t\0\r\0\n\0D\0i\0r\0e\0c\0t\0X\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\02\0.\00\0 \0\r\0\n\0G\0P\0U\0 \0p\0r\0o\0c\0e\0s\0s\0o\0r\0:\0	\0	\0G\0e\0F\0o\0r\0c\0e\0 \08\02\00\0M\0\r\0\n\0D\0r\0i\0v\0e\0r\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\0	\03\06\09\0.\00\09\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0A\0P\0I\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\01\0.\02\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0f\0e\0a\0t\0u\0r\0e\0 \0l\0e\0v\0e\0l\0:\0	\01\01\0_\00\0\r\0\n\0C\0U\0D\0A\0 \0C\0o\0r\0e\0s\0:\0	\0	\09\06\0 \0\r\0\n\0C\0o\0r\0e\0 \0c\0l\0o\0c\0k\0:\0	\0	\07\01\09\0 \0M\0H\0z\0 \0\r\0\n\0S\0h\0a\0d\0e\0r\0 \0c\0l\0o\0c\0k\0:\0	\0	\01\04\03\08\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0d\0a\0t\0a\0 \0r\0a\0t\0e\0:\0	\01\08\00\00\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0i\0n\0t\0e\0r\0f\0a\0c\0e\0:\0	\06\04\0-\0b\0i\0t\0 \0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0b\0a\0n\0d\0w\0i\0d\0t\0h\0:\0	\01\04\0.\04\00\0 \0G\0B\0/\0s\0\r\0\n\0T\0o\0t\0a\0l\0 \0a\0v\0a\0i\0l\0a\0b\0l\0e\0 \0g\0r\0a\0p\0h\0i\0c\0s\0 \0m\0e\0m\0o\0r\0y\0:\0	\06\00\09\09\0 \0M\0B\0\r\0\n\0D\0e\0d\0i\0c\0a\0t\0e\0d\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\02\00\04\08\0 \0M\0B\0 \0D\0D\0R\03\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\00\0 \0M\0B\0\r\0\n\0S\0h\0a\0r\0e\0d\0 \0s\0y\0s\0t\0e\0m\0 \0m\0e\0m\0o\0r\0y\0:\0	\04\00\05\01\0 \0M\0B\0\r\0\n\0V\0i\0d\0e\0o\0 \0B\0I\0O\0S\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\07\05\0.\01\07\0.\08\04\0.\00\00\0.\00\0D\0\r\0\n\0I\0R\0Q\0:\0	\0	\0	\0N\0o\0t\0 \0u\0s\0e\0d\0\r\0\n\0B\0u\0s\0:\0	\0	\0	\0P\0C\0I\0 \0E\0x\0p\0r\0e\0s\0s\0 \0x\04\0 \0G\0e\0n\02\0\r\0\n\0D\0e\0v\0i\0c\0e\0 \0I\0d\0:\0	\0	\01\00\0D\0E\0 \01\01\04\00\0 \00\06\05\05\01\00\02\08\0\r\0\n\0P\0a\0r\0t\0 \0N\0u\0m\0b\0e\0r\0:\0	\0	\02\00\04\01\0 \00\00\01\00\0\r\0\n\0\r\0\n\0[\0C\0o\0m\0p\0o\0n\0e\0n\0t\0s\0]\0\r\0\n\0\r\0\n\0n\0v\0u\0i\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0s\0y\0n\0c\0.\0e\0x\0e\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0p\0l\0c\0y\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0b\0a\0t\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0a\0p\0i\0x\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0N\0V\0C\0P\0L\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0R\0.\0d\0l\0l\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0.\0e\0x\0e\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0W\0S\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0W\0S\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0M\0C\0T\0R\0A\0Y\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0M\0e\0d\0i\0a\0 \0C\0e\0n\0t\0e\0r\0 \0L\0i\0b\0r\0a\0r\0y\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0C\0U\0D\0A\0.\0D\0L\0L\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0U\0D\0A\0 \08\0.\00\0.\00\0 \0d\0r\0i\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0',_binary 'ÿþN\0V\0I\0D\0I\0A\0 \0S\0y\0s\0t\0e\0m\0 \0I\0n\0f\0o\0r\0m\0a\0t\0i\0o\0n\0 \0r\0e\0p\0o\0r\0t\0 \0c\0r\0e\0a\0t\0e\0d\0 \0o\0n\0:\0 \00\04\0/\01\09\0/\02\00\02\00\0 \01\02\0:\04\06\0:\02\04\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0n\0a\0m\0e\0:\0 \0K\0A\0U\0S\0H\0A\0L\0\r\0\n\0\r\0\n\0[\0D\0i\0s\0p\0l\0a\0y\0]\0\r\0\n\0O\0p\0e\0r\0a\0t\0i\0n\0g\0 \0S\0y\0s\0t\0e\0m\0:\0	\0W\0i\0n\0d\0o\0w\0s\0 \01\00\0 \0H\0o\0m\0e\0 \0S\0i\0n\0g\0l\0e\0 \0L\0a\0n\0g\0u\0a\0g\0e\0,\0 \06\04\0-\0b\0i\0t\0\r\0\n\0D\0i\0r\0e\0c\0t\0X\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\02\0.\00\0 \0\r\0\n\0G\0P\0U\0 \0p\0r\0o\0c\0e\0s\0s\0o\0r\0:\0	\0	\0G\0e\0F\0o\0r\0c\0e\0 \08\02\00\0M\0\r\0\n\0D\0r\0i\0v\0e\0r\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\0	\03\06\09\0.\00\09\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0A\0P\0I\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\01\0.\02\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0f\0e\0a\0t\0u\0r\0e\0 \0l\0e\0v\0e\0l\0:\0	\01\01\0_\00\0\r\0\n\0C\0U\0D\0A\0 \0C\0o\0r\0e\0s\0:\0	\0	\09\06\0 \0\r\0\n\0C\0o\0r\0e\0 \0c\0l\0o\0c\0k\0:\0	\0	\07\01\09\0 \0M\0H\0z\0 \0\r\0\n\0S\0h\0a\0d\0e\0r\0 \0c\0l\0o\0c\0k\0:\0	\0	\01\04\03\08\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0d\0a\0t\0a\0 \0r\0a\0t\0e\0:\0	\01\08\00\00\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0i\0n\0t\0e\0r\0f\0a\0c\0e\0:\0	\06\04\0-\0b\0i\0t\0 \0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0b\0a\0n\0d\0w\0i\0d\0t\0h\0:\0	\01\04\0.\04\00\0 \0G\0B\0/\0s\0\r\0\n\0T\0o\0t\0a\0l\0 \0a\0v\0a\0i\0l\0a\0b\0l\0e\0 \0g\0r\0a\0p\0h\0i\0c\0s\0 \0m\0e\0m\0o\0r\0y\0:\0	\06\00\09\09\0 \0M\0B\0\r\0\n\0D\0e\0d\0i\0c\0a\0t\0e\0d\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\02\00\04\08\0 \0M\0B\0 \0D\0D\0R\03\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\00\0 \0M\0B\0\r\0\n\0S\0h\0a\0r\0e\0d\0 \0s\0y\0s\0t\0e\0m\0 \0m\0e\0m\0o\0r\0y\0:\0	\04\00\05\01\0 \0M\0B\0\r\0\n\0V\0i\0d\0e\0o\0 \0B\0I\0O\0S\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\07\05\0.\01\07\0.\08\04\0.\00\00\0.\00\0D\0\r\0\n\0I\0R\0Q\0:\0	\0	\0	\0N\0o\0t\0 \0u\0s\0e\0d\0\r\0\n\0B\0u\0s\0:\0	\0	\0	\0P\0C\0I\0 \0E\0x\0p\0r\0e\0s\0s\0 \0x\04\0 \0G\0e\0n\02\0\r\0\n\0D\0e\0v\0i\0c\0e\0 \0I\0d\0:\0	\0	\01\00\0D\0E\0 \01\01\04\00\0 \00\06\05\05\01\00\02\08\0\r\0\n\0P\0a\0r\0t\0 \0N\0u\0m\0b\0e\0r\0:\0	\0	\02\00\04\01\0 \00\00\01\00\0\r\0\n\0\r\0\n\0[\0C\0o\0m\0p\0o\0n\0e\0n\0t\0s\0]\0\r\0\n\0\r\0\n\0n\0v\0u\0i\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0s\0y\0n\0c\0.\0e\0x\0e\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0p\0l\0c\0y\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0b\0a\0t\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0a\0p\0i\0x\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0N\0V\0C\0P\0L\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0R\0.\0d\0l\0l\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0.\0e\0x\0e\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0W\0S\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0W\0S\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0M\0C\0T\0R\0A\0Y\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0M\0e\0d\0i\0a\0 \0C\0e\0n\0t\0e\0r\0 \0L\0i\0b\0r\0a\0r\0y\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0C\0U\0D\0A\0.\0D\0L\0L\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0U\0D\0A\0 \08\0.\00\0.\00\0 \0d\0r\0i\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0'),(3,'OS-102',_binary 'ÿþN\0V\0I\0D\0I\0A\0 \0S\0y\0s\0t\0e\0m\0 \0I\0n\0f\0o\0r\0m\0a\0t\0i\0o\0n\0 \0r\0e\0p\0o\0r\0t\0 \0c\0r\0e\0a\0t\0e\0d\0 \0o\0n\0:\0 \00\04\0/\01\09\0/\02\00\02\00\0 \01\02\0:\04\06\0:\02\04\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0n\0a\0m\0e\0:\0 \0K\0A\0U\0S\0H\0A\0L\0\r\0\n\0\r\0\n\0[\0D\0i\0s\0p\0l\0a\0y\0]\0\r\0\n\0O\0p\0e\0r\0a\0t\0i\0n\0g\0 \0S\0y\0s\0t\0e\0m\0:\0	\0W\0i\0n\0d\0o\0w\0s\0 \01\00\0 \0H\0o\0m\0e\0 \0S\0i\0n\0g\0l\0e\0 \0L\0a\0n\0g\0u\0a\0g\0e\0,\0 \06\04\0-\0b\0i\0t\0\r\0\n\0D\0i\0r\0e\0c\0t\0X\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\02\0.\00\0 \0\r\0\n\0G\0P\0U\0 \0p\0r\0o\0c\0e\0s\0s\0o\0r\0:\0	\0	\0G\0e\0F\0o\0r\0c\0e\0 \08\02\00\0M\0\r\0\n\0D\0r\0i\0v\0e\0r\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\0	\03\06\09\0.\00\09\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0A\0P\0I\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\01\0.\02\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0f\0e\0a\0t\0u\0r\0e\0 \0l\0e\0v\0e\0l\0:\0	\01\01\0_\00\0\r\0\n\0C\0U\0D\0A\0 \0C\0o\0r\0e\0s\0:\0	\0	\09\06\0 \0\r\0\n\0C\0o\0r\0e\0 \0c\0l\0o\0c\0k\0:\0	\0	\07\01\09\0 \0M\0H\0z\0 \0\r\0\n\0S\0h\0a\0d\0e\0r\0 \0c\0l\0o\0c\0k\0:\0	\0	\01\04\03\08\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0d\0a\0t\0a\0 \0r\0a\0t\0e\0:\0	\01\08\00\00\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0i\0n\0t\0e\0r\0f\0a\0c\0e\0:\0	\06\04\0-\0b\0i\0t\0 \0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0b\0a\0n\0d\0w\0i\0d\0t\0h\0:\0	\01\04\0.\04\00\0 \0G\0B\0/\0s\0\r\0\n\0T\0o\0t\0a\0l\0 \0a\0v\0a\0i\0l\0a\0b\0l\0e\0 \0g\0r\0a\0p\0h\0i\0c\0s\0 \0m\0e\0m\0o\0r\0y\0:\0	\06\00\09\09\0 \0M\0B\0\r\0\n\0D\0e\0d\0i\0c\0a\0t\0e\0d\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\02\00\04\08\0 \0M\0B\0 \0D\0D\0R\03\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\00\0 \0M\0B\0\r\0\n\0S\0h\0a\0r\0e\0d\0 \0s\0y\0s\0t\0e\0m\0 \0m\0e\0m\0o\0r\0y\0:\0	\04\00\05\01\0 \0M\0B\0\r\0\n\0V\0i\0d\0e\0o\0 \0B\0I\0O\0S\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\07\05\0.\01\07\0.\08\04\0.\00\00\0.\00\0D\0\r\0\n\0I\0R\0Q\0:\0	\0	\0	\0N\0o\0t\0 \0u\0s\0e\0d\0\r\0\n\0B\0u\0s\0:\0	\0	\0	\0P\0C\0I\0 \0E\0x\0p\0r\0e\0s\0s\0 \0x\04\0 \0G\0e\0n\02\0\r\0\n\0D\0e\0v\0i\0c\0e\0 \0I\0d\0:\0	\0	\01\00\0D\0E\0 \01\01\04\00\0 \00\06\05\05\01\00\02\08\0\r\0\n\0P\0a\0r\0t\0 \0N\0u\0m\0b\0e\0r\0:\0	\0	\02\00\04\01\0 \00\00\01\00\0\r\0\n\0\r\0\n\0[\0C\0o\0m\0p\0o\0n\0e\0n\0t\0s\0]\0\r\0\n\0\r\0\n\0n\0v\0u\0i\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0s\0y\0n\0c\0.\0e\0x\0e\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0p\0l\0c\0y\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0b\0a\0t\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0a\0p\0i\0x\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0N\0V\0C\0P\0L\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0R\0.\0d\0l\0l\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0.\0e\0x\0e\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0W\0S\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0W\0S\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0M\0C\0T\0R\0A\0Y\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0M\0e\0d\0i\0a\0 \0C\0e\0n\0t\0e\0r\0 \0L\0i\0b\0r\0a\0r\0y\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0C\0U\0D\0A\0.\0D\0L\0L\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0U\0D\0A\0 \08\0.\00\0.\00\0 \0d\0r\0i\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0',_binary 'ÿþN\0V\0I\0D\0I\0A\0 \0S\0y\0s\0t\0e\0m\0 \0I\0n\0f\0o\0r\0m\0a\0t\0i\0o\0n\0 \0r\0e\0p\0o\0r\0t\0 \0c\0r\0e\0a\0t\0e\0d\0 \0o\0n\0:\0 \00\04\0/\01\09\0/\02\00\02\00\0 \01\02\0:\04\06\0:\02\04\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0n\0a\0m\0e\0:\0 \0K\0A\0U\0S\0H\0A\0L\0\r\0\n\0\r\0\n\0[\0D\0i\0s\0p\0l\0a\0y\0]\0\r\0\n\0O\0p\0e\0r\0a\0t\0i\0n\0g\0 \0S\0y\0s\0t\0e\0m\0:\0	\0W\0i\0n\0d\0o\0w\0s\0 \01\00\0 \0H\0o\0m\0e\0 \0S\0i\0n\0g\0l\0e\0 \0L\0a\0n\0g\0u\0a\0g\0e\0,\0 \06\04\0-\0b\0i\0t\0\r\0\n\0D\0i\0r\0e\0c\0t\0X\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\02\0.\00\0 \0\r\0\n\0G\0P\0U\0 \0p\0r\0o\0c\0e\0s\0s\0o\0r\0:\0	\0	\0G\0e\0F\0o\0r\0c\0e\0 \08\02\00\0M\0\r\0\n\0D\0r\0i\0v\0e\0r\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\0	\03\06\09\0.\00\09\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0A\0P\0I\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\01\01\0.\02\0\r\0\n\0D\0i\0r\0e\0c\0t\03\0D\0 \0f\0e\0a\0t\0u\0r\0e\0 \0l\0e\0v\0e\0l\0:\0	\01\01\0_\00\0\r\0\n\0C\0U\0D\0A\0 \0C\0o\0r\0e\0s\0:\0	\0	\09\06\0 \0\r\0\n\0C\0o\0r\0e\0 \0c\0l\0o\0c\0k\0:\0	\0	\07\01\09\0 \0M\0H\0z\0 \0\r\0\n\0S\0h\0a\0d\0e\0r\0 \0c\0l\0o\0c\0k\0:\0	\0	\01\04\03\08\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0d\0a\0t\0a\0 \0r\0a\0t\0e\0:\0	\01\08\00\00\0 \0M\0H\0z\0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0i\0n\0t\0e\0r\0f\0a\0c\0e\0:\0	\06\04\0-\0b\0i\0t\0 \0\r\0\n\0M\0e\0m\0o\0r\0y\0 \0b\0a\0n\0d\0w\0i\0d\0t\0h\0:\0	\01\04\0.\04\00\0 \0G\0B\0/\0s\0\r\0\n\0T\0o\0t\0a\0l\0 \0a\0v\0a\0i\0l\0a\0b\0l\0e\0 \0g\0r\0a\0p\0h\0i\0c\0s\0 \0m\0e\0m\0o\0r\0y\0:\0	\06\00\09\09\0 \0M\0B\0\r\0\n\0D\0e\0d\0i\0c\0a\0t\0e\0d\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\02\00\04\08\0 \0M\0B\0 \0D\0D\0R\03\0\r\0\n\0S\0y\0s\0t\0e\0m\0 \0v\0i\0d\0e\0o\0 \0m\0e\0m\0o\0r\0y\0:\0	\00\0 \0M\0B\0\r\0\n\0S\0h\0a\0r\0e\0d\0 \0s\0y\0s\0t\0e\0m\0 \0m\0e\0m\0o\0r\0y\0:\0	\04\00\05\01\0 \0M\0B\0\r\0\n\0V\0i\0d\0e\0o\0 \0B\0I\0O\0S\0 \0v\0e\0r\0s\0i\0o\0n\0:\0	\07\05\0.\01\07\0.\08\04\0.\00\00\0.\00\0D\0\r\0\n\0I\0R\0Q\0:\0	\0	\0	\0N\0o\0t\0 \0u\0s\0e\0d\0\r\0\n\0B\0u\0s\0:\0	\0	\0	\0P\0C\0I\0 \0E\0x\0p\0r\0e\0s\0s\0 \0x\04\0 \0G\0e\0n\02\0\r\0\n\0D\0e\0v\0i\0c\0e\0 \0I\0d\0:\0	\0	\01\00\0D\0E\0 \01\01\04\00\0 \00\06\05\05\01\00\02\08\0\r\0\n\0P\0a\0r\0t\0 \0N\0u\0m\0b\0e\0r\0:\0	\0	\02\00\04\01\0 \00\00\01\00\0\r\0\n\0\r\0\n\0[\0C\0o\0m\0p\0o\0n\0e\0n\0t\0s\0]\0\r\0\n\0\r\0\n\0n\0v\0u\0i\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0s\0y\0n\0c\0.\0e\0x\0e\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0p\0l\0c\0y\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0b\0a\0t\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0x\0d\0a\0p\0i\0x\0.\0d\0l\0l\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0N\0V\0C\0P\0L\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0U\0s\0e\0r\0 \0E\0x\0p\0e\0r\0i\0e\0n\0c\0e\0 \0D\0r\0i\0v\0e\0r\0 \0C\0o\0m\0p\0o\0n\0e\0n\0t\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0R\0.\0d\0l\0l\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0C\0p\0l\0U\0I\0.\0e\0x\0e\0	\0	\08\0.\01\0.\01\00\00\00\0.\00\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0o\0n\0t\0r\0o\0l\0 \0P\0a\0n\0e\0l\0\r\0\n\0n\0v\0W\0S\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0W\0S\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0W\0o\0r\0k\0s\0t\0a\0t\0i\0o\0n\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0V\0i\0T\0v\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0V\0i\0d\0e\0o\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0M\0C\0T\0R\0A\0Y\0.\0D\0L\0L\0	\0	\08\0.\01\07\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0M\0e\0d\0i\0a\0 \0C\0e\0n\0t\0e\0r\0 \0L\0i\0b\0r\0a\0r\0y\0\r\0\n\0n\0v\0D\0i\0s\0p\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0D\0i\0s\0p\0l\0a\0y\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0N\0V\0C\0U\0D\0A\0.\0D\0L\0L\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \0C\0U\0D\0A\0 \08\0.\00\0.\00\0 \0d\0r\0i\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0R\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0n\0v\0G\0a\0m\0e\0S\0.\0d\0l\0l\0	\0	\06\0.\01\04\0.\01\03\0.\06\09\00\09\0	\0	\0N\0V\0I\0D\0I\0A\0 \03\0D\0 \0S\0e\0t\0t\0i\0n\0g\0s\0 \0S\0e\0r\0v\0e\0r\0\r\0\n\0'),(4,'GYMTYM',_binary '11\n77 48 308 570\n13 14\n17 23\n30 33\n37 39\n47 49\n62 85\n86 94\n99 102\n103 113\n124 125\n139 142\n143 152\n158 167\n178 181\n182 185\n190 192\n194 202\n204 209\n212 231\n233 234\n250 251\n254 260\n265 267\n271 272\n274 284\n293 299\n308 320\n350 351\n360 370\n373 375\n402 411\n429 431\n447 448\n472 473\n478 479\n493 498\n499 507\n512 517\n525 532\n537 542\n554 556\n561 567\n569 591\n598 609\n613 616\n623 627\n635 636\n650 652\n665 681\n689 712\n714 715\n724 738\n741 755\n758 771\n772 774\n779 789\n805 813\n814 815\n816 818\n820 821\n824 830\n840 844\n850 854\n858 862\n866 867\n871 879\n892 893\n895 904\n907 908\n925 933\n938 947\n948 950\n954 957\n969 975\n976 980\n991 994\n996 1000\n29 31\n44 46\n51 54\n67 72\n91 93\n96 103\n115 136\n139 147\n149 168\n179 195\n208 211\n221 235\n249 268\n299 317\n320 330\n338 344\n347 357\n361 362\n381 386\n389 391\n392 402\n415 432\n451 460\n465 478\n483 488\n494 495\n531 545\n548 575\n604 611\n613 622\n628 629\n630 649\n661 665\n667 675\n677 687\n690 691\n703 709\n716 730\n767 788\n803 804\n832 833\n850 856\n867 869\n872 880\n906 909\n915 919\n943 955\n984 995\n86 51 483 733\n4 23\n28 39\n47 54\n58 67\n75 77\n79 80\n84 87\n88 89\n90 102\n119 122\n124 129\n147 152\n175 195\n205 208\n215 219\n221 230\n238 246\n262 265\n282 289\n292 295\n297 298\n302 319\n321 322\n323 329\n331 334\n337 339\n341 346\n360 369\n371 382\n386 393\n394 399\n405 410\n412 416\n417 418\n421 424\n428 434\n458 459\n460 472\n476 480\n483 484\n493 494\n499 500\n506 513\n517 519\n530 535\n544 546\n550 554\n559 564\n567 571\n579 586\n590 621\n624 630\n637 649\n655 658\n663 670\n688 699\n715 724\n727 728\n734 735\n736 737\n742 745\n752 756\n764 770\n777 780\n783 785\n787 788\n789 792\n799 810\n811 814\n822 830\n832 834\n836 843\n858 861\n875 883\n886 890\n891 893\n894 896\n899 902\n905 907\n913 920\n935 942\n944 947\n959 961\n966 978\n989 990\n992 998\n5 18\n23 25\n56 84\n94 101\n107 110\n120 124\n133 142\n145 146\n154 155\n160 176\n177 204\n214 219\n228 237\n247 251\n271 288\n300 329\n336 345\n362 363\n364 368\n376 378\n380 398\n403 408\n414 424\n447 456\n459 486\n496 497\n506 507\n513 523\n525 534\n544 549\n555 557\n582 593\n605 612\n654 663\n682 689\n693 719\n726 731\n742 747\n767 776\n789 828\n830 849\n851 856\n865 869\n872 873\n889 903\n905 912\n918 942\n945 948\n952 955\n960 976\n977 984\n22 51 367 591\n42 139\n155 156\n157 188\n223 314\n333 334\n356 357\n359 373\n393 412\n432 461\n502 516\n540 548\n561 580\n588 594\n632 635\n647 687\n693 707\n708 713\n754 817\n874 887\n917 922\n929 953\n954 957\n25 37\n38 41\n55 76\n84 90\n93 96\n100 108\n118 124\n128 131\n133 145\n146 157\n165 171\n173 187\n192 198\n203 205\n212 214\n215 243\n248 263\n269 270\n273 277\n296 308\n318 342\n351 361\n368 374\n379 386\n399 403\n411 454\n458 465\n481 488\n494 496\n518 519\n523 537\n550 566\n569 584\n611 630\n645 653\n667 671\n676 687\n700 710\n735 738\n739 740\n741 755\n757 765\n783 790\n793 795\n806 828\n864 865\n871 874\n890 921\n926 946\n948 965\n974 979\n26 26 525 693\n48 67\n73 97\n125 129\n166 170\n173 199\n248 269\n286 297\n351 363\n391 392\n402 404\n424 428\n446 447\n450 472\n474 501\n502 519\n521 536\n539 542\n605 637\n659 666\n672 692\n698 700\n712 717\n721 741\n763 796\n885 912\n967 989\n0 7\n61 85\n108 119\n129 148\n204 220\n228 258\n263 272\n282 285\n303 345\n386 390\n420 429\n466 474\n475 481\n507 511\n525 529\n542 554\n587 620\n622 646\n650 754\n760 764\n790 824\n883 894\n901 907\n913 917\n934 950\n984 994\n61 71 97 507\n3 4\n19 22\n30 41\n42 47\n53 54\n64 66\n71 73\n80 93\n97 101\n104 119\n124 136\n152 154\n160 176\n183 190\n196 200\n202 204\n206 209\n250 257\n259 260\n268 281\n289 298\n324 359\n369 385\n387 407\n409 417\n424 442\n444 459\n477 480\n485 487\n491 503\n526 532\n537 544\n563 579\n583 601\n609 622\n639 641\n643 652\n654 658\n668 676\n678 686\n692 697\n700 705\n706 718\n722 727\n732 768\n769 773\n780 786\n789 792\n800 801\n806 807\n815 816\n820 847\n848 860\n874 881\n887 903\n912 927\n947 949\n952 953\n955 960\n968 985\n992 999\n0 3\n18 22\n24 32\n43 46\n48 60\n67 71\n73 75\n84 91\n101 106\n108 116\n118 130\n150 166\n168 170\n172 174\n191 192\n198 199\n204 223\n229 235\n237 239\n245 249\n250 272\n283 293\n306 313\n316 321\n330 331\n334 336\n342 349\n350 355\n365 377\n396 406\n408 417\n437 440\n460 465\n467 468\n477 478\n480 485\n488 491\n502 507\n512 529\n530 532\n548 553\n558 560\n568 574\n576 579\n638 639\n644 647\n652 654\n656 662\n667 673\n679 683\n684 704\n711 715\n718 739\n748 750\n754 762\n777 792\n794 796\n797 807\n821 834\n836 837\n841 857\n867 869\n874 886\n890 903\n905 910\n919 930\n932 938\n945 951\n958 965\n974 997\n998 1000\n80 6 639 641\n7 11\n29 31\n38 58\n74 81\n82 85\n88 89\n95 98\n107 114\n116 122\n124 143\n169 180\n182 185\n206 210\n211 214\n215 217\n221 223\n226 230\n234 242\n249 255\n262 264\n273 279\n285 287\n297 299\n318 329\n336 344\n345 351\n352 353\n371 374\n382 385\n387 389\n416 420\n422 427\n433 453\n455 461\n468 469\n493 495\n498 504\n512 513\n524 529\n542 546\n547 550\n551 553\n556 564\n569 572\n592 599\n606 611\n614 622\n623 624\n638 639\n651 654\n656 662\n671 674\n675 676\n689 692\n700 701\n714 718\n732 733\n736 738\n740 765\n767 770\n778 782\n786 787\n793 794\n796 804\n806 807\n813 820\n843 845\n857 862\n865 870\n873 876\n877 881\n883 890\n894 902\n908 920\n928 932\n936 941\n949 951\n952 973\n982 991\n998 999\n173 251\n295 408\n555 593\n625 681\n740 742\n837 925\n57 42 303 495\n20 35\n40 42\n50 63\n67 72\n73 79\n91 93\n98 109\n117 125\n133 141\n164 165\n172 184\n194 208\n215 226\n232 236\n256 277\n288 295\n309 313\n317 333\n338 358\n361 368\n375 387\n390 401\n418 428\n444 463\n467 478\n500 509\n514 515\n522 540\n542 545\n550 551\n552 553\n556 570\n572 574\n575 586\n593 594\n602 612\n617 621\n626 629\n664 672\n673 691\n696 720\n721 727\n734 743\n780 800\n824 829\n834 846\n852 868\n878 879\n889 892\n894 911\n912 921\n926 930\n934 937\n939 942\n963 964\n976 977\n983 985\n3 6\n20 48\n114 123\n133 142\n146 163\n180 181\n182 194\n197 205\n210 216\n223 225\n253 274\n289 303\n342 360\n367 383\n390 394\n402 403\n406 422\n432 439\n445 466\n481 493\n499 526\n536 538\n547 562\n565 574\n577 579\n587 606\n612 615\n631 634\n688 710\n732 756\n760 769\n771 772\n776 792\n828 832\n839 850\n861 901\n905 913\n920 942\n950 951\n964 981\n983 987\n988 1000\n39 87 242 630\n1 4\n5 34\n41 44\n58 95\n136 161\n178 181\n208 212\n214 217\n222 225\n230 255\n267 276\n288 300\n320 325\n339 354\n371 396\n401 405\n409 437\n439 489\n490 496\n534 535\n541 545\n574 584\n586 596\n609 643\n644 647\n667 674\n691 703\n723 735\n749 763\n767 769\n773 783\n787 803\n812 833\n843 861\n884 890\n917 927\n936 944\n962 970\n986 991\n2 21\n22 23\n32 35\n39 42\n45 56\n58 61\n75 82\n91 92\n96 104\n116 120\n127 128\n139 154\n163 164\n167 179\n187 191\n192 194\n199 200\n208 213\n230 235\n245 248\n256 259\n262 263\n264 266\n267 269\n274 275\n283 289\n292 298\n311 322\n324 333\n335 340\n345 356\n359 369\n371 372\n374 380\n390 392\n394 397\n403 417\n429 431\n437 439\n453 463\n482 487\n489 490\n502 507\n508 510\n511 521\n525 528\n548 550\n551 553\n555 561\n571 573\n580 586\n592 594\n600 609\n611 614\n616 620\n622 635\n636 639\n645 647\n658 663\n666 667\n676 679\n681 686\n697 704\n705 707\n711 719\n727 731\n743 751\n753 756\n758 762\n780 783\n790 798\n800 801\n810 826\n832 835\n841 844\n855 865\n866 867\n868 870\n871 882\n905 910\n918 919\n928 937\n946 956\n960 964\n979 982\n983 989\n990 998\n86 50 107 666\n25 27\n31 34\n41 46\n51 54\n58 61\n68 74\n78 79\n81 89\n96 98\n103 104\n108 111\n132 133\n134 141\n142 143\n151 154\n159 165\n170 181\n188 192\n210 214\n219 221\n224 229\n233 237\n241 243\n251 264\n265 274\n277 279\n281 282\n290 291\n300 305\n311 319\n321 324\n340 346\n347 348\n358 360\n369 371\n378 383\n388 389\n415 417\n420 421\n424 425\n429 451\n455 459\n460 463\n481 482\n490 495\n521 523\n528 530\n543 563\n570 575\n579 585\n592 616\n618 622\n625 627\n636 638\n639 655\n657 662\n664 666\n668 669\n679 680\n686 688\n693 697\n701 706\n715 719\n720 722\n723 724\n729 742\n745 747\n749 763\n764 766\n769 798\n799 800\n802 816\n823 831\n834 844\n846 850\n870 874\n878 883\n885 887\n898 905\n910 931\n934 935\n942 946\n947 948\n960 962\n971 973\n983 988\n18 24\n40 45\n50 66\n105 106\n154 156\n159 184\n189 192\n208 241\n242 252\n276 283\n285 286\n292 296\n300 310\n330 346\n348 354\n373 375\n388 392\n401 409\n410 433\n434 437\n447 461\n467 472\n508 513\n530 533\n537 538\n544 568\n569 572\n579 591\n601 607\n609 631\n632 649\n655 660\n667 676\n689 690\n691 692\n693 709\n713 719\n730 734\n746 758\n789 802\n807 821\n823 862\n866 867\n883 900\n901 904\n912 913\n914 934\n935 938\n941 945\n952 970\n75 92 959 983\n18 28\n31 32\n43 46\n49 50\n52 54\n58 61\n64 65\n74 80\n84 103\n108 113\n116 117\n119 122\n123 125\n138 156\n163 165\n169 175\n181 182\n184 189\n201 205\n211 214\n217 230\n234 253\n259 269\n272 282\n285 286\n290 301\n304 313\n322 323\n331 332\n333 349\n350 354\n369 374\n380 383\n384 390\n392 403\n407 421\n424 431\n432 440\n446 456\n471 477\n480 495\n496 497\n527 532\n536 539\n550 552\n571 577\n593 610\n613 620\n634 644\n651 659\n663 664\n681 683\n685 686\n687 697\n698 715\n718 719\n727 729\n733 738\n739 743\n750 784\n786 796\n798 802\n803 809\n820 838\n842 845\n848 854\n864 880\n884 885\n888 893\n909 917\n919 920\n926 929\n932 941\n943 966\n982 984\n0 11\n16 18\n20 26\n42 44\n45 52\n55 57\n60 69\n72 73\n87 94\n99 101\n105 112\n115 118\n121 128\n132 136\n145 150\n153 156\n161 165\n166 168\n169 172\n173 176\n177 184\n191 196\n197 205\n209 215\n228 232\n242 250\n260 272\n283 285\n288 291\n298 307\n315 317\n323 348\n356 357\n368 371\n372 374\n385 389\n393 395\n401 407\n408 412\n423 446\n447 453\n455 456\n472 481\n486 489\n508 529\n531 533\n534 537\n547 552\n562 564\n565 575\n576 582\n583 586\n593 594\n605 617\n618 619\n628 631\n647 649\n650 653\n661 666\n674 680\n684 701\n702 703\n708 709\n710 711\n716 724\n725 732\n737 746\n750 756\n758 765\n766 768\n771 772\n775 776\n778 786\n796 802\n818 823\n825 828\n830 839\n840 843\n854 863\n869 870\n876 879\n894 904\n906 910\n914 918\n920 921\n926 938\n940 949\n954 959\n960 965\n969 973\n978 988\n990 992\n90 13 539 962\n3 6\n7 14\n22 37\n46 54\n63 70\n73 74\n82 97\n98 110\n117 125\n126 127\n133 137\n146 152\n157 158\n168 171\n182 189\n200 201\n253 256\n259 261\n264 274\n279 281\n286 293\n295 297\n304 306\n307 320\n322 323\n326 328\n329 337\n339 343\n349 350\n355 367\n373 374\n382 390\n397 404\n416 422\n423 438\n442 447\n451 452\n455 461\n465 467\n468 471\n472 479\n495 498\n504 507\n514 516\n524 526\n527 529\n536 542\n556 561\n565 570\n576 579\n587 589\n593 603\n606 616\n617 621\n623 629\n632 636\n637 645\n648 666\n667 672\n681 683\n687 694\n705 709\n711 716\n717 725\n726 728\n730 731\n732 744\n746 757\n761 776\n787 790\n796 798\n806 808\n809 815\n816 819\n830 845\n849 852\n860 870\n875 880\n889 902\n903 906\n909 912\n915 917\n923 929\n931 939\n943 945\n948 952\n956 965\n967 980\n987 995\n998 999\n14 17\n55 62\n77 207\n216 341\n344 425\n454 475\n583 587\n601 632\n636 646\n651 652\n685 687\n698 905\n934 999\n',_binary '311\n495\n374\n655\n97\n639\n306\n242\n131\n959\n539\n');
/*!40000 ALTER TABLE `test_case_file` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-24 23:50:03
