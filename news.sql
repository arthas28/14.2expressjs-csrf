-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2015-12-04 08:03:17
-- 服务器版本： 10.0.17-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE `login` (
  `name` text NOT NULL,
  `password` text NOT NULL,
  `token` varchar(1024) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`name`, `password`, `token`, `id`) VALUES
('name', 'password', 'TVj3sMS7-Ly6EH6AzhOfxT_WkvDmq5IM6EX4', 1),
('admin', '123', 'ijx12Yxj-epYgVKdE69so4LydsdrQJ8snjYM', 2);

-- --------------------------------------------------------

--
-- 表的结构 `newslist`
--

CREATE TABLE `newslist` (
  `url` text NOT NULL,
  `pic` text NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `time` date NOT NULL,
  `topic` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `newslist`
--

INSERT INTO `newslist` (`url`, `pic`, `title`, `content`, `time`, `topic`, `id`) VALUES
('http://m.baidu.com/news?fr=mohome&ssid=0&from=1000376a&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#topic/610', 'images/newspic/ns4.jpg', '习近平卡梅伦酒吧小酌吃炸鱼薯条', '卡梅伦帮习近平点了一杯Greene King IPA啤酒，外加一份炸鱼薯条。', '2015-10-23', '专题', 1),
('http://m.baidu.com/news?fr=mohome&amp;ssid=0&amp;from=1000376a&amp;uid=&amp;pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&amp;bd_page_type=1#page/chosen%3A%E6%8E%A8%E8%8D%90/http%3A%2F%2Fview.inews.qq.com%2Fa%2FENT2015102300601903/%E5%91%A8%E8%91%A3%E4%B9%9F%E5%8F%91%E5%8A%9B%E4%BA%86%EF%BC%8C%E4%B8%89%E5%B9%B4%E8%A6%81%E7%94%9F%E4%BF%A9/%E8%85%BE%E8%AE%AF%E5%A8%B1%E4%B9%90/1445565433000/4748370714099387184', 'images/newspic/ns5.jpg', '周董也发力了，三年要生wu', '我还是会帮朋友站台，用照片可以，但要挑一下，我还是希望我的朋友能自己闯出一片天。', '2015-10-22', '专题', 2),
('http://m.baidu.com/news#page/2/http%3A%2F%2Fview.inews.qq.com%2Fa%2FNEW2015102100998802/%E8%8B%B1%E5%A5%B3%E7%8E%8B%E4%B8%BE%E8%A1%8C%E5%9B%BD%E5%AE%B4%E6%AC%BE%E5%BE%85%E4%B9%A0%E8%BF%91%E5%B9%B3/%E8%85%BE%E8%AE%AF%E5%9B%BE%E7%89%87/1445397296000/5589650791923925018', 'images/newspic/ns1.jpg', '习近平抵唐宁街会晤卡梅伦', '中国国家主席习近平于10月19日至23日对英国进行国事访问。', '2015-10-19', '专题3', 3),
('http://m.baidu.com/news?fr=mohome&ssid=0&from=1000376a&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/search:%E8%B6%B3%E5%8D%8F%E6%9D%AF-%E5%AD%99%E5%8F%AF1%E5%89%91%E5%B0%81%E5%96%89/http%3A%2F%2Fsports.dzwww.com%2Fnews%2F201510%2Ft20151021_13212191.htm/%E8%B6%B3%E5%8D%8F%E6%9D%AF-%E5%AD%99%E5%8F%AF%E4%B8%80%E5%89%91%E5%B0%81%E5%96%89%20%E8%88%9C%E5%A4%A9%E6%80%BB%E5%88%864-1%E9%B2%81%E8%83%BD%E8%BF%9B%E5%86%B3%E8%B5%9B/%E5%A4%A7%E4%BC%97%E7%BD%91/1445435580', 'images/newspic/ns2.jpg', '足协杯-孙可1剑封喉 舜天总分4-1历史二度进决赛', '北京时间10月21日19点45分，2015年中国足协杯半决赛次回合中，江苏...', '2015-10-22', '新浪要闻', 4),
('http://m.baidu.com/news?fr=mohome&ssid=0&from=1000376a&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/search:%E5%B0%8F%E9%BE%99%E5%A5%B3%E8%87%AA%E6%9B%9D%E7%AB%A5%E5%B9%B4%E5%8F%97%E5%B0%BD%E5%90%8C%E5%AD%A6%E6%AC%BA%E5%87%8C/http%3A%2F%2Fent.qq.com%2Fa%2F20151021%2F001006.htm/%E5%B0%8F%E9%BE%99%E5%A5%B3%E9%A6%96%E5%BA%A6%E5%8F%97%E8%AE%BF%E6%8B%8D%E5%86%99%E7%9C%9F%20%E8%87%AA%E6%9B%9D%E7%AB%A5%E5%B9%B4%E5%8F%97%E5%B0%BD%E5%90%8C%E5%AD%A6%E6%AC%BA%E5%87%8C/%E8%85%BE%E8%AE%AF%E5%A8%B1%E4%B9%90/1445360460', 'images/newspic/ns3.jpg', '小龙女自曝童年受尽同学欺凌', '小龙女首度受访拍写真，自曝童年受尽同学欺凌', '2015-10-21', '新浪要闻', 5),
('http://m.baidu.com/news?fr=mohome&ssid=0&from=1000376a&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/chosen%3A%E6%8E%A8%E8%8D%90/http%3A%2F%2Fi.ifeng.com%2Fnews%3Faid%3D102340665/%E4%B8%8A%E6%B5%B7%E5%B0%86%E5%BC%80%E5%BB%BA%E9%A6%96%E8%89%98%E5%9B%BD%E4%BA%A7%E8%B1%AA%E5%8D%8E%E9%82%AE%E8%BD%AE%202020%E5%B9%B4%E4%BA%A4%E4%BB%98/%E4%B8%8A%E6%B5%B7%E5%B8%82%E7%A4%BE%E5%B7%A5%E5%A7%94%E7%BD%91%E7%AB%99/1445612541000/2507095729681812508', 'images/newspic/ns6.jpg', '上海将开建首艘国产豪华邮轮 2020年交付', '现阶段，最贵的豪华邮轮造价超过100亿元人民币，一般常规型12万总吨级豪华邮轮造价是60多亿元...', '2015-10-24', '凤凰要闻', 6),
('http://m.baidu.com/news?fr=mohome&ssid=0&from=1000376a&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/chosen%3A%E6%8E%A8%E8%8D%90/http%3A%2F%2Fi.ifeng.com%2Fnews%3Faid%3D102340665/%E4%B8%8A%E6%B5%B7%E5%B0%86%E5%BC%80%E5%BB%BA%E9%A6%96%E8%89%98%E5%9B%BD%E4%BA%A7%E8%B1%AA%E5%8D%8E%E9%82%AE%E8%BD%AE%202020%E5%B9%B4%E4%BA%A4%E4%BB%98/%E4%B8%8A%E6%B5%B7%E5%B8%82%E7%A4%BE%E5%B7%A5%E5%A7%94%E7%BD%91%E7%AB%99/1445612541000/2507095729681812508', 'images/newspic/ns6.jpg', '上海将开建首艘国产豪华邮轮 2020年交付', '现阶段，最贵的豪华邮轮造价超过100亿元人民币，一般常规型12万总吨级豪华邮轮造价是60多亿元...', '2015-10-24', '凤凰要闻', 33),
('http://m.baidu.com/news?fr=mohome&amp;ssid=0&amp;from=1000376a&amp;uid=&amp;pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&amp;bd_page_type=1#page/search:%E5%B0%8F%E9%BE%99%E5%A5%B3%E8%87%AA%E6%9B%9D%E7%AB%A5%E5%B9%B4%E5%8F%97%E5%B0%BD%E5%90%8C%E5%AD%A6%E6%AC%BA%E5%87%8C/http%3A%2F%2Fent.qq.com%2Fa%2F20151021%2F001006.htm/%E5%B0%8F%E9%BE%99%E5%A5%B3%E9%A6%96%E5%BA%A6%E5%8F%97%E8%AE%BF%E6%8B%8D%E5%86%99%E7%9C%9F%20%E8%87%AA%E6%9B%9D%E7%AB%A5%E5%B9%B4%E5%8F%97%E5%B0%BD%E5%90%8C%E5%AD%A6%E6%AC%BA%E5%87%8C/%E8%85%BE%E8%AE%AF%E5%A8%B1%E4%B9%90/1445360460', 'images/newspic/ns3.jpg', '小龙女自曝童年受尽同学欺凌', '小龙女首度受访拍写真，自曝童年受尽同学欺凌', '2015-10-16', '新浪要闻', 34),
('&lt;img&nbsp;src=0&nbsp;onerror=alert(5)&gt;', 'images/newspic/ns3.jpg', '&lt;img&nbsp;src=0&nbsp;onerror=alert(6)&gt;', '&lt;img&nbsp;src=0&nbsp;onerror=alert(6)&gt;', '2015-10-29', '111', 35),
('&lt;img&nbsp;src=0&nbsp;onerror=alert(5)&gt;', 'images/newspic/ns3.jpg', '&lt;img&nbsp;src=0&nbsp;onerror=alert(6)&gt;', '&lt;img&nbsp;src=0&nbsp;onerror=alert(6)&gt;', '2015-10-28', '222', 38);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newslist`
--
ALTER TABLE `newslist`
  ADD KEY `id` (`id`),
  ADD KEY `id_2` (`id`),
  ADD KEY `id_3` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `newslist`
--
ALTER TABLE `newslist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
