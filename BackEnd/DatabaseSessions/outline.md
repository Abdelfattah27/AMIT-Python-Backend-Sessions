# outline 
1. create database 
2. create table
    - columns datatypes
      - Numeric
        - int
        - bigint
      - charachter 
        - char 
        - varchar
        - text
      - date/time
        - date
        - time
        - datetime
        - interval
      - boolean
        - boolean
      - json
        - json 
    ```sql
    INSERT INTO mytable (int_col, bigint_col, numeric_col, char_col,varchar_col, text_col, date_col, time_col, timestamp_col, interval_col, bool_col, bytea_col, json_col, jsonb_col)
    VALUES (123, 1234567890, 1234.56, 'hello', 'world', 'this is some text', '2022-03-20', '15:30:00', '2022-03-20 15:30:00', INTERVAL '1 day', TRUE, E'\\xDEADBEEF', '{"name": "John Smith", "age": 35}', '{"name": "Jane Doe", "age": 40}');
    ```
    - constraints 
      - primary key 
      - foreign key
      - check constraint 
      - not null 
      - unique 
3. select statement
   1. select *
   2. select columnName
   3. select where 
      1. conditions 
         1. = 
         2. != <>
         3. <
         4. >
         5. Between
         6. in
         7. like
         8. and
         9. or
         10. not
    4. order by 
    5. single rwo functions 
        1. CONCAT('Hello', ' ', 'World') AS concatenated_string,
        2. SUBSTRING('Hello World', 7, 5) AS extracted_substring,
        3. UPPER('hello') AS uppercase_string,
        4. LOWER('HELLO') AS lowercase_string,
        5. LENGTH('Hello World') AS string_length,
        6. TRIM('   Hello World   ') AS trimmed_string,
        7. ROUND(3.14159, 2) AS rounded_number,
        8. DATE_TRUNC('hour', TIMESTAMP '2022-01-01 12:34:56') AS truncated_timestamp,
        9. COALESCE(NULL, 'Hello', 'World') AS non_null_value;
    6.  multiple row functions 
         1.  count
         2.  sum
         3.  avg
         4.  max
         5.  min
     7. group by clause 
     8. joins 
        1. outer join
        2.  inner join 
    9. insert 
    10. update set
    11. delete from  
