# Constraint

In relational databases, constraints are used to enforce rules and restrictions on the data stored in tables. This ensures data integrity and consistency, and prevents incorrect or invalid data from being entered into the database.

PostgreSQL supports several types of constraints, including check constraints, primary key constraints, foreign key constraints, unique constraints, and exclusion constraints. In this tutorial, we'll cover some of the most commonly used constraints, including check constraints, primary key constraints, and unique constraints.
Primary Key Constraints
Primary key constraints are used to uniquely identify each row in a table. They are used to enforce the integrity of the data, and to ensure that each row can be identified and accessed efficiently. To create a primary key constraint in PostgreSQL, you can use the following syntax:

## Primary key

```sql
CREATE TABLE table_name (
   column1 datatype PRIMARY KEY,
   column2 datatype,
   ...
);
```

Here, column1 is the name of the column that will serve as the primary key, and datatype is the data type of the column.

Let's look at an example. Suppose we have a table called students with columns for id, name, and email. We want to make sure that each student has a unique ID. We can create a primary key constraint like this:

```sql
CREATE TABLE students (
id serial PRIMARY KEY,
name varchar(50),
email varchar(50)
);
```

In this example, we've created a primary key constraint on the id column, which ensures that each student has a unique ID.

## Unique Constraints

Unique constraints are used to ensure that each value in a column is unique. They are similar to primary key constraints, but they allow null values. To create a unique constraint in PostgreSQL, you can use the following syntax:

```sql
CREATE TABLE table_name (
   column1 datatype UNIQUE,
   column2 datatype,
   ...
);
```

Here, column1 is the name of the column that must be unique, and datatype is the data type of the column.

Let's look at an example. Suppose we have a table called users that contains information about registered users on a website. The table has columns for id, username, and email. We want to make sure that each email address is unique, so we'll create a unique constraint on the email column.

To create the table with the unique constraint, we can use the following SQL statement:

```sql
CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR(50) NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL
);
```

## Foreign Key Constraints

Foreign key constraints are used to link two tables together. They ensure that a value in one table's column corresponds to a value in another table's column. To create a foreign key constraint in PostgreSQL, you can use the following syntax:

```sql
CREATE TABLE table_name1 (
column1 datatype PRIMARY KEY,
column2 datatype,
...
);

CREATE TABLE table_name2 (
column1 datatype PRIMARY KEY,
column2 datatype,
table_name1_column datatype REFERENCES table_name1(column1),
...
);
```

Here, table_name1 is the name of the table that contains the primary key, column1 is the primary key column in that table, and table_name1_column is the name of the column in table_name2 that references the primary key in table_name1.

Let's look at an example. Suppose we have two tables called orders and customers. The orders table has columns for id, customer_id, order_date, and total, and the customers table has columns for id, name, and email. We want to make sure that the customer_id column in the orders table corresponds to a valid id in the customers table. We can create a foreign key constraint like this:

```sql
CREATE TABLE customers (
id serial PRIMARY KEY,
name varchar(50),
email varchar(50)
);

CREATE TABLE orders (
id serial PRIMARY KEY,
customer_id integer REFERENCES customers(id),
order_date date,
total numeric
);
```

In this example, we've created a foreign key constraint that links the customer_id column in the orders table to the id column in the customers table.

## Check Constraints

Check constraints are used to enforce a condition on the data stored in a table. For example, you might use a check constraint to ensure that a date is in a specific range, or that a value is not null. To create a check constraint in PostgreSQL, you can use the following syntax:

```sql
CREATE TABLE table_name (
   column1 datatype CONSTRAINT constraint_name CHECK (condition),
   column2 datatype,
   ...
);
```

Here, column1 is the name of the column, datatype is the data type of the column, constraint_name is the name of the constraint, and condition is the condition that must be met for the constraint to be satisfied.

Let's look at an example. Suppose we have a table called employees with columns for id, name, salary, and hire_date. We want to ensure that the salary is greater than or equal to 0. We can create a check constraint like this:

```sql
CREATE TABLE employees (
   id serial PRIMARY KEY,
   name varchar(50),
   salary numeric CONSTRAINT salary_check CHECK (salary >= 0),
   hire_date date
);
```

In this example, we've created a check constraint called salary_check that ensures the salary column is greater than or equal to 0.

# Project

lets make an e-commerce app

The eCommerce application is a platform where users can buy and sell products online. The application has several entities, including User, Product, Order, ShippingAddress, OrderItems, and Review on Product.

### Entities and data

The User entity contains the user's personal information, such as email, password, username, firstname, and photo.

The Product entity contains the product details such as name, image, brand, category, description, rating, number of reviews, price, and count in stock.

The Review entity contains the user's review of the product, such as name, rating, comment, and created_at.

The Order entity contains the order information, such as the user who placed the order, payment method, tax price, shipping price, total price, paid status, paid date, delivery status, and delivery date.

The OrderItems entity contains the product information in the order, such as the product, order, name, quantity, price, and image.

The ShippingAddress entity contains the shipping information, such as the order, address, city, postal code, and country.

Overall, this mini world eCommerce application enables users to browse and purchase products, view product reviews, and track their orders' status.

### Relationships

User and Product: One user can have many products associated with them, but each product can only be associated with one user. This is represented by a many-to-one relationship, where the User entity is the "one" side and the Product entity is the "many" side.

Product and Review: One product can have many reviews associated with it, but each review can only be associated with one product. This is also a many-to-one relationship, where the Product entity is the "one" side and the Review entity is the "many" side.

User and Order: One user can have many orders associated with them, but each order can only be associated with one user. This is again a many-to-one relationship, where the User entity is the "one" side and the Order entity is the "many" side.

Order and OrderItems: One order can have many order items associated with it, and each order item can only be associated with one order. This is a one-to-many relationship, where the Order entity is the "one" side and the OrderItems entity is the "many" side.

Order and ShippingAddress: One order can have one shipping address associated with it, and each shipping address can only be associated with one order. This is a one-to-one relationship, where the Order entity is the "one" side and the ShippingAddress entity is the "one" side.

### SQL code to create such that ECommerce

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    name VARCHAR(200),
    image VARCHAR(255) DEFAULT '/placeholder.png',
    brand VARCHAR(200),
    category VARCHAR(200),
    description TEXT,
    rating NUMERIC(7,2),
    num_reviews INTEGER DEFAULT 0,
    price NUMERIC(7,2),
    count_in_stock INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    name VARCHAR(200),
    rating INTEGER DEFAULT 0,
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    payment_method VARCHAR(200),
    tax_price NUMERIC(7,2),
    shipping_price NUMERIC(7,2),
    total_price NUMERIC(7,2),
    is_paid BOOLEAN DEFAULT FALSE,
    paid_at TIMESTAMP WITH TIME ZONE,
    is_delivered BOOLEAN DEFAULT FALSE,
    delivered_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
    order_id INTEGER REFERENCES orders(id) ON DELETE SET NULL,
    name VARCHAR(200),
    quantity INTEGER DEFAULT 0,
    price NUMERIC(7,2),
    image VARCHAR(255)
);

CREATE TABLE shipping_addresses (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE SET NULL,
    address VARCHAR(200),
    city VARCHAR(200),
    postal_code VARCHAR(200),
    country VARCHAR(200)
);

```
