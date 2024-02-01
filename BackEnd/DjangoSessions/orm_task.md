```bash

python manage.py createsuperuser

```

```sql

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
    order_id INTEGER REFERENCES orders(id) ON DELETE SET NULL,
    name VARCHAR(200),
    quantity INTEGER DEFAULT 0,
    price NUMERIC(7,2),
    image VARCHAR(255)
);




INSERT INTO products (user_id, name, brand, category, description, rating, num_reviews, price, count_in_stock)
VALUES 
(1, 'Smartphone X', 'TechCo', 'Electronics', 'Cutting-edge smartphone with advanced features', 4.5, 10, 699.99, 50),
(2, 'Stylish Jeans', 'FashionWear', 'Clothing', 'Comfortable jeans with a trendy design', 3.8, 5, 49.99, 20),
(3, 'Smart Home Hub', 'HomeTech', 'Home & Garden', 'Central hub for smart home automation', 4.2, 8, 129.99, 30);




INSERT INTO reviews (product_id, user_id, name, rating, comment)
VALUES 
(1, 1, 'John Doe', 5, 'Great product, highly recommended!'),
(2, 2, 'Jane Smith', 4, 'Nice fit, comfortable jeans.'),
(3, 3, 'Bob Johnson', 3, 'Good functionality but a bit complicated.');




INSERT INTO orders (user_id, payment_method, tax_price, shipping_price, total_price, is_paid, paid_at, is_delivered, delivered_at)
VALUES 
(1, 'Credit Card', 5.00, 10.00, 74.99, TRUE, '2024-02-01 10:30:00', FALSE, NULL),
(2, 'PayPal', 3.50, 8.00, 41.49, TRUE, '2024-02-01 11:45:00', TRUE, '2024-02-03 14:20:00'),
(3, 'Debit Card', 7.20, 12.00, 148.19, FALSE, NULL, FALSE, NULL);





INSERT INTO order_items (product_id, order_id, name, quantity, price, image)
VALUES 
(1, 1, 'Smartphone X', 2, 699.99, '/images/smartphone.jpg'),
(2, 1, 'Stylish Jeans', 1, 49.99, '/images/jeans.jpg'),
(3, 2, 'Smart Home Hub', 3, 129.99, '/images/smart_hub.jpg'),
(2, 3, 'Stylish Jeans', 2, 49.99, '/images/jeans.jpg'),
(1, 3, 'Smartphone X', 1, 699.99, '/images/smartphone.jpg'),
(3, 3, 'Smart Home Hub', 1, 129.99, '/images/smart_hub.jpg'),
(1, 2, 'Smartphone X', 1, 699.99, '/images/smartphone.jpg'),
(2, 2, 'Stylish Jeans', 3, 49.99, '/images/jeans.jpg'),
(3, 1, 'Smart Home Hub', 2, 129.99, '/images/smart_hub.jpg');



SELECT * FROM products;
SELECT * FROM orders;
SELECT * FROM reviews;
SELECT * FROM order_items;


select name , image from products ;


select * from products where user_id = 1 ;

SELECT * FROM products
WHERE count_in_stock < 10;


SELECT SUM(total_price) as total_revenue
FROM orders;


SELECT r.*, p.name as product_name
FROM reviews r
JOIN products p ON r.product_id = p.id
ORDER BY r.created_at DESC






SELECT o.*, oi.name, oi.quantity, oi.price
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
WHERE o.user_id = 1;



SELECT * FROM orders
WHERE is_paid = TRUE AND is_delivered = FALSE;

 -- models.Q() & models.Q() === AND
 -- models.Q() | models.Q() ===  OR


SELECT p.*, r.rating, r.comment
FROM products p
LEFT JOIN reviews r ON p.id = r.product_id;



SELECT o.*, u.username, u.email
FROM orders o
JOIN users u ON o.user_id = u.id;


SELECT * FROM products
WHERE created_at >= NOW() - INTERVAL '7 days';


```