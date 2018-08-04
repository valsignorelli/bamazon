CREATE DATABASE bamazonDB;
USE bamazonDB;


CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Bananas', 'Produce', 1.00, 500),
				('Chocolate', 'Grocery', 2.50, 300),
                ('Organic Apples', 'Produce', 2.00, 400),
                ('Popsicles', 'Grocery', 2.50, 350),
                ('Thomas and Friends Trackmaster', 'Toys', 15.00, 50),
                ('Dinosaur T-Rex', 'Toys', 10.00, 50),
                ('Water Guns', 'Toys', 5.00, 75),
                ('iPhone', 'Electronics', 500, 100),
                ('Tablet', 'Electronics', 300, 70),
                ('Tylenol', 'Pharmacy', 3.50, 125)
