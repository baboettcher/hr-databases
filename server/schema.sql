CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT(5),
  user INT(25),
  room INT(25),
  text VARCHAR(144),
  PRIMARY KEY(id)

);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

