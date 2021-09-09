-- --------------------------------------------------------
-- 호스트:                          localhost
-- 서버 버전:                        8.0.26 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- book 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `book` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `book`;

-- 테이블 book.books 구조 내보내기
CREATE TABLE IF NOT EXISTS `books` (
  `idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT '고유번호',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '도서제목',
  `writer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '저자',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '도서 요약 설명',
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '표지사진',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `status` enum('0','1','2','3') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '1' COMMENT '현재상태(0:절판, 1:판매중, 2:발행예정, 3:삭제)',
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 book.books:~21 rows (대략적) 내보내기
DELETE FROM `books`;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` (`idx`, `title`, `writer`, `content`, `cover`, `createdAt`, `status`) VALUES
	(1, '홍길동전', '허균', '아버지를 아버지라...', NULL, '2021-09-02 16:43:29', '1'),
	(5, '안녕하세요', 'sql', '안녕하세요 sql\r\n', NULL, '2021-09-02 17:44:47', '1'),
	(6, '안녕하세요', '하이', '안녕', NULL, '2021-09-06 10:30:14', '1'),
	(8, '홍길동전이라고오오오', '허균등분할', '안녕하세요', NULL, '2021-09-06 13:16:23', '1'),
	(9, 'hello', 'world', 'hollo world', NULL, '2021-09-06 14:54:37', '1'),
	(10, 'asd', 'asd', 'asd', NULL, '2021-09-06 15:43:59', '1'),
	(11, 'ff', 'ff', 'ff', NULL, '2021-09-06 15:44:03', '1'),
	(12, '3', '3', '3', NULL, '2021-09-06 15:44:07', '1'),
	(13, '홍길만전', '홍길만', '왜 자꾸 나를...', NULL, '2021-09-07 10:48:28', '1'),
	(14, '홍길만전', '홍길만', '왜 자꾸 나를...', NULL, '2021-09-07 10:48:46', '1'),
	(15, '홍길만전', '홍길만', '왜 자꾸 나를...', NULL, '2021-09-07 10:53:03', '1'),
	(16, '홍길만전', '홍길만', '왜 자꾸 나를...', NULL, '2021-09-07 10:53:15', '3'),
	(17, '홍길만전', '홍길만', '왜 자꾸 나를...', NULL, '2021-09-07 10:53:18', '3'),
	(18, '홍길동전', 'gjrbs', '요약설명을 작성하세요.', NULL, '2021-09-08 09:44:48', '1'),
	(19, '춘향전', '춘향이', 'ㅇㅇㅇ', NULL, '2021-09-08 09:45:45', '1'),
	(20, '홍길동전', '춘향이', 'ㅇㅇㅇ', NULL, '2021-09-08 10:02:54', '1'),
	(21, '홍길동전', '333', '222', NULL, '2021-09-08 10:10:23', '1'),
	(22, '알집', '알지', '알집', NULL, '2021-09-08 11:24:55', '1'),
	(23, 'ㅓㅁ', 'ㅓㅁ', 'ㅓㅁ', NULL, '2021-09-08 11:52:57', '1'),
	(24, '안녕하세요', '허균등분할', 'ㅇㅇ', NULL, '2021-09-08 12:10:50', '1'),
	(25, 'asd', 'sql', '666', NULL, '2021-09-08 12:16:07', '1'),
	(26, '홍길동전', '허균', '테스트', NULL, '2021-09-08 13:08:06', '1'),
	(27, 'hello', 'world', 'asd', NULL, '2021-09-09 10:16:32', '1'),
	(28, 'asd', '하이', 'dd', NULL, '2021-09-09 10:17:29', '1');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

-- 테이블 book.files 구조 내보내기
CREATE TABLE IF NOT EXISTS `files` (
  `idx` int unsigned NOT NULL AUTO_INCREMENT,
  `fidx` int unsigned NOT NULL,
  `oriname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `savename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mimetype` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
  `size` int NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fieldname` enum('C','U') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'U' COMMENT 'c: cover, u: upfile',
  `status` enum('0','1') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '1' COMMENT '0:삭제, 1:사용',
  PRIMARY KEY (`idx`),
  KEY `fidx` (`fidx`),
  CONSTRAINT `FK_files_books` FOREIGN KEY (`fidx`) REFERENCES `books` (`idx`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 book.files:~5 rows (대략적) 내보내기
DELETE FROM `files`;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` (`idx`, `fidx`, `oriname`, `savename`, `mimetype`, `size`, `createdAt`, `fieldname`, `status`) VALUES
	(1, 21, '404.png', '210908_86800eb0-e2a3-4fbb-861e-fe27f6bf39b4.png', 'image/png', 3929, '2021-09-08 10:10:23', 'U', '1'),
	(2, 22, 'bootstrap-4.6.0-dist (1).zip', '210908_aa956a6e-2a79-450b-b07c-7c8cb0cb53c5.zip', 'application/x-zip-compressed', 730651, '2021-09-08 11:24:55', 'U', '1'),
	(3, 23, 'javascript.jpg', '210908_2daf3f79-7bcd-48e9-8a7d-6d3591e8f31a.jpg', 'image/jpeg', 92431, '2021-09-08 11:52:57', 'U', '1'),
	(4, 26, 'picture.png', '210908_d83ec433-74e5-4bed-a484-62015a1e1a20.png', 'image/png', 1503, '2021-09-08 13:08:06', 'C', '1'),
	(5, 26, 'browser (1).png', '210908_f747ec54-9562-40a2-8fab-2ea38e45efb1.png', 'image/png', 5762, '2021-09-08 13:08:06', 'U', '1'),
	(6, 27, 'google-docs.png', '210909_3cf86b1a-b413-41c5-a7ba-37418c42c1cd.png', 'image/png', 1021, '2021-09-09 10:16:32', 'C', '1'),
	(7, 27, 'picture.png', '210909_f88997c5-ab4a-4dfa-a5ad-6012801e454a.png', 'image/png', 1503, '2021-09-09 10:16:32', 'U', '1'),
	(8, 28, 'node.png', '210909_71424ff2-e46d-493e-b56b-d37b84031c29.png', 'image/png', 29477, '2021-09-09 10:17:29', 'C', '1'),
	(9, 28, 'javascript.jpg', '210909_9e524d65-cc88-49e3-bdfb-8021d236cc2f.jpg', 'image/jpeg', 92431, '2021-09-09 10:17:29', 'U', '1');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
