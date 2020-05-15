CREATE DATABASE new_dashboard;

USE new_dashboard;

CREATE TABLE customer
(
    customer_id INT(11) NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
    (180),
    email VARCHAR
    (250),
    state VARCHAR
    (300),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE customer;

    CREATE TABLE orders
    (
    order_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_id INT(11),
    total DECIMAL(18, 2),
    placed DATETIME,
    completed DATETIME,
    status VARCHAR(180),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);