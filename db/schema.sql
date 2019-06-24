### Schema
DROP DATABASE IF EXISTS gqg6phdfpy1m7eag;
CREATE DATABASE gqg6phdfpy1m7eag;
USE gqg6phdfpy1m7eag;

-- Create the table burgers.
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(127) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

