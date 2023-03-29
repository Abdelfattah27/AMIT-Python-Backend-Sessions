# SQL

SQL (Structured Query Language) is a programming language designed for managing and manipulating data stored in relational databases. SQL is used to create, modify, and retrieve data from databases.

**Here are some general rules for writing SQL:**

1. SQL statements are case-insensitive, but it's common practice to write them in all uppercase or lowercase to improve readability.
2. Statements in SQL are terminated by semicolons (;).
3. SQL keywords (SELECT, FROM, WHERE, etc.) are not case-sensitive, but it's good practice to capitalize them for clarity.
4. Always use single quotes ('') for string literals, and use double quotes ("") for identifiers (e.g. column names).
5. Use indentation and line breaks to make your SQL code more readable.
6. Use consistent and descriptive names for database objects, such as tables, columns, and views.
7. Use comments to explain your code and make it easier for others to understand.
8. Avoid using reserved keywords as object names.
9. Use parameterized queries to avoid SQL injection attacks.
10. Test your SQL code thoroughly before executing it on a live database.

## Begin With PostgreSQL

1. Creating a Database:
   To create a database, you can use the CREATE DATABASE statement followed by the name of the database you want to create. Here's an example:
   ```sql
   CREATE DATABASE mydatabase;
   ```
2. Creating Tables:
   To create a table in a database, you can use the CREATE TABLE statement, followed by the name of the table and the list of columns with their data types. Here's an example:
   ```sql
   CREATE TABLE employees (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50),
   age INT,
   salary NUMERIC(10,2),
   hire_date DATE
   );
   ```
   In the above example, we created a table called "employees" with five columns: "id", "name", "age", "salary", and "hire_date". The "id" column is the primary key and will auto-generate a unique value for each new record using the "SERIAL" data type. The "salary" column has a data type of "NUMERIC(10,2)" which means it will store decimal numbers with up to 10 digits and 2 decimal places.

### PostGres Datatype

PostgreSQL:

1. Numeric data types:
   - INT: 4-byte integer, range from -2147483648 to 2147483647
   - BIGINT: 8-byte integer, range from -9223372036854775808 to 9223372036854775807
   - NUMERIC: exact numeric value with user-specified precision and scale
2. Character data types:
   - CHAR: fixed-length character string
   - VARCHAR: variable-length character string
   - TEXT: variable-length character string with no specified limit
3. Date/time data types:
   - DATE: date (year, month, day)
   - TIME: time of day (hour, minute, second)
   - TIMESTAMP: date and time (year, month, day, hour, minute, second)
   - INTERVAL: a duration of time
4. Boolean data type:
   - BOOLEAN: true or false value
   - Binary data types:
   - BYTEA: variable-length binary data
   - JSON and JSONB: JSON-formatted text data

```sql
CREATE TABLE mytable (
   id SERIAL PRIMARY KEY,
   int_col INT, -- 123
   bigint_col BIGINT, -- 1234567890
   numeric_col NUMERIC(10,2), --  1234.56
   char_col CHAR(10), -- hello
   varchar_col VARCHAR(50), -- world
   text_col TEXT, -- this is some text
   date_col DATE, -- 2022-03-20
   time_col TIME, -- 15:30:00
   timestamp_col TIMESTAMP, -- 2022-03-20 15:30:00
   interval_col INTERVAL, -- INTERVAL '1 day'
   bool_col BOOLEAN, -- TRUE
   bytea_col BYTEA, -- E'\\xDEADBEEF'
   json_col JSON, -- {"name": "John Smith", "age": 35}
   jsonb_col JSONB -- {"name": "Jane Doe", "age": 40}
);

INSERT INTO mytable (int_col, bigint_col, numeric_col, char_col, varchar_col, text_col, date_col, time_col, timestamp_col, interval_col, bool_col, bytea_col, json_col, jsonb_col)
VALUES (123, 1234567890, 1234.56, 'hello', 'world', 'this is some text', '2022-03-20', '15:30:00', '2022-03-20 15:30:00', INTERVAL '1 day', TRUE, E'\\xDEADBEEF', '{"name": "John Smith", "age": 35}', '{"name": "Jane Doe", "age": 40}');

```

### SERIAL PRIMARY KEY

is a column in a PostgreSQL table that serves as a unique identifier for each row in the table.

The SERIAL data type is a shorthand for creating an auto-incrementing integer column, which means that each time a new row is inserted into the table, the value of the SERIAL column is automatically incremented by 1.

When a SERIAL column is used as the primary key for a table, it ensures that each row in the table has a unique identifier. The PRIMARY KEY constraint on the SERIAL column ensures that the column cannot contain NULL values, and that each value in the column is unique.

### NUMERIC data type

it allows you to store exact numeric values with user-specified precision and scale. The precision refers to the total number of digits that can be stored in the value, while the scale refers to the number of digits that can be stored after the decimal point.

In the expression "NUMERIC(10,2)", the first parameter (10) specifies the precision of the numeric value, which means that it can store up to 10 digits. The second parameter (2) specifies the scale of the numeric value, which means that it can store up to 2 digits after the decimal point.

For example, a NUMERIC(10,2) column can store values such as 1234567.89 or -9876543.21, which have a maximum of 10 digits in total and 2 digits after the decimal point.

## ٍSelect statement

To select data from a table in PostgreSQL, you can use the SELECT statement. Here's the basic syntax:

```sql
SELECT column1, column2, ... FROM table_name WHERE condition;
```

The column1, column2, ... part specifies the columns that you want to retrieve from the table, and the table_name part specifies the name of the table that you want to select from. The WHERE clause is optional and is used to specify any conditions that the selected data must meet.

For example, to select all columns from a table called "employees", you can use the following statement:

```sql
SELECT * FROM employees;
```

To perform arithmetic operations on the selected data, you can use the arithmetic operators +, -, \*, /, and % (modulo). Here's an example:

```sql
SELECT column1 + column2 AS sum FROM mytable;
```

In the above example, the + operator is used to add the values of column1 and column2, and the result is aliased as sum.

To handle NULL values, you can use the IS NULL and IS NOT NULL operators in the WHERE clause. Here's an example:

```sql
SELECT \* FROM mytable WHERE column1 IS NULL;
```

In the above example, the WHERE clause is used to retrieve only the rows where column1 is NULL.
You can also use the COALESCE function to replace NULL values with a specified default value. Here's an example:

```sql
SELECT COALESCE(column1, 0) AS column1 FROM mytable;
```

In the above example, the COALESCE function is used to replace any NULL values in column1 with a default value of 0.

#### Using Where

In PostgreSQL, the WHERE clause is used to filter rows from a table based on one or more conditions. Here's the basic syntax of a SELECT statement with a WHERE clause:

```sql
SELECT column1, column2, ... FROM table_name WHERE condition;
```

The column1, column2, ... part specifies the columns that you want to retrieve from the table, and the table_name part specifies the name of the table that you want to select from. The WHERE clause is used to specify the conditions that the selected data must meet.

There are several comparison operators that you can use in the WHERE clause to specify the conditions. Here are some of the most common ones:

> =: equal to
> <> or !=: not equal to
> <: less than
> : greater than
> <=: less than or equal to
> =: greater than or equal to
> BETWEEN: between two values (inclusive)
> LIKE: matches a pattern
> IN: matches any value in a list

```sql
-- Select all rows where column1 is equal to 10
SELECT * FROM mytable WHERE column1 = 10;

-- Select all rows where column1 is not equal to 10
SELECT * FROM mytable WHERE column1 <> 10;

-- Select all rows where column1 is greater than 10
SELECT * FROM mytable WHERE column1 > 10;

-- Select all rows where column1 is between 10 and 20 (inclusive)
SELECT * FROM mytable WHERE column1 BETWEEN 10 AND 20;

-- Select all rows where column2 matches the pattern 'abc%'
SELECT * FROM mytable WHERE column2 LIKE 'abc%';

-- Select all rows where column1 matches any value in a list
SELECT * FROM mytable WHERE column1 IN (1, 2, 3);

```

You can also use logical operators (AND, OR, NOT) to combine multiple conditions in the WHERE clause. Here's an example:

```sql
-- Select all rows where column1 is greater than 10 AND column2 matches the pattern 'abc%'
SELECT * FROM mytable WHERE column1 > 10 AND column2 LIKE 'abc%';
```

#### Operator precedence

there are operator precedence rules that determine the order in which operators are evaluated in a SQL expression. These rules help to ensure that the expression is evaluated correctly.

Here are the general rules of operator precedence in PostgreSQL, from highest to lowest:

Expressions within parentheses are evaluated first.
Unary operators (such as NOT, -, and +) are evaluated next.
Multiplicative operators (\*, /, %) are evaluated next, from left to right.
Additive operators (+, -) are evaluated next, from left to right.
Comparison operators (=, <, >, <=, >=, <>, !=, LIKE, ILIKE, SIMILAR TO, IN, BETWEEN, IS [NOT] DISTINCT FROM) are evaluated next.
Logical operators (NOT, AND, OR) are evaluated last.
Here's an example to illustrate these rules:

```sql
SELECT \* FROM mytable WHERE column1 = 10 AND column2 LIKE '%abc%' OR column3 < 5;
```

According to the operator precedence rules, this expression is evaluated as follows:

```sql
SELECT * FROM mytable WHERE (column1 = 10 AND column2 LIKE '%abc%') OR column3 < 5;
```

Note that the parentheses around the first two conditions ensure that they are evaluated together, before the OR condition is evaluated.

#### Sorting

you can sort the result set of a SELECT statement using the ORDER BY clause. The ORDER BY clause is used to specify one or more columns by which the result set should be sorted, and the direction of the sorting (ascending or descending).

Here's the basic syntax of a SELECT statement with an ORDER BY clause:

```sql
SELECT column1, column2, ... FROM table_name ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
```

The column1, column2, ... part specifies the columns that you want to retrieve from the table, and the table_name part specifies the name of the table that you want to select from. The ORDER BY clause is used to specify the columns that the result set should be sorted by, along with the direction of the sorting (ascending or descending).

Here are some examples of using the ORDER BY clause to sort a result set:

```sql
-- Select all rows from mytable, sorted by column1 in ascending order
SELECT * FROM mytable ORDER BY column1 ASC;

-- Select all rows from mytable, sorted by column1 in descending order
SELECT * FROM mytable ORDER BY column1 DESC;

-- Select all rows from mytable, sorted by column1 in descending order, then by column2 in ascending order
SELECT * FROM mytable ORDER BY column1 DESC, column2 ASC;
```

By default, the ORDER BY clause sorts the result set in ascending order. To sort the result set in descending order, you can specify the DESC keyword after the column name. If you don't specify the direction explicitly, it defaults to ascending order.

You can also use expressions in the ORDER BY clause, not just column names. Here's an example:

```sql
-- Select all rows from mytable, sorted by the sum of column1 and column2
SELECT * FROM mytable ORDER BY column1 + column2;
```

Note that you can also use the ORDER BY clause with aggregate functions, such as SUM, AVG, and COUNT. When you use an aggregate function, the result set is grouped by the columns that are not used in the aggregate function.

#### Single row functions

- CONCAT: This function is used to concatenate two or more strings into a single string
- SUBSTRING: This function is used to extract a substring from a given string
- UPPER and LOWER: These functions are used to convert a string to uppercase or lowercase
- LENGTH: This function is used to find the length of a string.
- TRIM: This function is used to remove leading or trailing spaces from a string.
- ROUND: This function is used to round a numeric value to a specified number of decimal places.
- DATE_TRUNC: This function is used to truncate a date or timestamp to a specified precision.
- COALESCE: This function is used to return the first non-null value in a list of values.

```sql
SELECT
  CONCAT('Hello', ' ', 'World') AS concatenated_string,
  SUBSTRING('Hello World', 7, 5) AS extracted_substring,
  UPPER('hello') AS uppercase_string,
  LOWER('HELLO') AS lowercase_string,
  LENGTH('Hello World') AS string_length,
  TRIM('   Hello World   ') AS trimmed_string,
  ROUND(3.14159, 2) AS rounded_number,
  DATE_TRUNC('hour', TIMESTAMP '2022-01-01 12:34:56') AS truncated_timestamp,
  COALESCE(NULL, 'Hello', 'World') AS non_null_value;

```

Output

```sql
 concatenated_string | extracted_substring | uppercase_string | lowercase_string | string_length | trimmed_string | rounded_number | truncated_timestamp      | non_null_value
---------------------+---------------------+------------------+------------------+---------------+----------------+----------------+---------------------------+----------------
 Hello World         | World               | HELLO            | hello            |            11 | Hello World    |           3.14 | 2022-01-01 12:00:00+00:00 | Hello
(1 row)

```

#### Aggregations

aggregation functions are used to perform calculations on a set of values and return a single result. Aggregation functions are often used in conjunction with the GROUP BY clause to group data by one or more columns and perform calculations on each group. Here's a tutorial on how to use aggregation functions in PostgreSQL:

COUNT: This function is used to count the number of rows in a group. Here's an example:

```sql
SELECT COUNT(*) FROM my_table;

-- Output: Total number of rows in the "my_table" table.
```

```sql
SELECT COUNT(column_name) FROM my_table;
--Output: Total number of non-null values in the "column_name" column of the "my_table" table.
```

SUM: This function is used to calculate the sum of all values in a group. Here's an example:

```sql
SELECT SUM(column_name) FROM my_table;
-- Output: Sum of all values in the "column_name" column of the "my_table" table.
```

AVG: This function is used to calculate the average value of all values in a group. Here's an example:

```sql
SELECT AVG(column_name) FROM my_table;
-- Output: Average value of all values in the "column_name" column of the "my_table" table.
```

you can use group functions with GROUP BY in PostgreSQL, you first need to specify the columns you want to group by, followed by the aggregation functions you want to use. Here's an example:

Let's assume we have a table named sales with the following data:

```yaml
| date | product | quantity | price |
|-----------|---------|----------|-------|
| 2022-01-01| Apple | 10 | 1.50 |
| 2022-01-01| Orange | 20 | 2.00 |
| 2022-01-02| Apple | 15 | 1.75 |
| 2022-01-02| Orange | 30 | 2.25 |
```

If you want to calculate the total sales for each product, you can use the following query:

```sql
SELECT product, SUM(quantity \* price) AS total_sales
FROM sales
GROUP BY product;
```

Output

```yaml
| product | total_sales |
|---------|-------------|
|  Apple  |     36.25   |
| Orange  |     70.00   |
```

#### Joins

INNER JOIN:

```sql
SELECT *
FROM table1
INNER JOIN table2
ON table1.id = table2.id;
```

This query performs an inner join between table1 and table2 based on the "id" column. The result set will only include rows where there is a match in both tables.

LEFT JOIN:

```sql
SELECT \*
FROM table1
LEFT JOIN table2
ON table1.id = table2.id;
```

This query performs a left join between table1 and table2 based on the "id" column. All rows from table1 will be included in the result set, along with any matching rows from table2. If there is no match in table2, the corresponding columns will contain NULL values.

RIGHT JOIN:

```sql
SELECT *
FROM table1
RIGHT JOIN table2
ON table1.id = table2.id;
```

This query performs a right join between table1 and table2 based on the "id" column. All rows from table2 will be included in the result set, along with any matching rows from table1. If there is no match in table1, the corresponding columns will contain NULL values.

FULL OUTER JOIN:

```sql
SELECT \*
FROM table1
FULL OUTER JOIN table2
ON table1.id = table2.id;
```

This query performs a full outer join between table1 and table2 based on the "id" column. All rows from both tables will be included in the result set, along with any matching rows from the other table. If there is no match in either table, the corresponding columns will contain NULL values.

Note that the "ON" clause specifies the condition for joining the two tables. In these examples, we are joining on a single column ("id"), but you can join on multiple columns or more complex conditions as needed.

### Insert

To insert values into a table in PostgreSQL, you can use the INSERT INTO statement. Here's an example:

Let's say we have a table called "students" with columns "id", "name", and "age". To insert a new row into the table with id = 1, name = "John", and age = 20, you would use the following SQL query:

```sql
INSERT INTO students (id, name, age)
VALUES (1, 'John', 20);
```

This query specifies the table name and the columns that we want to insert data into. The VALUES clause then lists the values that we want to insert into those columns, in the same order that the columns were specified in the INSERT INTO statement.

If you want to insert multiple rows at once, you can separate them with commas, like this:

```sql
INSERT INTO students (id, name, age)
VALUES (1, 'John', 20), (2, 'Jane', 22), (3, 'Bob', 19);
```

This query will insert three rows into the students table.

Note that if the table has columns with default values or auto-incrementing values, you may not need to specify those columns in your INSERT statement.

### Update

To update values in a table in PostgreSQL, you can use the UPDATE statement. Here's an example:

Suppose we have a table called "students" with columns "id", "name", and "age". To update the age of the student with id = 1 to 21, you would use the following SQL query:

```sql
UPDATE students
SET age = 21
WHERE id = 1;
```

This query specifies the table name and the column that we want to update. The SET clause then lists the new value that we want to set for that column. The WHERE clause specifies the condition for which rows to update; in this case, we want to update the row where id =

If you want to update multiple columns at once, you can separate them with commas in the SET clause, like this:

```sql
UPDATE students
SET age = 21, name = 'John Smith'
WHERE id = 1;
```

This query updates both the age and name columns for the student with id = 1.

You can also use more complex conditions in the WHERE clause to update multiple rows at once. For example, to update the ages of all students whose names start with 'J', you could use the following query:

```sql
UPDATE students
SET age = 22
WHERE name LIKE 'J%';
```

This query sets the age of all students whose name starts with 'J' to 22.

### Delete

To delete values from a table in PostgreSQL, you can use the DELETE statement. Here's an example:

Suppose we have a table called "students" with columns "id", "name", and "age". To delete the row where id = 1, you would use the following SQL query:

```sql
DELETE FROM students
WHERE id = 1;
```

This query specifies the table name and the condition for which rows to delete. The WHERE clause specifies the condition for which rows to delete; in this case, we want to delete the row where id = 1.

If you don't specify a WHERE clause, the DELETE statement will delete all rows from the table:

```sql
DELETE FROM students;
```

This query deletes all rows from the students table.

You can also use more complex conditions in the WHERE clause to delete multiple rows at once. For example, to delete all students whose names start with 'J', you could use the following query:

```sql
DELETE FROM students
WHERE name LIKE 'J%';
```

This query deletes all rows from the students table where the name column starts with 'J'.

### Alter the structure of the table

To modify an existing table in PostgreSQL, you can use the ALTER TABLE statement. Here are some examples:

Adding a new column:
To add a new column to an existing table, you can use the following syntax:

```sql
ALTER TABLE table_name

ADD COLUMN column_name data_type;
```

For example, to add a new column called "email" of type varchar(50) to a table called "users", you can use the following SQL statement:

```sql
ALTER TABLE users
ADD COLUMN email varchar(50);
```

Modifying a column:
To modify the definition of an existing column, you can use the ALTER TABLE statement with the MODIFY COLUMN option. For example, to change the data type of a column called "age" in a table called "users" to integer, you can use the following SQL statement:

```sql
ALTER TABLE users
ALTER COLUMN age TYPE integer;
```

Renaming a column:
To rename an existing column, you can use the ALTER TABLE statement with the RENAME COLUMN option. For example, to rename a column called "old_name" to "new_name" in a table called "my_table", you can use the following SQL statement:

```sql
ALTER TABLE my_table
RENAME COLUMN old_name TO new_name;
```

Remove column in table

```sql
ALTER TABLE tbl_name
DROP COLUMN col_name;
```

Remove the whall table

```sql
DROP TABLE tbl_name ;
```
