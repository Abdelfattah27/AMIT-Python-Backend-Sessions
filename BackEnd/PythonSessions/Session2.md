# Session 2

## List

Lists are a fundamental data structure in Python that are used to store a collection of values. In this tutorial, we'll cover the basics of lists in Python, including how to create and manipulate them

### Creating Lists

```python
my_list = [1, 2, 3, 4, 5]
nested_list = [[1, 2], [3, 4], [5, 6]]

```

### Accessing List Elements

```python
my_list = [1, 2, 3, 4, 5]
print(my_list[0])  # prints 1
print(my_list[2])  # prints 3

# Negative indexing

print(my_list[-1])  # prints 5
print(my_list[-3])  # prints 3

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

# capitalize
string = "hello world"
capitalized_string = string.capitalize()
print(capitalized_string)  # "Hello world"

# casefold
string = "HELLO World"
casefolded_string = string.casefold()
print(casefolded_string)  # "hello world"

# center
string = "Python"
centered_string = string.center(10, '*')
print(centered_string)  # "**Python**"

# count
string = "programming is fun, programming is cool"
count_occurrences = string.count("programming")
print(count_occurrences)  # 2


# endswith
string = "Hello, World!"
ends_with_result = string.endswith("World!")
print(ends_with_result)  # True


# find
string = "Hello, World!"
index = string.find("World")
print(index)  # 7

# format
name = "John"
age = 25
formatted_string = "My name is {}, and I am {} years old.".format(name, age)
print(formatted_string)  # "My name is John, and I am 25 years old."


# index
string = "Hello, World!"
index = string.index("World")
print(index)  # 7

# isalnum
alphanumeric_string = "abc123"
is_alnum = alphanumeric_string.isalnum()
print(is_alnum)  # True

# isalpha
alpha_string = "abc"
is_alpha = alpha_string.isalpha()
print(is_alpha)  # True

# isdecimal
decimal_string = "123455"
is_decimal = decimal_string.isdecimal()
print("is dicimal : " , is_decimal)  # True

# isdigit
digit_string = "123"
is_digit = digit_string.isdigit()
print(is_digit)  # True


# islower
lower_string = "hello"
is_lower = lower_string.islower()
print(is_lower)  # True

# isnumeric
numeric_string = "123"
is_numeric = numeric_string.isnumeric()
print(is_numeric)  # True


# isspace
space_string = "   "
is_space = space_string.isspace()
print(is_space)  # True

# istitle
title_string = "Hello World"
is_title = title_string.istitle()
print(is_title)  # True

# isupper
upper_string = "HELLO"
is_upper = upper_string.isupper()
print(is_upper)  # True

# join
words = ["Hello", "World", "!"]
joined_string = " ".join(words)
print(joined_string)  # "Hello World !"

# ljust
string = "Hello"
left_justified_string = string.ljust(10, '-')
print(left_justified_string)  # "Hello-----"

# lower
string = "Hello World"
lowered_string = string.lower()
print(lowered_string)  # "hello world"

# lstrip
string = "   Hello World   "
stripped_string = string.lstrip()
print(stripped_string)  # "Hello World   "


# partition
string = "Hello, World!"
partitioned_result = string.partition(", ")
print(partitioned_result)  # ('Hello', ', ', 'World!')

# removeprefix
string = "Hello, World!"
without_prefix = string.removeprefix("Hello, ")
print(without_prefix)  # "World!"

# removesuffix
string = "Hello, World!"
without_suffix = string.removesuffix(" World!")
print(without_suffix)  # "Hello, "

# replace
string = "Hello, World!"
replaced_string = string.replace("World", "Universe")
print(replaced_string)  # "Hello, Universe!"

# rfind
string = "Hello, World!"
index = string.rfind("o")
print(index)  # 8

# rindex
string = "Hello, World!"
index = string.rindex("o")
print(index)  # 8

# rjust
string = "Hello"
right_justified_string = string.rjust(10, '-')
print(right_justified_string)  # "-----Hello"


# rstrip
string = "   Hello World   "
stripped_string = string.rstrip()
print(stripped_string)  # "   Hello World"

# startswith
string = "Hello, World!"
starts_with_result = string.startswith("Hello")
print(starts_with_result)  # True

# strip
string = "   Hello World   "
stripped_string = string.strip()
print(stripped_string)  # "Hello World"

# swapcase
string = "Hello, World!"
swapped_case_string = string.swapcase()
print(swapped_case_string)  # "hELLO, wORLD!"

# title
string = "hello world"
title_case_string = string.title()
print(title_case_string)  # "Hello World"


# upper
string = "hello world"
upper_case_string = string.upper()
print(upper_case_string)  # "HELLO WORLD"

```



### List

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



## Python Loops

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
