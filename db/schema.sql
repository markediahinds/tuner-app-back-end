DROP DATABASE IF EXISTS songs
CREATE DATABASE songs_dev

\c songs_dev

CREATE TABLE tuners (
    id SERIAL PRIMARY KEY, 
    song TEXT NOT NULL,
    album TEXT,
    time TEXT, 
    is_favorite BOOLEAN
)