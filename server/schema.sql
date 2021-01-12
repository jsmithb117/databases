-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID INT NOT NULL UNIQUE,
  username TEXT NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  ID INT NOT NULL UNIQUE,
  roomname TEXT NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  ID INT NOT NULL UNIQUE,
  message TEXT NOT NULL,
  user INT NOT NULL,
  room INT NOT NULL, 
  created TEXT NOT NULL,
  Primary KEY (ID),
  FOREIGN KEY (user) REFERENCES users(ID),
  FOREIGN KEY (room) REFERENCES rooms(ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

