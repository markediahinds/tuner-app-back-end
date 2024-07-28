DROP DATABASE IF EXISTS songartists_dev;
CREATE DATABASE songartists_dev;

\c songartists_dev;

CREATE TABLE songartists (
    id SERIAL PRIMARY KEY, 
    artist TEXT NOT NULL,
    albums SMALLINT,
    roots TEXT,
    sun_sign VARCHAR(11),
    net_worth INT, 
    on_tour BOOLEAN,
    is_alive BOOLEAN,
    has_children BOOLEAN,
    official_website TEXT,
    social_media TEXT
);

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY, 
    song TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT, 
    is_popular BOOLEAN,
    is_favorite BOOLEAN DEFAULT false,
    songartist_id INTEGER REFERENCES songartists (id)
    ON DELETE CASCADE
);

