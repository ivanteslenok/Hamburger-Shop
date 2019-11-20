USE Gruber;

--1.
--Да, можно вынести новую cущность "User", которая будет содержать столбцы Id, Name, City. Таблицы sellers и customers будут иметь с таблицей User связь 1 к 1.

--2.
SELECT o.*
FROM orders o
WHERE o.cnum IS NULL OR o.snum IS NULL;

--3. 
SELECT o.*
FROM orders o
INNER JOIN customers c ON o.cnum = c.cnum
where c.snum IS NULL;

--4. 
SELECT o.*, c.cname, s.sname
FROM orders o
LEFT JOIN customers c ON o.cnum = c.cnum
LEFT JOIN sellers s ON o.snum = s.snum;

--5. 
SELECT s.*, o.*
FROM sellers s
LEFT JOIN orders o ON s.snum = o.snum;

--6. 
SELECT DISTINCT c.cname, s.sname
FROM orders o
INNER JOIN customers c ON o.cnum = c.cnum
INNER JOIN sellers s ON o.snum = s.snum

--7. 
SELECT DISTINCT firstCustomer.cname first_name, 
secondCustomer.cname second_name, 
firstOrder.odate date_time 
FROM orders firstOrder 
INNER JOIN customers firstCustomer ON firstOrder.cnum = firstCustomer.cnum
INNER JOIN orders secondOrder ON secondOrder.odate = firstOrder.odate AND secondOrder.cnum > firstOrder.cnum
INNER JOIN customers secondCustomer on secondOrder.cnum = secondCustomer.cnum 
ORDER By date_time

--8. 
SELECT c.cname , o.amt
FROM orders o
INNER JOIN customers c ON o.cnum = c.cnum
WHERE o.amt = (SELECT MIN(amt) FROM orders) OR o.amt = (SELECT MAX(amt) FROM orders)

--9. 
SELECT DISTINCT  c.* 
FROM orders first
INNER JOIN customers c ON first.cnum = c.cnum 
LEFT JOIN orders second ON second.snum = c.snum AND second.cnum = c.cnum
WHERE (first.snum <> c.snum OR first.snum IS NULL)  AND second.onum IS NOT NULL 

--10. 
SELECT DISTINCT o.*
FROM orders o
INNER JOIN sellers s ON o.snum = s.snum
INNER JOIN customers c ON  o.cnum = c.cnum
where  c.city <> s.city

--11. 
SELECT o.odate, AVG(amt) average_order_amount
FROM orders o
GROUP BY o.odate

--12. 

SELECT s.sname
FROM sellers s
INNER JOIN orders o ON s.snum = o.snum
GROUP BY s.sname
HAVING COUNT(o.snum) > 2;

--13. 
SELECT o.*
FROM orders o
WHERE o.amt > (SELECT AVG(amt) FROM orders);

--14. 
SELECT o.*
FROM orders o
INNER JOIN customers c ON o.cnum = c.cnum
WHERE c.rating > (SELECT AVG(rating) FROM customers)

--15
INSERT INTO tmpdata 
SELECT o.cnum,o.snum,c.cname,c.city, o.odate, o.amt
FROM orders o
INNER JOIN customers c ON o.cnum=c.cnum
WHERE c.city = 'London' OR c.city = 'Boston';

--16. 
UPDATE tmpdata
SET odate = '1990-01-01'
WHERE cnum IN (SELECT cnum FROM customers WHERE rating = 200)

--17. 
DELETE FROM tmpdata
WHERE snum IN (SELECT snum FROM sellers WHERE sname = 'Peel')

--18. 
INSERT INTO tmpdata (cnum, snum, odate, amt)
SELECT o.cnum,o.snum,o.odate, o.amt
FROM orders o
INNER JOIN sellers s ON o.snum=s.snum
WHERE s.comm < (SELECT AVG(comm) FROM sellers WHERE snum IN (SELECT snum FROM orders));










