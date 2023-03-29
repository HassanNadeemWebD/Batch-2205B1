SELECT * FROM classicmodels.orderdetails;
select orders.orderNumber,orders.customerNumber ,contactLastName,  orderdetails.quantityOrdered , priceEach 
from orders 
inner join orderdetails on orders.orderNumber= orderdetails.orderNumber
inner join customers on orders.customerNumber = customers.customerNumber;   

select orders.orderNumber,orders.customerNumber ,contactLastName, sum(orderdetails.quantityOrdered) as Quantity  ,sum(priceEach) as TotalPrice 
from orders 
inner join orderdetails on orders.orderNumber= orderdetails.orderNumber
inner join customers on orders.customerNumber = customers.customerNumber group by orders.orderNumber ; 
use classicmodels;
select orderNumber,orders.customerNumber as OrderCustomerNumber,customers.customerNumber, contactLastName from orders  
right join customers on customers.customerNumber = orders.customerNumber ;

select orderNumber,orders.customerNumber as OrderCustomerNumber,customers.customerNumber, contactLastName from customers   
left join orders  on customers.customerNumber = orders.customerNumber ;