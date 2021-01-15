CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS users (
  ID INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS rooms (
  ID INT NOT NULL AUTO_INCREMENT,
  room VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS messages (
  /* Describe your table here.*/
  ID INT NOT NULL AUTO_INCREMENT,
  message TEXT NOT NULL,
  userkey INT NOT NULL,
  roomkey INT NOT NULL, 
  created TEXT NOT NULL,
  Primary KEY (ID),
  FOREIGN KEY (userkey) REFERENCES users(ID),
  FOREIGN KEY (roomkey) REFERENCES rooms(ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- mysql -u root < /server/schema.sql