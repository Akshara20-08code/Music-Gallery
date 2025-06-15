CREATE DATABASE music_gallery;
USE music_gallery;
CREATE TABLE products (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
price DECIMAL(10,2)
);
INSERT INTO products (name, price) VALUES
('Guitar', 100),
('Keyboard', 150),
('Drum Set', 200);
CREATE TABLE orders (
id INT AUTO_INCREMENT PRIMARY KEY,
item_name VARCHAR(255),
item_price DECIMAL(10,2),
order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
