# Python

# Session 1

- Installation [Python](https://www.python.org/downloads/)
  - in the installation we install Python interpreter which interpret from python to a language that the machine know, the standard library , and some tools such as the pip package manager.
- Information about python
  - first released in 1991
  - general-purpose language that is used in a wide variety of fields, including web development, data analysis, artificial intelligence, scientific computing, and many others.
  - Python is so popular is its simplicity and ease of use
  - popular is its vast and active community.
  - It is also cross-platform, meaning that code written on one platform can be easily run on another.
  - the creator of Python, was a big fan of the British comedy group Monty Monty Python's Flying Circus, a popular British sketch comedy show that aired in the 1970s.
  - it provides automatic memory management through a process called garbage collection.
  - python is interpreted language [Snake]
  - developed by [Guido van Rossum](https://en.wikipedia.org/wiki/Guido_van_Rossum)
  - Reserved Words
    - ![ReservedWordsOnPython](ReservedWords.png)
  - can be written Interactive or script

## Variables

Variables are used in Python to store and manipulate data. They are essentially named containers that hold a value. In this tutorial, we will learn how to declare and assign values to variables in Python.

### Declaring Variables

In Python, we do not need to declare variables before using them. We can simply assign a value to a variable, and Python will create the variable for us. Here is an example of how to declare a variable:

```python
x = 5
```

In this example, we are declaring a variable named x and assigning it the value of 5. The equal sign = is used to assign a value to a variable.

We can also declare multiple variables at once by separating them with a comma. Here is an example

```python
x, y, z = 1, 2, 3
```

### Data Types

In Python, variables can hold values of different data types. Some of the commonly used data types are:

Integer (int): a whole number, such as 5 or 100.
Float (float): a decimal number, such as 3.14 or 2.0.
String (str): a sequence of characters, such as "hello" or "world".
Boolean (bool): a value that is either True or False.
List (list): a collection of values, such as [1, 2, 3] or ["apple", "banana", "orange"].
Tuple (tuple): a collection of values, similar to a list, but cannot be modified, such as (1, 2, 3) or ("apple", "banana", "orange").
Dictionary (dict): a collection of key-value pairs, such as {"name": "John", "age": 30}.

In Python, we can check the data type of a variable using the type() function. Here is an example:

```python
x = 5
print(type(x))
```

In this example, we are declaring a variable x and assigning it the value of 5. We are then using the type() function to check the data type of x. The output will be <class 'int'>, which means x is an integer.

### variables name rules snake_case

hamada_age
bad code

```python
  djafkljdkflj = 35.0
  ajkfjdalfjks = 12.5
  kjdaskfjkhfa = djafkljdkflj * ajkfjdalfjks
  print(kjdaskfjkhfa)
```

- code can be read

```python
 a = 35.0
 b = 12.5
 c = a * b
 print(c)
```

- much better code

```python
 hours = 35.0
 rate = 12.5
 pay = hours * rate
 print(pay)
```

### Expressions

- Expressions evaluated from left to right

  ```python
  x = 0.6
  x = x * 25 * (3-x) * 7 / x
  print(x)
  ```

  - Operators on Python
    ![OperatorsOnPython](Operrators.png)
  - precedence rule :
    **Parenthesis > Power > Multiplication > Addition > Left to Right**

    ```python
    x = 1 + 2 ** 3 / 4 * 5
    x =  1 + 8 / 4 * 5
    x =  1 + 2 * 5
    x =  1 + 10
    x = 11
    ```

  - pluse (+) can be work as addition or concatenation
  - functions [type , float , int , str , print , input]
  - Comments [ # ]
  - Comparison Operators [< , > , == , >= , <= , !=]

## if Statement

```python
if condition1:
  # code to be executed if condition1 is true
elif condition2:
  # code to be executed if condition2 is true
else:
  # code to be executed if neither condition1 nor condition2 is true
```

### Logical Operators

**and**: Returns **True** if both operands are **True**. Otherwise, returns **False**.
**or**: Returns **True** if at least one of the operands is **True**. Otherwise, returns False.
**not**: Returns the opposite of the operand. If the operand is **True**, returns **False**. If the operand is **False**, returns **True**.

```python
x = 5
y = 10

if x > 0 and y < 15:
    print("Both conditions are True")

if x > 10 or y < 15:
    print("At least one condition is True")

if not x == y:
    print("x is not equal to y")

```

### Short-Circuit Evaluation

logical operators use short-circuit evaluation. This means that if the first operand of an and expression evaluates to False, the second operand is not evaluated, because the entire expression will always be False. Similarly, if the first operand of an or expression evaluates to True, the second operand is not evaluated, because the entire expression will always be True.

```python
def divide(x, y):
    if y != 0 and x / y > 2:
        return "x is more than twice y"
    else:
        return "y is either zero or x is less than or equal to twice y"

print(divide(10, 3))
print(divide(10, 5))
print(divide(10, 0))
```

## python code life time

Python is an interpreted language, which means that the code is executed by an interpreter at runtime, rather than being compiled into machine code ahead of time. When you run a Python program, the interpreter reads your code line by line, interpreting each statement and executing it immediately.

Python is an interpreted language, which means that the code is executed by an interpreter at runtime, rather than being compiled into machine code ahead of time. When you run a Python program, the interpreter reads your code line by line, interpreting each statement and executing it immediately.

Here's a simplified overview of the process of interpreting Python code:

- Tokenization: The interpreter reads the source code and breaks it down into a sequence of tokens, which are the basic units of the language, such as keywords, identifiers, operators, and literals.
- Parsing: The interpreter uses the tokens to build an abstract syntax tree (AST), which represents the structure of the program according to the rules of the Python grammar. The AST is a hierarchical tree-like structure that describes the relationships between the statements, expressions, and other language constructs in the program.
- Compilation: The interpreter generates bytecode from the AST, which is a lower-level representation of the program that can be executed by the Python virtual machine (PVM). The bytecode is a sequence of instructions that perform the operations specified by the code, such as assigning values to variables, calling functions, and so on.
- Execution: The interpreter runs the bytecode on the PVM, which is a runtime environment that provides the necessary infrastructure to execute the code. The PVM executes the bytecode instruction by instruction, updating the program state as it goes, such as the values of variables and the call stack.

```python
# Example code
x = 10
y = 5
if x > y:
    print("x is greater than y")
else:
    print("y is greater than x")

```

When this code is executed, the interpreter does the following:

1. Tokenizes the code into a sequence of tokens, such as x, =, 10, if, x, >, y, :, print, "x is greater than y", else, :, print, "y is greater than x", and so on.
2. Parses the tokens into an AST, which represents the structure of the code, such as a Module node with a Body node containing a FunctionDef node for the main function, a Assign node for the x = 10 statement, a Assign node for the y = 5 statement, a If node for the if statement, and so on.
3. Compiles the AST into bytecode, which represents the lower-level instructions to execute the code, such as LOAD_CONST for the 10 literal, STORE_NAME for the x variable, LOAD_NAME for the x and y variables, COMPARE_OP for the > operator, POP_JUMP_IF_FALSE for the else branch, LOAD_CONST for the "x is greater than y" string, PRINT_ITEM and PRINT_NEWLINE for the print() function, and so on.
4. Executes the bytecode on the PVM, which updates the program state and produces the output, such as x being assigned to 10, y being assigned to 5, the comparison between x and y being performed, the "x is greater than y" string being printed, and so on.

### obtain the byte code

```python
import marshal

# Open the Python file and read its contents
with open('example.py', 'r') as f:
    source_code = f.read()

# Compile the source code into a code object
code = compile(source_code, 'example.py', 'exec')

# Convert the code object to a binary format
code_bytes = marshal.dumps(code)

# Print the bytecode in hexadecimal format
print(code_bytes.hex())

```

In this example, example.py is the name of the Python file you want to compile. The compile() function takes three arguments: the source code as a string, the filename (which can be any string), and the mode, which can be 'exec', 'eval', or 'single'. The 'exec' mode is used for compiling a module or a program, and is the most common mode.

The compile() function returns a code object that represents the compiled bytecode. To print the bytecode in a readable format, we can use the hex() method to convert the bytecode to hexadecimal format.

[**AST visualization**](https://python-ast-explorer.com/)

## Tasks

1. Create a simple calculator that takes user input and performs basic arithmetic operations such as addition, subtraction, multiplication, and division using the arithmetic operators.
2. Write a program that prompts the user to enter a temperature in Celsius and converts it to Fahrenheit using the appropriate formula.
3. Write a program that prompts the user to enter a number and checks if it is a prime number using a loop and the modulo operator.
4. Write a program that input a number and output the equevelent day of the week to it
5. Write a progamme to get a grade and print the equeelent [excellent , very good , good , accpted , fail ]

# Session 2

## Python Loops

### For Loops

A for loop is used to iterate over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).

```python
for variable in sequence:
    # code to be executed for each item in sequence
```

#### The range() Function

The range() function can be used to generate a sequence of numbers that can be used in a for loop. Here's the basic syntax for the range() function:

```python
for x in range(5):
    print(x)
```

### While Loops

A while loop is used to repeatedly execute a block of code as long as a specified condition is true. Here's the basic syntax for a while loop:

```python
while condition:
    # code to be executed while the condition is true
```

### break statement

```python
i = 0
while i < 5:
    print(i)
    i += 1
    if i == 3:
        break

```

### continue statement

```python
i = 0
while i < 5:
    print(i)
    i += 1
    if i == 3:
        continue
```

## Strings

A string is a sequence of characters in Python. You can create a string by enclosing characters inside single or double quotes. For example:

```python
my_string = "Hello, World!"
# you can use single or double quotes
```

### multiline string

The ''' and """ characters are used to create multi-line string literals in Python. A multi-line string literal can span across multiple lines of code and can contain newline characters, tabs, and other whitespace characters.

For example, you can define a multi-line string literal like this:

```python
my_string = '''
This is a multi-line string.
It can contain multiple lines of text.
Each line can include newline characters,
tabs, and other whitespace.
'''
```

_You can also use double quotes (""") instead of single quotes (''') to create a multi-line string literal._

### Formatted String

You can use formatted string literals (f-strings) to insert values into strings in Python. Formatted string literals are a recent addition to Python, introduced in Python 3.6, and they provide a more concise and readable way to format strings compared to other methods such as the % operator or the str.format() method.

```python
name = 'Alice'
age = 30
profession = 'software engineer'

# Create a formatted string using f-strings
greeting = f"Hello, my name is {name}. I'm {age} years old, and I work as a {profession}."

# Print the formatted string
print(greeting)

```

### Formatted multiline string

```python
name = "John"
age = 30

message = f'''
Hello {name},
You are {age} years old.
'''

print(message)
```

### String Operations

1.  Concatenation
    You can concatenate strings using the + operator. For example:

    ```python
    first_name = 'John'
    last_name = 'Doe'
    full_name = first_name + ' ' + last_name
    ```

2.  Repetition
    You can repeat a string multiple times using the \_ operator. For example:

    ```python
    my_string = 'hello '
    my_string = my_string * 3

    ```

3.  Slicing
    You can slice a string to obtain a specific portion of it. The syntax for slicing is string[start:stop:step], where start is the index of the first character you want to include, stop is the index of the first character you want to exclude, and step is the size of the jump between characters. For example:

    ```python
    my_string = 'hello world'
    substring = my_string[0:5] # substring is set to 'hello'
    ```

4.  Length
    You can find the length of a string using the len() function. For example:

```python
my_string = 'hello world'
length = len(my_string) # length is set to 11
```

### string functions

```python
s = "The quick brown fox jumps over the lazy dog"

# Convert the string to uppercase
s_upper = s.upper()
print(s_upper)  # Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"

# Convert the string to lowercase
s_lower = s.lower()
print(s_lower)  # Output: "the quick brown fox jumps over the lazy dog"

# Replace a substring with another substring
s_replaced = s.replace("fox", "cat")
print(s_replaced)  # Output: "The quick brown cat jumps over the lazy dog"

# Count the occurrences of a substring
s_count = s.count("o")
print(s_count)  # Output: 4

# Check if the string starts with a specific substring
s_starts_with = s.startswith("The")
print(s_starts_with)  # Output: True

# Check if the string ends with a specific substring
s_ends_with = s.endswith("dog")
print(s_ends_with)  # Output: True

# Split the string into a list of substrings
s_split = s.split()
print(s_split)  # Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

# Join a list of substrings into a single string
s_join = "-".join(s_split)
print(s_join)  # Output: "The-quick-brown-fox-jumps-over-the-lazy-dog"

my_string = "Hello World!"
# strip : Removes leading and trailing whitespace from a string.
print(my_string.strip()) # Output: Hello World!

```

## File Handling

File handling is an important part of any programming language, and Python provides several ways to handle files. In this tutorial, we will discuss file handling in Python and how to read, write, and manipulate files.

### Opening a File

```python
file = open('example.txt', 'r')
```

**modes**

- 'r' : is the mode of the opinning the file indecationg READ the file
  there aree several medes
- 'w': write mode, which truncates the file and overwrites any existing data.
- 'a': append mode, which adds new data to the end of the file.
- 'x': exclusive creation mode, which creates a new file and raises an error if the file already exists.
- 'b': binary mode, which reads or writes in binary format.

- 'r+' mode opens a file for both reading and writing. The file pointer is placed at the beginning of the file, and you can both read from and write to the file. If the file doesn't exist, you'll get a FileNotFoundError.
- 'w+' mode opens a file for both writing and reading. If the file already exists, it is truncated to zero length. If the file does not exist, it is created. The file pointer is placed at the beginning of the file. In this mode, you can both read from and write to the file.

#### Reading from a File

**_read the whole file_**

```python
file = open('example.txt', 'r')
data = file.read()
print(data)
file.close()
```

**_read line by line_**

```python
file = open('example.txt', 'r')
for line in file:
    print(line)
file.close()
```

We can also read a specific number of characters using read(n), where n is the number of characters to read.

```python
file = open('example.txt', 'r')
data = file.read(10)
print(data)
file.close()

```

#### Writing to a File

```python
file = open('example.txt', 'w')
file.write('Hello, world!')
file.close()
```

**_or_**

```python
file = open('example.txt', 'w')
lines = ['First line\n', 'Second line\n', 'Third line\n']
file.writelines(lines)
file.close()
```

**_append to file_**

```python
file = open('example.txt', 'a')
file.write('Fourth line\n')
file.close()
```

#### Closing a File

It is important to always close a file when we are done with it using the close() method
**_why ? _**

- Resource leakage: An open file uses up system resources such as memory and file handles. If a file is not closed, those resources may not be released until the program ends or the file is closed manually. This can lead to a memory leak or other resource problems.

- Data corruption: If data is written to an unclosed file, the file may not be properly flushed, and the data may not be completely written to disk. This can result in data corruption, where the file is unreadable or contains invalid data.

- Locking: An open file may be locked by the operating system or other programs, preventing other programs from accessing it. If a file is not closed, it may remain locked even if the program that opened it has ended, preventing other programs from using it.

- Security issues: Leaving a file open may expose sensitive data or allow unauthorized access to the file. If the program that opened the file is compromised, an attacker may be able to access or modify the file.

#### using With keyword

close file automatically

```python
with open('example.txt', 'r') as file:
    data = file.read()
    print(data)
```

**what's the output of this code if the data.txt have "hello word"**

```python
file = open("dat.txt" , 'r+' , encoding="UTF-8")
print(file.read())
file.write("hello world")
print(file.read())
```

## Tasks

1. Write a program that prompts the user to enter a string and counts the number of characters in the string using the len() function.
2. Write a program that prompts the user to enter a number and determines whether it is even or odd using the modulo operator (%).
3. Write a program that uses a for loop to iterate over a list of numbers and prints the sum of the numbers.
4. Write a program that uses a while loop to repeatedly prompt the user to enter a password until they enter the correct password.
5. Write a program that reads a file and counts the number of lines, words, and characters in the file.
6. Write a program that uses a function to calculate the area and perimeter of a rectangle based on user input for the length and width.
7. Write a program that prompts the user to enter a sentence and then reverses the order of the words in the sentence.
8. Create a Python program that reads the contents of a text file and prints them to the console.
9. Write a Python program that creates a new file, writes some text to it, and then reads the text back from the file and prints it to the console.
10. Modify the previous program to append new text to the end of the file instead of overwriting the existing text.

# Session 3

## Functions

A function is a block of code that performs a specific task. It can take input(s), perform operations on those inputs, and return output(s).

In Python, you define a function using the **def** keyword followed by the **function name**, **input parameters** (if any), and a **colon**. The body of the function is indented and contains the code that performs the task. Here's an example of a simple function that takes two arguments and returns their sum:

```python
def add_numbers(a, b):
    sum = a + b
    return sum
```

To call this function, you simply pass in two arguments:

```python
result = add_numbers(3, 5)
print(result)   # Output: 8
```

Functions can also have optional parameters with default values. For example, we can modify the add_numbers() function to take a third optional parameter that defaults to 0:

```python
def add_numbers(a, b, c=0):
    sum = a + b + c
    return sum
```

if we call the function with two arguments, it will use the default value for c

```python
result = add_numbers(3, 5)
print(result)   # Output: 8

result2 = add_numbers(3, 5, 2)
print(result2)   # Output: 10

```

Functions can also return multiple values by separating them with commas.

```python
def add_numbers(a, b):
    sum = a + b
    product = a * b
    return sum, product

result = add_numbers(3, 5)
print(result)   # Output: (8, 15)

# Or

sum, product = add_numbers(3, 5)
print(sum)      # Output: 8
print(product)  # Output: 15

```

functions can be nested inside other functions,

```python
def calculate_total_price(price, tax_rate):
    def calculate_tax(price, tax_rate):
        return price * tax_rate

    tax = calculate_tax(price, tax_rate)
    total_price = price + tax
    return total_price

```

In this example, we have a calculate_tax() function nested inside the calculate_total_price() function. The calculate_tax() function takes the price and tax rate as inputs and returns the tax amount. The calculate_total_price() function then calls calculate_tax() to get the tax amount and adds it to the original price to get the total price, which is returned.

you can add docstring to a function
A docstring is a string literal that appears as the first statement in a function definition. It is used to document what the function does, what parameters it expects, and what it returns.

```python
def add_numbers(a, b):
    """
    Returns the sum of two numbers.

    Args:
        a (int): The first number.
        b (int): The second number.

    Returns:
        int: The sum of `a` and `b`.
    """
    sum = a + b
    return sum
print(add_numbers.__doc__)

# Output :
    # Returns the sum of two numbers.

    # Args:
    #     a (int): The first number.
    #     b (int): The second number.

    # Returns:
    #     int: The sum of `a` and `b`.

```

### internal overview

When you define a function in Python, the function name becomes a reference to the function object in memory. This means that you can assign the function to a variable, pass it as an argument to another function, or return it from a function.

The function object itself contains several attributes, including:

    - **__name__**: The name of the function.
    - **__doc__**: The docstring (if any) that describes the function.
    - **__defaults__**: A tuple containing the default values for any optional parameters.
    - **__code__**: The compiled bytecode for the function.
    - **__globals__**: A dictionary containing the global namespace for the function.

When you call a function in Python, the interpreter creates a new local namespace for the function. This namespace contains all the variables and objects that are defined within the function, as well as any parameters that were passed to the function.

When the function finishes executing, the local namespace is destroyed, and any values that were created within the function are lost (unless they were returned by the function or stored in a global variable).

For example

```python
def add_numbers(a, b):
    sum = a + b
    return sum

```

When you call this function with the values 3 and 5, the interpreter creates a new local namespace for the function and assigns the values 3 and 5 to the variables a and b, respectively. It then creates a new variable sum and assigns it the value 8.

The return statement tells the interpreter to return the value of sum to the caller, and the local namespace is destroyed.

## List , Dictionary Comprehensions

### List

Lists are a fundamental data structure in Python that are used to store a collection of values. In this tutorial, we'll cover the basics of lists in Python, including how to create and manipulate them

#### Creating Lists

```python
my_list = [1, 2, 3, 4, 5]
nested_list = [[1, 2], [3, 4], [5, 6]]

```

#### Accessing List Elements

```python
my_list = [1, 2, 3, 4, 5]
print(my_list[0])  # prints 1
print(my_list[2])  # prints 3

# Negative indexing

print(my_list[-1])  # prints 5
print(my_list[-3])  # prints 3

```

#### Slicing Lists

```python
my_list = [1, 2, 3, 4, 5]
print(my_list[1:3])  # prints [2, 3]
print(my_list[:3])   # prints [1, 2, 3]
print(my_list[3:])   # prints [4, 5]
```

#### Modifying Lists

```python
my_list = [1, 2, 3, 4, 5]
my_list[2] = 7       # replaces 3 with 7
my_list[1:4] = [8, 9, 10]  # replaces [2, 3, 4] with [8, 9, 10]

```

#### List functions Example

```python
# Creating a list
fruits = ['apple', 'banana', 'cherry']

# append() - Adds an element to the end of the list
fruits.append('orange')
print(fruits) # ['apple', 'banana', 'cherry', 'orange']

# insert() - Adds an element at the specified position in the list
fruits.insert(1, 'grape')
print(fruits) # ['apple', 'grape', 'banana', 'cherry', 'orange']

# remove() - Removes the first occurrence of the specified element from the list
fruits.remove('banana')
print(fruits) # ['apple', 'grape', 'cherry', 'orange']

# pop() - Removes the element at the specified position or the last element if index is not specified, and returns it
popped = fruits.pop(1)
print(popped) # 'grape'
print(fruits) # ['apple', 'cherry', 'orange']

# clear() - Removes all elements from the list
fruits.clear()
print(fruits) # []

# extend() - Adds all elements of a list (or any iterable) to the end of the list
fruits.extend(['kiwi', 'mango'])
print(fruits) # ['kiwi', 'mango']

# index() - Returns the index of the first occurrence of the specified element in the list
index = fruits.index('kiwi')
print(index) # 0

# count() - Returns the number of times the specified element appears in the list
count = fruits.count('mango')
print(count) # 1

# sort() - Sorts the elements of the list in ascending order
fruits.sort()
print(fruits) # ['kiwi', 'mango']

# reverse() - Reverses the order of the elements in the list
fruits.reverse()
print(fruits) # ['mango', 'kiwi']

# copy() - Returns a copy of the list
fruits_copy = fruits.copy()
print(fruits_copy) # ['mango', 'kiwi']
```

#### comprehension

List comprehension is a concise and elegant way to create new lists from an existing list or other iterable. It can be used to perform various operations like filtering, mapping, and sorting on lists.

```python
new_list = [expression for item in iterable if condition]

```

- **new_list**: the new list to be created.
- **expression**: the operation to be performed on each item in the iterable.
- **item**: the variable that represents each item in the iterable.
- **iterable**: the original list or other iterable.
- **condition**: (optional) the condition that must be satisfied for an item to be included in the new list.

**_examples about list comprehension_**

```python
# Example 1: Squaring each element in a list
numbers = [1, 2, 3, 4, 5]
squares = [num**2 for num in numbers]
print(squares) # Output: [1, 4, 9, 16, 25]

# Example 2: Filtering odd numbers from a list
numbers = [1, 2, 3, 4, 5]
odds = [num for num in numbers if num % 2 == 1]
print(odds) # Output: [1, 3, 5]

# Example 3: Mapping a list of words to their lengths
words = ['cat', 'dog', 'elephant', 'rhinoceros']
lengths = [len(word) for word in words]
print(lengths) # Output: [3, 3, 8, 10]

# Example 4: Creating a list of tuples from two lists
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]
people = [(name, age) for name, age in zip(names, ages)]
print(people) # Output: [('Alice', 25), ('Bob', 30), ('Charlie', 35)]

# Example 5: Flattening a list of lists
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat_matrix = [num for row in matrix for num in row]
print(flat_matrix) # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### dictionary

A dictionary is a collection of key-value pairs, where each key is associated with a value. In Python, dictionaries are created using curly braces {} or the dict() constructor.

```python
# Creating a dictionary
my_dict = {'apple': 1, 'banana': 2, 'orange': 3}

# Accessing values in a dictionary
print(my_dict['apple']) # Output: 1
print(my_dict.get('banana')) # Output: 2

# Adding or modifying key-value pairs in a dictionary
my_dict['pear'] = 4
my_dict['banana'] = 5
print(my_dict) # Output: {'apple': 1, 'banana': 5, 'orange': 3, 'pear': 4}

# Removing key-value pairs from a dictionary
del my_dict['orange']
print(my_dict) # Output: {'apple': 1, 'banana': 5, 'pear': 4}

# Iterating over a dictionary

for key, value in my_dict.items():
    print(key, value)

for key in my_dict.keys():
    print(key, my_dict[key])

for key in my_dict:
    print(key, my_dict[key])

for value in my_dict.values():
    print(value)


# Create a new list of keys using a list comprehension
keys = [key for key in my_dict]
print(keys) # Output: ['apple', 'banana', 'orange']

# Create a new list of values using a list comprehension
values = [my_dict[key] for key in my_dict]
print(values) # Output: [1, 2, 3]

```

#### string to dictionary

##### json.loads

This function is used to parse a JSON-formatted string and convert it into a Python object (usually a dictionary or list). The input to this function is a string, and the output is a Python object.

```python
import json

json_str = '{"name": "John", "age": 30, "city": "New York"}'
my_dict = json.loads(json_str)

print(my_dict) # {'name': 'John', 'age': 30, 'city': 'New York'}

```

##### json.load

This function is used to read JSON data from a file and convert it into a Python object. The input to this function is a file object (opened using open()), and the output is a Python object.

```python
import json

# Open JSON file
with open('data.json', 'r') as f:
    # Parse JSON file into dictionary
    data = json.load(f)

# Print dictionary
print(data)

```

##### json.dump

```python
import json

# Dictionary
data = {'name': 'John', 'age': 30, 'city': 'New York'}

# Write dictionary to JSON file
with open('data.json', 'w') as f:
    json.dump(data, f)

```

### args and kwargs

**args** and **kwargs** are used as special parameters in function definitions. They are used to pass a variable number of arguments to a function.

1. args

   ```python
   def sum_numbers(*args):
   result = 0
   for arg in args:
       result += arg
   return result

   # print(sum_numbers(1, 2, 3, 4, 5)) # Output: 15
   # print(sum_numbers(10, 20, 30)) # Output: 60
   ```

2. kwargs

   ```python
    def print_person_info(**kwargs):
      print(kwargs)

    print_person_info(name='John', age=30, city='New York')
    # Output: {'name': 'John', 'age': 30, 'city': 'New York'}

   ```

```python
def print_info(*args, **kwargs):
    print(args)
    print(kwargs)

print_info(1, 2, 3, name='John', age=30)
# Output: (1, 2, 3)
#         {'name': 'John', 'age': 30}
```

### Examples of functions deal with dictionaries

1. filter a dictionary by value.
   ````python
   def filter_dict_by_value(d, v):
       filtered_dict = {k: d[k] for k in d if d[k] == v}
       return filtered_dict
       ```
   ````
2. Filter a List by Predicate

   ```python
   def filter_list_by_predicate(lst, predicate):
   filtered_list = [elem for elem in lst if predicate(elem)]
   return filtered_list

   ```

## variables scope

In Python, there are four levels of scope:

**Local scope**: Variables defined within a function

    ```python
    def my_function():
        x = 10
        print(x)

    my_function() # Output: 10

    ```

    the variable x is defined within the function my_function(). It has local scope and can only be accessed within the function.

**Enclosing scope**: Variables defined in the outer function of a nested function

    ```python
    def outer_function():
        x = 10
        def inner_function():
            print(x)
        inner_function()

    outer_function() # Output: 10
    ```

    the variable x is defined in the outer function outer_function(). The inner function inner_function() has access to the variables in the enclosing scope, so it can access the value of x.

**Global scope** : Variables defined at the module level

    ```python
    x = 10

    def my_function():
        print(x)

    my_function() # Output: 10

    ```

    the variable x is defined at the module level, outside of any function. It has global scope and can be accessed by any function within the module.

**Built-in scope**: Variables defined in Python's built-in modules

    ```python
        print("Hello, world!") # Output: Hello, world!
    ```

    the print() function is defined in Python's built-in scope. It can be accessed from anywhere in the program without having to import any modules.

## Decorators and generators

### Decorators

Decorators are a way to modify or enhance the behavior of a function without changing its source code. In Python, a decorator is a function that takes another function as input, adds some functionality to it, and then returns the original function.

```python
def my_decorator(func):
    def wrapper():
        print("Before the function is called.")
        func()
        print("After the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

**Another Example**

```python
def get_two_integers(func):
    def wrapper():
        a = int(input("Enter first integer: "))
        b = int(input("Enter second integer: "))
        result = func(a, b)
        print("Result:", result)
    return wrapper

@get_two_integers
def add(a, b):
    return a + b

add()
```

In this example, we define a decorator called get_two_integers that takes a function as its argument, prompts the user to input two integers, and then calls the function with those integers as arguments. The result of the function call is stored in a variable called result, and then printed to the console.

We then define a function called add that takes two integers and returns their sum. The @get_two_integers syntax applies the get_two_integers decorator to the add function, so that when add is called, the decorator is executed first, prompting the user for input and passing the input values to add. Finally, the decorated function is called, and the result is printed to the console.

### Generators

Generators are a way to create iterators in Python. An iterator is an object that can be iterated (looped) upon, like lists, tuples, and dictionaries. A generator is a special kind of iterator that generates values on the fly as you loop over it. This means that you don't have to store all of the values in memory before you start iterating over them.

```python
def fibonacci(n):
    a, b = 0, 1
    for i in range(n):
        yield a
        a, b = b, a + b

for x in fibonacci(10):
    print(x)

```

```python
def range_generator(start, stop, step):
    current = start
    while current < stop:
        yield current
        current += step
```

### Using Decorators and Generators Together

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before the generator is called.")
        for value in func(*args, **kwargs):
            yield value
        print("After the generator is called.")
    return wrapper

@my_decorator
def fibonacci(n):
    a, b = 0, 1
    for i in range(n):
        yield a
        a, b = b, a + b

for x in fibonacci(10):
    print(x)

```

## modules and packages

In Python, a project's structure generally consists of modules and packages that work together to provide functionality and organize code.

A module is a single file that contains Python code. A package is a collection of modules that are organized in a directory hierarchy. Each package must contain a special file called **init**.py that is executed when the package is imported.

To create a Python project with multiple modules and packages, you would typically organize your code into a directory hierarchy, with each module or package in its own file or directory. For example, you might create a directory structure like this:

```css
my_project/
    main.py
    my_package/
        __init__.py
        module1.py
        module2.py
```

In this example, the my_project directory contains a main.py file that serves as the entry point for the project. The my_package directory is a package that contains two modules, module1.py and module2.py.

To use a module or package in your code, you simply import it using the import statement. For example, to use module1 from my_package, you would write:

```python
from my_package import module1

module1.do_something()

```

To use a package, you would import the package itself, like this:

```python
import my_package

my_package.module1.do_something()

```

When you run your Python program, the interpreter will automatically compile the modules and packages that are imported, and link them together to create a complete program.

When you import a module in Python, the interpreter looks for the module in the **sys.path** list of directories. If the module is found, it is loaded and executed. If the module depends on external libraries or modules, the interpreter will search for them in the same directories as the module, as well as in the directories specified in the LD_LIBRARY_PATH environment variable (on Unix-like systems) or PATH environment variable (on Windows).

When the interpreter finds an external library or module, it loads it into memory and links it dynamically at runtime. This means that the external library or module is not included in the Python executable itself, but is loaded and linked at runtime.

This approach has several advantages, such as smaller executable sizes, faster startup times, and the ability to dynamically load and unload libraries and modules at runtime. However, it also means that your Python code may depend on external libraries or modules that need to be installed separately, either using the operating system's package manager or a tool like

package is a folder with file called \***\*init\*\***.py
The **init**.py file can be used to define attributes and functions that are shared across all modules in the package, and to perform any necessary initialization or configuration when the package is imported.

For example, you might define a package-level variable or function in **init**.py that is used by multiple modules in the package:

```python
# my_package/__init__.py

# Define a package-level variable
MY_CONSTANT = 42

# Define a package-level function
def my_function():
    print("Hello from my_package!")

```

You can then use the package-level variable or function in any module in the package:

```python
# my_package/my_module.py

from my_package import MY_CONSTANT, my_function

print(MY_CONSTANT)  # prints 42

my_function()  # prints "Hello from my_package!"

```

The **init**.py file can also be used to control what symbols are exported from the package when it is imported using the from my_package import \* syntax. By defining a variable named **all** in **init**.py, you can specify which symbols should be exported from the package:

```python
# my_package/__init__.py

# Define a list of symbols to export
__all__ = ["MY_CONSTANT", "my_function"]

```

Module is a just a python file

### pycache

**pycache** is a directory that is created by Python to store compiled bytecode files. When a Python module is imported or executed, the interpreter first checks whether there is a corresponding bytecode file in the **pycache** directory, and if so, it loads the bytecode file instead of recompiling the source code.

The bytecode files have a .pyc or .pyo file extension, depending on whether optimizations are enabled or not. The bytecode files are specific to the version of Python that was used to compile them, so if you switch to a different version of Python, you may need to delete the **pycache** directory and recompile the bytecode files.
