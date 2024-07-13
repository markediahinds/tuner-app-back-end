DROP DATABASE IF EXISTS songs
CREATE DATABASE songs_dev

\c songs_dev

CREATE TABLE songs (
    id SERIAL PRIMARY KEY, 
    song TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT, 
    is_alive BOOLEAN
)