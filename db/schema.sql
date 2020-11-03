DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
Use burgers_db; 

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT, 
burger_name VARCHAR(255) NOT NULL, 
devoured BOOLEAN DEFAULT false, 
Primary KEY (id)
); 