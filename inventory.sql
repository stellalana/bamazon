DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(30),
    price DECIMAL(11,2),
	stock_quantity INTEGER(11)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Milk', 'Grociery', 2.50, 55);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Socks', 'Clothing', 2.00, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('TV', 'Electronics', 599.95, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Scarf', 'Clothing', 8.99, 88);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Beans', 'Grociery', 3.99, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Blanket', 'Home', 25.98, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Couch', 'Furniture', 2999.99, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Printer', 'Electronics', 99.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Cup', 'Home', 1.00, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Pillow', 'Home', 30.00, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	values ('Banana', 'Grociery', .50, 5000);
    

SELECT*FROM products;
