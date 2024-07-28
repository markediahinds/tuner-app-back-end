DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

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

DROP TABLE IF EXISTS artists;

CREATE TABLE songartists (
    id SERIAL PRIMARY KEY, 
    artist TEXT NOT NULL,
    albums SMALLINT,
    roots TEXT,
    sun_sign VARCHAR(11),
    net_worth CURRENCY UNSIGNED, 
    on_tour BOOLEAN,
    is_alive BOOLEAN,
    has_children BOOLEAN,
    official_website HYPERLINK VARCHAR(200),
    social_media HYPERLINK,
);