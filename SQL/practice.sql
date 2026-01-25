create database college;
use college;
create table teacher (
	id int,
    name varchar(30),
    subject varchar(30),
    salary int
);
insert into teacher
values
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

 alter table teacher
 add primary key (id);
 
 select salary from teacher 
 where salary >= 55000;
 
 alter table teacher
 change column salary ctc int;
 
 select * from teacher;
 
 update teacher 
 set ctc = ctc + ctc * 0.25;
 
 set sql_safe_updates = 0;
 
 
 alter table teacher
 add column city varchar(50) default "Gurgaon";
 
 
 alter table teacher
 drop column ctc;