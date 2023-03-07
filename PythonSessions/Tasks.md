# Session 1

1. Create a simple calculator that takes user input and performs basic arithmetic operations such as addition, subtraction, multiplication, and division using the arithmetic operators.

   ```python
   print("Welcome to the simple calculator program!")

   print("Please enter your desired operation:")
   print("1. Addition")
   print("2. Subtraction")
   print("3. Multiplication")
   print("4. Division")
   print("5. Exit")

   choice = input("Enter your choice (1-5): ")

   if choice == "1":
       num1 = float(input("Enter the first number: "))
       num2 = float(input("Enter the second number: "))
       result = num1 + num2
       print("The result is:", result)

   elif choice == "2":
       num1 = float(input("Enter the first number: "))
       num2 = float(input("Enter the second number: "))
       result = num1 - num2
       print("The result is:", result)

   elif choice == "3":
       num1 = float(input("Enter the first number: "))
       num2 = float(input("Enter the second number: "))
       result = num1 * num2
       print("The result is:", result)

   elif choice == "4":
       num1 = float(input("Enter the first number: "))
       num2 = float(input("Enter the second number: "))
       result = num1 / num2
       print("The result is:", result)

   elif choice == "5":
       print("Thank you for using the calculator program!")
       break

   else:
       print("Invalid input. Please enter a number between 1 and 5.")

   ```

2. Write a program that prompts the user to enter a temperature in Celsius and converts it to Fahrenheit using the appropriate formula.
   ```python
   celsius = float(input("Enter temperature in Celsius: "))
   fahrenheit = (celsius * 1.8) + 32
   print("Temperature in Fahrenheit:", fahrenheit)
   ```
3. Write a program that prompts the user to enter a number and checks if it is a prime number using a loop and the modulo operator.

   ```python
   num = int(input("Enter a number: "))

   # Check if number is prime
   prime = True
   for i in range(2, num):
       if num % i == 0:
           prime = False
           break

   # Output result
   if prime:
       print(num, "is a prime number")
   else:
       print(num, "is not a prime number")

   ```

4. Write a program that input a number and output the equevelent day of the week to it

   ```python
   num = int(input("Enter a number (1-7) to get the corresponding day of the week: "))

   if num == 1:
       print("Sunday")
   elif num == 2:
       print("Monday")
   elif num == 3:
       print("Tuesday")
   elif num == 4:
       print("Wednesday")
   elif num == 5:
       print("Thursday")
   elif num == 6:
       print("Friday")
   elif num == 7:
       print("Saturday")
   else:
       print("Invalid input. Please enter a number between 1 and 7.")
   ```

5. Write a programme to get a grade and print the equivalent [excellent , very good , good , accepted , fail ]

   ```python
   grade = float(input("Enter your grade: "))

   if grade >= 90:
       print("Excellent")
   elif grade >= 80:
       print("Very Good")
   elif grade >= 70:
       print("Good")
   elif grade >= 60:
       print("Accepted")
   else:
       print("Fail")
   ```

# Session 2

1. Write a program that prompts the user to enter a string and counts the number of characters in the string using the len() function.

   ```python
   string = input("Enter a string: ")
   count = len(string)
   print("The number of characters in the string is:", count)
   ```

2. Write a program that prompts the user to enter a number and determines whether it is even or odd using the modulo operator (%).

   ```python
    number = int(input("Enter a number: "))

    if number % 2 == 0:
        print(number, "is even.")
    else:
        print(number, "is odd.")

   ```

3. Write a program that uses a for loop to iterate over a list of numbers and prints the sum of the numbers.

   ```python
    numbers = [1, 2, 3, 4, 5]
    sum = 0

    for num in numbers:
        sum += num

    print("The sum of the numbers is:", sum)

   ```

4. Write a program that uses a while loop to repeatedly prompt the user to enter a password until they enter the correct password.

   ```python
   password = "secret"  # the correct password
    user_password = ""   # initialize the user's input password to an empty string

    while user_password != password:   # keep prompting the user until they enter the correct password
        user_password = input("Enter your password: ")   # prompt the user to enter a password
        if user_password != password:   # check if the user's input password matches the correct password
            print("Incorrect password. Please try again.")

    print("Welcome! Access granted.")  # print a welcome message when the correct password is entered


   ```

5. Write a program that reads a file and counts the number of lines, words, and characters in the file.

   ```python
    filename = input("Enter the name of the file: ")

    num_lines = 0
    num_words = 0
    num_chars = 0

    with open(filename, 'r') as file:
        for line in file:
            num_lines += 1
            words = line.split()
            num_words += len(words)
            num_chars += len(line)

    print("Number of lines:", num_lines)
    print("Number of words:", num_words)
    print("Number of characters:", num_chars)

   ```

6. Write a program that uses a function to calculate the area and perimeter of a rectangle based on user input for the length and width.

   ```python
    def rectangle_properties(length, width):
        # Calculate area
        area = length * width
        # Calculate perimeter
        perimeter = 2 * (length + width)
        # Return both area and perimeter
        return area, perimeter

    # Prompt user for length and width input
    length = float(input("Enter the length of the rectangle: "))
    width = float(input("Enter the width of the rectangle: "))

    # Call function to calculate area and perimeter
    area, perimeter = rectangle_properties(length, width)

    # Print results
    print("Area of the rectangle:", area)
    print("Perimeter of the rectangle:", perimeter)

   ```

7. Write a program that prompts the user to enter a sentence and then reverses the order of the words in the sentence.

   ```python
    sentence = input("Enter a sentence: ")
    words = sentence.split()
    reversed_words = words[::-1]
    reversed_sentence = " ".join(reversed_words)
    print("Reversed sentence:", reversed_sentence)

   ```

8. Create a Python program that reads the contents of a text file and prints them to the console.

   ```python
    with open('filename.txt', 'r') as file:
        contents = file.read()

        print(contents)

   ```

9. Write a Python program that creates a new file, writes some text to it, and then reads the text back from the file and prints it to the console.

   ```python
    with open("example.txt", "w") as file:
        file.write("This is some example text.")

    with open("example.txt", "r") as file:

        text = file.read()
        print(text)

   ```

10. Modify the previous program to append new text to the end of the file instead of overwriting the existing text.

    ```python
    # Open the file in append mode
    with open('example.txt', 'a') as file:
        # Prompt the user to enter new text to append to the file
        new_text = input("Enter text to append to the file: ")
        # Write the new text to the end of the file
        file.write(new_text + "\n")

    # Open the file in read mode to print the contents to the console
    with open('example.txt', 'r') as file:
        # Read the contents of the file and print them to the console
        contents = file.read()
        print(contents)

    ```

# Session 3

1. Create a Python function that takes a list of numbers as input and returns a new list containing only the even numbers. Use list comprehension to implement the function.

   ```python

   ```

2. Write a Python program that reads a CSV file and creates a dictionary from the data, where the keys are the first column values and the values are lists containing the remaining columns.

   ```python
    import csv

    with open('data.csv', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)
        data_dict = {}
        for row in csv_reader:
            key = row[0]
            values = row[1:]
            data_dict[key] = values
        print(data_dict)

   ```

3. Implement a Python function that takes a dictionary as input and returns a new dictionary with the same keys and values, but with all the values converted to uppercase. Use a dictionary comprehension to implement the function.

   ```python
   def to_uppercase_dict(input_dict):
    return {k: v.upper() for k, v in input_dict.items()}

   ```

4. Write a Python program that defines a decorator to measure the execution time of a function. The decorator should print the execution time in seconds after the function completes.

   ```python
    import time

    def measure_time(func):
        def wrapper(*args, **kwargs):
            start_time = time.time()
            result = func(*args, **kwargs)
            end_time = time.time()
            print(f"Execution time: {end_time - start_time} seconds")
            return result
        return wrapper

    @measure_time
    def my_func():
        # function code here

   ```

5. Create a Python generator that yields the Fibonacci sequence up to a given limit. Test the generator by printing the first 20 Fibonacci numbers.

   ```python
    def fibonacci(limit):
    a, b = 0, 1
    while a <= limit:
        yield a
        a, b = b, a+b

    for num in fibonacci(100):
        print(num)

   ```

6. Write a Python program that reads a text file and counts the occurrences of each word in the file. Use a dictionary to store the word counts and a generator to read the file.

   ```python
    import re

    def count_words(file_name):
        with open(file_name, 'r') as file:
            word_count = {}
            for line in file:
                words = re.findall('\w+', line.lower())
                for word in words:
                    if word in word_count:
                        word_count[word] += 1
                    else:
                        word_count[word] = 1
        return word_count

   ```

7. Create a Python module that defines a function to calculate the factorial of a given number. Import the module and use the function to calculate the factorial of 10.

   ```python
   # factorial.py
    def factorial(n):
        if n == 0:
            return 1
        else:
            return n * factorial(n-1)

    # main.py
    import factorial

    result = factorial.factorial(10)

    print(result)  # output: 3628800


   ```

8. Write a Python script that creates a package containing a module that defines a function to calculate the area of a circle, and a test module that tests the function. Use relative imports to import the function in the test module.

   ```python
    #Create a directory named my_package.
    # Inside my_package, create two files: circle.py and test_circle.py.
    # In circle.py, define the function area_of_circle(radius).
    # In test_circle.py, import area_of_circle from circle using relative imports and test the function.

    # circle.py
    import math

    def area_of_circle(radius):
        return math.pi * radius ** 2

    # test_circle.py
    from .circle import area_of_circle

    radius = 5
    expected_area = 78.53981633974483

    result = area_of_circle(radius)

    assert result == expected_area, f"Expected {expected_area}, but got {result}"


   ```

9. Create a Python program that reads a JSON file containing a list of dictionaries representing employees, and prints the name and salary of each employee sorted by salary in descending order.

   ```python
   import json

    with open('employees.json', 'r') as file:
        data = json.load(file)

    employees = sorted(data, key=lambda emp: emp['salary'], reverse=True)

    for emp in employees:
        print(f"{emp['name']}: {emp['salary']}")


   ```

10. Write a Python function that takes a list of dictionaries as input, and returns a new list of dictionaries with the same keys, but with the values sorted in ascending order. Use a lambda function as the key function for sorting the values.

    ```python
    def sort_dict_values(dicts):
        return [{k: sorted(v, key=lambda x: x) for k, v in d.items()} for d in dicts]

    ```
