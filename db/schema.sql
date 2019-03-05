###Schema

-- create database
CREATE DATABASE burgers_db;

-- switch into database
USE burgers_db;

-- create new table
CREATE TABLE burgers 
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
date timestamp,
PRIMARY KEY (id)
);

