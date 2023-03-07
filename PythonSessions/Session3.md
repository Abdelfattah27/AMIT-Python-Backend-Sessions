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

## Tasks

1. Create a Python function that takes a list of numbers as input and returns a new list containing only the even numbers. Use list comprehension to implement the function.

2. Write a Python program that reads a CSV file and creates a dictionary from the data, where the keys are the first column values and the values are lists containing the remaining columns.

3. Implement a Python function that takes a dictionary as input and returns a new dictionary with the same keys and values, but with all the values converted to uppercase. Use a dictionary comprehension to implement the function.

4. Write a Python program that defines a decorator to measure the execution time of a function. The decorator should print the execution time in seconds after the function completes.

5. Create a Python generator that yields the Fibonacci sequence up to a given limit. Test the generator by printing the first 20 Fibonacci numbers.

6. Write a Python program that reads a text file and counts the occurrences of each word in the file. Use a dictionary to store the word counts and a generator to read the file.

7. Create a Python module that defines a function to calculate the factorial of a given number. Import the module and use the function to calculate the factorial of 10.

8. Write a Python script that creates a package containing a module that defines a function to calculate the area of a circle, and a test module that tests the function. Use relative imports to import the function in the test module.

9. Create a Python program that reads a JSON file containing a list of dictionaries representing employees, and prints the name and salary of each employee sorted by salary in descending order.

10. Write a Python function that takes a list of dictionaries as input, and returns a new list of dictionaries with the same keys, but with the values sorted in ascending order. Use a lambda function as the key function for sorting the values.
