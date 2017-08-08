CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT(5) AUTO_INCREMENT,
  user INT(25) REFERENCES users(id),
  room INT(25) REFERENCES rooms(id),
  text VARCHAR(144),
  PRIMARY KEY(id)
  -- FOREIGN KEY(user) REFERENCES users(id)
);

CREATE TABLE users (
  id INT(5) AUTO_INCREMENT,
  name VARCHAR(25),
  PRIMARY KEY(id)
);


CREATE TABLE rooms (
  id INT(5) AUTO_INCREMENT,
  name VARCHAR(25),
  PRIMARY KEY(id)
);




/*

CREATE TABLE classes (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  department INTEGER,
  teacher INTEGER,
  FOREIGN KEY(department) REFERENCES departments(id),
  FOREIGN KEY(teacher) REFERENCES teachers(id)
);
*/




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

