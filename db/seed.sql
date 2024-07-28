\c songs_dev;

INSERT INTO songs (song, artist, album, time, is_popular, is_favorite) VALUES
('Forever', 'Tems', 'Born In The Wild', '3:16', true, true),
('Gangsta', 'Tems', 'Born In The Wild', '2:42', false, true),
('I Want You', 'Marvin Gaye', 'I Want You (Deluxe Edition)', '4:34', true, true),
('Girl With The Tattoo', 'Miguel', 'All I Want Is You', '1:43', false, true),
('Waves', 'Miguel', 'Wildheart', '3:22', false, true),
('Everyday', 'Fireboy DML', 'Everyday', '2:46', true, true),
('Wickedest', 'Tems', 'Born In The Wild', '2:37', false, true),
('Tshwala Bam', 'Tshwala Bam feat. SNE (Remix)', null, '3:33', true, true),
('The Whole Towns Laughing At Me', 'Teddy Pendergrass', 'Teddy Pendergrass', '4:27', false, true),
('You in My Face', 'Tems', 'Born in the Wild', '2:42', false, true),
('I Wanna Dance with Somebody(Who Loves Me)', 'Whitney Houston', 'Whitney', '4:51', true, true),
('Dangerously In Love', 'Beyoncé', 'Beyoncé', '4:53', true, true),
('My Sensitivity(Gets in the Way)', 'Luther Vandross', 'The Night I Fell In Love', '4:11', true, true);

INSERT INTO songartists (artist, albums, roots, sun_sign, net_worth, on_tour, is_alive, has_children, official_website, social_media) VALUES
('Tems', 3, 'Lagos, Nigeria', 'Gemini', 2,000,000, true, true, false, 'https://www.leadingvibe.com', 'https://www.instagram.com/temsszn'),
('Marvin Gaye', 28, 'Washington D.C.', 'Aries', -9,000,000, false, false, true, 'https://www.marvingaye.net', 'https://www.instagram.com/officialmarvingayemusic')
('Miguel', 5, 'San Pedro, Los Angeles', 'Scorpio', 12,000,000, false, true, false, 'https://www.officialmiguel.com', 'https://www.instagram.com/miguel'),
('Fireboy DML', 1, 'Abeokuta, Nigeria', 'Aquarius', 2,000,000, false, true, false, 'https://fireboydml.com', 'https://www.instagram.com/fireboydml'),
('Teddy Pendergrass', 13, 'North Philadephia, Pennsylvania', 'Aries', 12,000,000, false, false, true, 'https://teddypendergrassofficial.com', 'https://www.instagram.com/teddylovetko'),
('Whitney Houston', 9, 'Newark, New Jersey', 'Leo', 10,000, false, false, true,'https://www.whitneyhouston.com', 'https://www.instagram.com/whitneyhouston'),
('Beyoncé', 12, 'Houston, TX', 'Virgo', 800,000,000, false, true, true, 'https://www.beyonce.com', 'https://www.instagram.com/beyonce'),
('Luther Vandross', 16, 'N.Y. New York', 'Taurus', 50,000,000, false, false, true, 'https://luthervandross.com', 'https://www.instagram.com/luthervandross');




