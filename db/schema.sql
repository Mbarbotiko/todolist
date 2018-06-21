### Schema

CREATE DATABASE ;
USE todolist_db;

CREATE TABLE to_do
(
	id int NOT NULL AUTO_INCREMENT,
	todo_item varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
