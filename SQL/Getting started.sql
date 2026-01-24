create database College;
use College;

CREATE TABLE Student (
	RollNo INT,
    Name VARCHAR(30),
    Age INT
);

INSERT INTO Student 
VALUES
(101,"Adam",12),
(102,"Pakya",14);

SELECT * FROM Student;

DROP DATABASE College;

CREATE database Instagram;

USE Instagram;

CREATE TABLE User (
	Id INT,
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) UNIQUE,
    Followers INT DEFAULT 0,
    Following INT
);

ALTER TABLE `User`
ADD PRIMARY KEY (Id);

CREATE TABLE Post (
	Id INT PRIMARY KEY,
    Content VARCHAR(50),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(Id)
);

INSERT INTO User
(Id,Name,Email,Followers,Following)
Values
(1,"Ramesh","ramesh19@gmail.com",255,433);

SELECT * FROM User;

INSERT INTO User
(Id,Name,Email,Followers,Following)
Values
(2,"Pakya","pakya22@gmail.com",157,223),
(3,"Charan","charan34@gmail.com",10001,200);