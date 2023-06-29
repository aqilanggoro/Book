-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Bulan Mei 2023 pada 14.20
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------
--
-- Dumping data untuk tabel `tags`
--

INSERT INTO `tags` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Non-Fiksi', '2023-05-05 17:03:44', '2023-05-05 17:03:44'),
(2, 'Pengembangan Diri', '2023-05-05 17:03:47', '2023-05-05 17:03:47'),
(3, 'Perbaikan Diri', '2023-05-05 17:03:50', '2023-05-05 17:03:50'),
(4, 'Hukum', '2023-05-05 17:03:51', '2023-05-05 17:03:51'),
(5, 'Bantuan Hukum', '2023-05-05 17:03:54', '2023-05-05 17:03:54'),
(6, 'Bisnis & Ekonomi', '2023-05-05 17:03:54', '2023-05-05 17:03:54'),
(7, 'Finansial', '2023-05-05 17:03:56', '2023-05-05 17:03:56'),
(8, 'Agama', '2023-05-05 17:03:57', '2023-05-05 17:03:57'),
(9, 'Islam', '2023-05-05 17:03:59', '2023-05-05 17:03:59'),
(10, 'Ilmu Sosial', '2023-05-05 17:04:00', '2023-05-05 17:04:00'),
(11, 'Fiksi & Sastra', '2023-05-05 17:04:03', '2023-05-05 17:04:03'),
(12, 'Fiksi Populer', '2023-05-05 17:04:05', '2023-05-05 17:04:05'),
(13, 'Metropop', '2023-05-05 17:04:08', '2023-05-05 17:04:08'),
(14, 'Novel', '2023-05-05 17:04:11', '2023-05-05 17:04:11'),
(15, 'Romance', '2023-05-05 17:04:13', '2023-05-05 17:04:13'),
(16, 'Thriller', '2023-05-05 17:04:14', '2023-05-05 17:04:14'),
(17, 'Young Adult', '2023-05-05 17:04:16', '2023-05-05 17:04:16'),
(18, 'Fiksi Ilmiah', '2023-05-05 17:04:19', '2023-05-05 17:04:19'),
(19, 'Anak-Anak', '2023-05-05 17:04:20', '2023-05-05 17:04:20'),
(20, 'Pra-Remaja', '2023-05-05 17:04:22', '2023-05-05 17:04:22'),
(21, 'Komik', '2023-05-05 17:04:24', '2023-05-05 17:04:24'),
(22, 'Manga', '2023-05-05 17:04:26', '2023-05-05 17:04:26');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
