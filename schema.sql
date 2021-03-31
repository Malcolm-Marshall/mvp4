DROP DATABASE IF EXISTS happyPlants;

CREATE DATABASE happyPlants;

USE happyPlants;

CREATE TABLE plants (
  id integer AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(225),
  water VARCHAR(225),
  sun VARCHAR(225),
  photo VARCHAR(225)
);