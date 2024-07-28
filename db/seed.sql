\c songartists_dev;

INSERT INTO songartists (artist, albums, roots, sun_sign, net_worth, on_tour, is_alive, has_children, official_website, social_media) VALUES
('Tems', 3, 'Lagos, Nigeria', 'Gemini', 2000000, true, true, false, 'https://www.leadingvibe.com', 'https://www.instagram.com/temsszn'),
('Marvin Gaye', 28, 'Washington D.C.', 'Aries', -9000000, false, false, true, 'https://www.marvingaye.net', 'https://www.instagram.com/officialmarvingayemusic'),
('Miguel', 5, 'San Pedro, Los Angeles', 'Scorpio', 12000000, false, true, false, 'https://www.officialmiguel.com', 'https://www.instagram.com/miguel'),
('Fireboy DML', 1, 'Abeokuta, Nigeria', 'Aquarius', 2000000, false, true, false, 'https://fireboydml.com', 'https://www.instagram.com/fireboydml'),
('Teddy Pendergrass', 13, 'North Philadephia, Pennsylvania', 'Aries', 12000000, false, false, true, 'https://teddypendergrassofficial.com', 'https://www.instagram.com/teddylovetko'),
('Whitney Houston', 9, 'Newark, New Jersey', 'Leo', 10000, false, false, true,'https://www.whitneyhouston.com', 'https://www.instagram.com/whitneyhouston'),
('Beyoncé', 12, 'Houston, TX', 'Virgo', 800000000, false, true, true, 'https://www.beyonce.com', 'https://www.instagram.com/beyonce'),
('Luther Vandross', 16, 'N.Y. New York', 'Taurus', 50000000, false, false, true, 'https://luthervandross.com', 'https://www.instagram.com/luthervandross');

INSERT INTO songs (songartist_id, song, artist, album, time, is_popular, is_favorite) VALUES
('1', 'Forever', 'Tems', 'Born In The Wild', '3:16', true, true),
('1', 'Gangsta', 'Tems', 'Born In The Wild', '2:42', false, true),
('2', 'I Want You', 'Marvin Gaye', 'I Want You (Deluxe Edition)', '4:34', true, true),
('3', 'Girl With The Tattoo', 'Miguel', 'All I Want Is You', '1:43', false, true),
('3', 'Waves', 'Miguel', 'Wildheart', '3:22', false, true),
('4', 'Everyday', 'Fireboy DML', 'Everyday', '2:46', true, true),
('1', 'Wickedest', 'Tems', 'Born In The Wild', '2:37', false, true),
-- ('', 'Tshwala Bam', 'Tshwala Bam feat. SNE (Remix)', null, '3:33', true, true),
('5', 'The Whole Towns Laughing At Me', 'Teddy Pendergrass', 'Teddy Pendergrass', '4:27', false, true),
('1', 'You in My Face', 'Tems', 'Born in the Wild', '2:42', false, true),
('6', 'I Wanna Dance with Somebody (Who Loves Me)', 'Whitney Houston', 'Whitney', '4:51', true, true),
('7', 'Dangerously In Love', 'Beyoncé', 'Beyoncé', '4:53', true, true),
('8', 'My Sensitivity (Gets in the Way)', 'Luther Vandross', 'The Night I Fell In Love', '4:11', true, true);



