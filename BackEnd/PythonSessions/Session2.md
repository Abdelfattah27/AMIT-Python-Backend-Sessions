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
