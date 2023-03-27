create database 2207B1;
use 2207B1;
create table students(id int, studentName varchar(255) , contact varchar(255),  city varchar(255) );

insert into students(id , studentName  , contact ,  city ) values (1 , "Maaz" , "03482233981","Karachi");

insert into students(id , studentName  , contact ,  city ) values (2 , "Uzair" , 03482233981,"Lahore"),(2 , "Zain" , 03482233981,"Lahore");

Alter table students modify column  contact varchar(255); 
insert into students(id , studentName  , contact ,  city ) values (1 , "Maaz" , "03482233981","Karachi");
truncate students;
drop table students;

alter table students add column  email varchar(255) after contact; 
alter table students change column contact   phoneNo varchar(255) ;
alter table students drop column email ;

select * from students;
select city, studentname  from students;
select studentName , phoneNo from students where studentName = "Uzair"  ;
SET SQL_SAFE_UPDATES = 0;
update students set  phoneNo = "03482244981" where studentName = "Uzair"; 

create table students(id int primary key auto_increment , studentName varchar(255) not null , contact varchar(255),  city varchar(255) );
insert into students(studentName  , contact ,  city ) values ( "Uzair" , 03482233981,"Lahore"),( "Maaz" , "03482233981","Karachi"),( "Zain" , 03482233981,"Lahore")
,( "Maaz" , "03482233981","Karachi");
insert into students( contact ,  city ) values ( null,"Karachi");
ALTER TABLE students
ALTER studentName SET DEFAULT 'ABC';
alter table students change column id  id int primary key auto_increment ;



SELECT * FROM classicmodels.customers;
use classicmodels;
select distinct country from customers order by country desc;
select * from  customers where country = "USA";
select customerNumber , contactFirstName , country  from  customers where country = "Austria";
select customerNumber , contactFirstName , country  from  customers where country NOT IN ("Australia ", "France","Norway") ;

select * from customers where customerName Like "%O.";
use 2207B1;


SELECT * FROM 2207b1.customers;
rollback;
use 2207B1;
insert into customers(cname , city , contact) values ("Anderson" , "Oval", "0365698758" );
rollback;

SELECT * FROM classicmodels.orders order by customerNumber;
use classicmodels;
select customerNumber , count(orderNumber) as orderCount from orders group by customerNumber order by orderCount desc limit 1;

SELECT * FROM classicmodels.customers;
-- SQL statement lists the number of customers in each country. Only include countries with more than 5 customers: 

select country , count(customerNumber) from customers group by country  having count(customerNumber) = 5 order by count(customerNumber) desc; 


SELECT * FROM classicmodels.payments;
select *  from payments order by amount desc limit 1;
select customerNumber , amount from payments having amount = max(amount);

SELECT * FROM classicmodels.payments;
select *  from payments order by amount desc limit 1;
select customerNumber , amount from payments having amount = max(amount);

use classicmodels;
select * from customers where customerNumber = 103;
select * from orders;
select orderNumber, orderDate , customers.customerNumber , contactLastName from customers inner join orders on customers.customerNumber = orders.customerNumber;
select orderNumber, orderDate, contactLastName from customers inner join orders on customers.customerNumber = orders.customerNumber where orders.customerNumber=141;

select orders.customerNumber, count(orders.customerNumber) as OrderCount , contactLastName ,city from orders inner join customers on customers.customerNumber = orders.customerNumber
 group by orders.customerNumber order by OrderCount desc limit 1 ; 

SELECT * FROM classicmodels.orderdetails;
select orders.orderNumber,orders.customerNumber ,contactLastName,  orderdetails.quantityOrdered , priceEach 
from orders 
inner join orderdetails on orders.orderNumber= orderdetails.orderNumber
inner join customers on orders.customerNumber = customers.customerNumber;   

select orders.orderNumber,orders.customerNumber ,contactLastName, sum(orderdetails.quantityOrdered) as Quantity  ,sum(priceEach) as TotalPrice 
from orders 
inner join orderdetails on orders.orderNumber= orderdetails.orderNumber
inner join customers on orders.customerNumber = customers.customerNumber group by orders.orderNumber ; 

