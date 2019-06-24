### Schema
DROP DATABASE IF EXISTS rkhzdj91iilbdphgs;
CREATE DATABASE rkhzdj91iilbdphg;
USE rkhzdj91iilbdphg;

-- Create the table burgers.
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(127) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

