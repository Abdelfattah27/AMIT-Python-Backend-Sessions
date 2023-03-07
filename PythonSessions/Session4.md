# Session 4

## OOP

### What's OOP

    OOP stands for Object-Oriented Programming. It's a programming paradigm that uses objects, which are instances of classes, to represent and manipulate data. OOP is based on the concepts of encapsulation, inheritance, and polymorphism.

    Encapsulation means that data and the methods that operate on that data are encapsulated into a single unit, the object. Inheritance allows new objects to be based on existing objects, inheriting their properties and methods. Polymorphism refers to the ability of objects of different classes to be used interchangeably.

    OOP provides a way to organize and structure code, making it easier to develop and maintain complex programs. It's widely used in software development for creating reusable, modular, and scalable code.

### Python and OOP

    Python is a multi-paradigm language, which means it supports multiple programming paradigms including object-oriented programming, functional programming, and procedural programming. So, Python can be used for object-oriented programming, functional programming, or any other programming paradigm you choose.

    However, while Python supports functional programming, it is not a pure functional programming language like Haskell or Lisp. Python supports functional programming concepts like higher-order functions, lambda functions, and recursion, but it also allows mutable data structures and side-effects, which are typically not used in pure functional programming.

### Why OOP With Examples

1. **Modularity**

   - **Definition** OOP allows you to break down complex problems into smaller, more manageable pieces. Each class represents a modular piece of the program, with its own attributes and methods that encapsulate the behavior and functionality of that class. This makes it easier to build, test, and maintain software systems.
   - **Example** : Let's say you're building a program to manage a library. You could create a class called Book that encapsulates the attributes and behavior of a book, such as the title, author, and ISBN number. This class could then be used as a modular building block for other classes in your program, such as a Library class that manages a collection of Book objects.

   ```python
   class Book:
   def __init__(self, title, author, isbn):
       self.title = title
       self.author = author
       self.isbn = isbn

       class Library:
           def __init__(self, books):
               self.books = books

           def add_book(self, book):
               self.books.append(book)

           def remove_book(self, book):
               self.books.remove(book)

   ```

2. Reusability:

   - Definition : Classes can be reused in different parts of the program or in different programs altogether. This can save a lot of time and effort, as you can build on existing classes rather than starting from scratch.
   - Example : Let's say you're building a program to simulate a game of chess. You could create a class called Piece that encapsulates the attributes and behavior of a chess piece, such as its position and movement rules. This class could then be used as a base class for other classes that represent specific types of chess pieces, such as a Pawn class or a Knight class

   ```python
   class Piece:
   def __init__(self, position):
       self.position = position

   def move(self, new_position):
       if self.is_valid_move(new_position):
           self.position = new_position

   def is_valid_move(self, new_position):
       # Check if the move is valid for this piece
       pass

   class Pawn(Piece):
       def __init__(self, position):
           super().__init__(position)

       def is_valid_move(self, new_position):
           # Check if the move is valid for a pawn
           pass

   class Knight(Piece):
       def __init__(self, position):
           super().__init__(position)

       def is_valid_move(self, new_position):
           # Check if the move is valid for a knight
           pass

   ```

3. Encapsulation:

   - Definition : OOP allows you to hide the internal workings of a class from the outside world. This is known as encapsulation, and it can help you to build more secure and robust software systems.
   - Example : Let's say you're building a program to manage a bank account. You could create a class called Account that encapsulates the attributes and behavior of a bank account, such as the account number, balance, and transaction history. This class could then be designed to hide the internal workings of the account from the outside world, so that only authorized users can access and modify the account.

   ```python
   class Account:
   def __init__(self, account_number, balance):
       self.__account_number = account_number
       self.__balance = balance
       self.__transactions = []

   def deposit(self, amount):
       self.__balance += amount
       self.__transactions.append(('deposit', amount))

   def withdraw(self, amount):
       if self.__balance >= amount:
           self.__balance -= amount
           self.__transactions.append(('withdraw', amount))
       else:
           raise ValueError('Insufficient funds')

   def get_balance(self):
       return self.__balance

   def get_transactions(self):
       return self.__transactions

   ```

4. Inheritance:

   - Definition : Inheritance is a powerful feature of OOP that allows you to create new classes that are based on existing classes. This can save a lot of time and effort, as you can reuse the attributes and methods of the base class in the derived class.
   - Example : Let's say you're building a program to manage a zoo. You could create a base class called Animal that encapsulates the attributes and behavior of an animal, such as its name, age, and species. This class could then be used as a base class for other classes that represent specific types of animals, such as a Lion class or a Giraffe class.

   ```python
   class Animal:
   def __init__(self, name, age, species):
       self.name = name
       self.age = age

   ```

5. Polymorphism:

   - Definition : Polymorphism is the ability of objects of different classes to be used interchangeably. This can make code more flexible and adaptable, as you can write code that works with a variety of different objects without knowing their exact type.
   - Example : take that code in consideration and let's dive into it to demonstrate what happen and what's the polymorphism helped us

   ```python
   class Animal:
        def make_sound(self):
            pass

   class Dog(Animal):
       def make_sound(self):
           print("Woof!")

   class Cat(Animal):
        def make_sound(self):
            print("Meow!")

   def animal_sounds(animals):
        for animal in animals:
            animal.make_sound()

    dog = Dog()
    cat = Cat()
    animals = [dog, cat]

    animal_sounds(animals)

   ```

   In this example, we define an Animal base class and two derived classes, Dog and Cat. Each derived class has its own implementation of the make_sound method.

   The animal_sounds function takes a list of animals as input, and iterates over them, calling the make_sound method for each animal. This function doesn't care whether the animal is a dog or a cat, as long as it has a make_sound method.

   We create an instance of Dog and Cat, and store them in a list. We then call animal_sounds with this list, and both Dog and Cat objects are treated as Animal objects, and their make_sound method is called accordingly.

### What is a Class in Python?

**class** is a blueprint for creating objects. It defines a set of attributes and methods that will be common to all instances (objects) of that class. To create a class in Python, you use the class keyword, followed by the name of the class

```python
class MyClass:
    pass
```

#### Ingredient of a class

1. **Attributes** :

   1. Instance attributes: These are specific to each instance of the class, and are defined within the **\_\_init\_\_** method. Instance attributes can be accessed using the self keyword within the class methods.

   ```python
   class Person:
   def __init__(self, name, age):
       self.name = name
       self.age = age

   p1 = Person("John", 25)
   print(p1.name)  # Output: John

   ```

   2. Class attributes: These are shared by all instances of the class, and are defined outside of the **init** method. Class attributes can be accessed using the class name or the instance name.

   ```python
   class Person:
   species = "Homo Sapiens"

   def __init__(self, name, age):
       self.name = name
       self.age = age

   p1 = Person("John", 25)
   print(p1.species)  # Output: Homo Sapiens

   print(Person.species)  # Output: Homo Sapiens

   ```

2. **Methods** : Methods are functions that are defined in a class and operate on objects of that class. They are defined just like normal functions, but with an additional self parameter that refers to the object that the method is being called on.

   1. **Instance methods**: Instance methods are the most common type of methods in Python classes. They are called on instances of the class and have access to the instance's attributes. The first parameter of an instance method is usually self, which refers to the instance on which the method is being called. Instance methods can modify the state of the instance, as well as call other instance methods and class methods.
   2. **Class methods**: Class methods are methods that are bound to the class and not the instance. They are defined using the **@classmethod** decorator and have access to the class's attributes. The first parameter of a class method is usually cls, which refers to the class itself. Class methods can be used to create alternative constructors for the class or to modify the state of the class.
   3. **Static methods**: Static methods are similar to class methods, but they do not have access to either the instance or the class. They are defined using the **@staticmethod** decorator and are used to group related utility functions together within a class. Static methods can be called on either the class or the instance, but they do not have access to either of them.

   - Examples :

   ```python
   class MyClass:
   class_variable = "Hello, World!"

   def __init__(self, instance_variable):
       self.instance_variable = instance_variable

   def instance_method(self):
       print(f"Instance variable: {self.instance_variable}")

   @classmethod
   def class_method(cls):
       print(f"Class variable: {cls.class_variable}")

   @staticmethod
   def static_method():
       print("This is a static method")

   # Create an instance of the class
   my_instance = MyClass("Instance variable")

   # Call the different types of methods
   my_instance.instance_method()    # Output: Instance variable: Instance variable
   MyClass.class_method()           # Output: Class variable: Hello, World!
   MyClass.static_method()          # Output: This is a static method
   my_instance.static_method()      # Output: This is a static method

   ```

### Dive into Python OOP

#### Dunder (double underscore) methods

Dunder methods are special methods in Python that begin and end with double underscores. They provide functionality for Python's built-in classes and allow user-defined classes to mimic the behavior of built-in types. Dunder methods are also referred to as "magic methods" or "special methods".
\_\_init\_\_(self, ...): This method is called when an object is created and initializes its attributes.
\_\_str\_\_(self): This method is called when an object is printed using the print() function. It returns a string representation of the object.
\_\_repr\_\_(self): This method is called when an object is printed in the interpreter. It should return a string that can be used to create a new object with the same state as the original.
\_\_len\_\_(self): This method is called when the built-in len() function is called on an object. It should return the length of the object.
\_\_add\_\_(self, other): This method is called when the + operator is used with two objects. It should return a new object that is the result of the addition.
\_\_eq\_\_(self, other): This method is called when the == operator is used with two objects. It should return True if the objects are equal and False otherwise.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} ({self.age})"

    def __repr__(self):
        return f"Person('{self.name}', {self.age})"

    def __eq__(self, other):
        return self.name == other.name and self.age == other.age

p1 = Person("Alice", 25)
p2 = Person("Bob", 30)

print(p1)  # prints "Alice (25)"
print(p2)  # prints "Bob (30)"
print(repr(p1))  # prints "Person('Alice', 25)"
print(p1 == p2)  # prints "False"


```

#### \_\_init\_\_()

special method in Python that is used to initialize objects created from a class. It is also called the constructor method.

When an object is created from a class, Python calls the **init**() method to initialize the object's attributes. This method takes at least one argument, which is typically named self, and is used to refer to the object being created.

Inside the **init**() method, you can define attributes for the object by assigning values to the self parameter. For example, if you have a Person class with name and age attributes

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person('John', 30)

```

If you want an attribute to be part of your class and be associated with each object created from the class, you should initialize it in the \_\_init\_\_() method.

However you can define a class in Python without the \_\_init\_\_() method. However, if you don't define an \_\_init\_\_() method in your class, Python will automatically create one for you, which doesn't do anything.

```python
    class Person:
        pass
    person = Person()

    person.name = 'John'
    person.age = 30
```

in this example, we've added name and age attributes to the person object using dot notation.

However, it's generally a good idea to define an \_\_init\_\_() method for your class, even if it doesn't do anything, because it ensures that all objects created from the class have a consistent set of attributes.

#### \_\_new\_\_()

The \_\_new\_\_() method is responsible for creating a new object instance and returning it to be initialized by the \_\_init\_\_() method. The \_\_new\_\_() method is called before the \_\_init\_\_() method and is responsible for allocating memory for the object.

The \_\_new\_\_() method takes the class as its first argument, followed by any additional arguments that were passed to the constructor. The \_\_new\_\_() method returns a new instance of the class, which is then passed to the \_\_init\_\_() method to be initialized.
However, you can override the \_\_new\_\_() method in your class to customize the object creation process. For example, you might override \_\_new\_\_() to create objects with a specific size or to perform some other custom initialization.

In most cases, though, you don't need to override \_\_new\_\_() in your classes. Python's default implementation of \_\_new\_\_() is usually sufficient for most use cases.

SingleTon Example :

```python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
```

The cls parameter is often used in class methods to refer to the class that the method is defined in. This can be useful when you want to access class-level attributes or methods, or when you want to create new instances of the class.

cls is just a convention, and you can use any valid variable name instead. However, using cls is recommended as it makes the code more readable and easier to understand.

Example to understand the benefit of cls

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def create_child(cls, parent1, parent2):
        child_age = (parent1.age + parent2.age) // 2
        child_name = parent1.name[:len(parent1.name)//2] + parent2.name[len(parent2.name)//2:]
        return cls(child_name, child_age)

parent1 = Person("Alice", 35)
parent2 = Person("Bob", 40)
child = Person.create_child(parent1, parent2)
print(child.name, child.age)  # Output: Alica40 37

```

In this example, we define a Person class with an \_\_init\_\_() method that initializes the name and age attributes of a Person object. We also define a class method called create_child() that takes two Person objects as arguments and returns a new Person object that is the child of the two parents.

The create_child() method uses the cls parameter to create a new instance of the Person class. This allows us to create a new object of the same class as the class that create_child() is defined in, even if the class is subclassed.

#### what happen when create class

1. When you define a class in Python, the interpreter reads and compiles the code that defines the class. This creates a new class object in memory.

2. When you create an instance of the class (e.g. my_instance = MyClass()), Python calls the class's \_\_new\_\_ method with the class object as its first parameter (cls). The purpose of the \_\_new\_\_ method is to create and return a new instance of the class.

3. The \_\_new\_\_ method creates a new object in memory and returns it. This object is associated with the class.

4. Once \_\_new\_\_ has completed and returned the new instance of the class, Python calls the \_\_init\_\_ method with the new object as its first parameter (self). This allows you to initialize any instance-level attributes (e.g. instance variables) and perform any other setup that needs to happen when a new instance is created.

5. Once the \_\_init\_\_ method has completed, you have a fully initialized instance of the class that you can use

```python
class MyClass:
    def __new__(cls):
        print("__new__ called")
        instance = super().__new__(cls)
        return instance

    def __init__(self):
        print("__init__ called")

my_instance = MyClass()

# Output
# __new__ called
# __init__ called
```

#### Inheritance

Inheritance is one of the fundamental concepts of object-oriented programming (OOP). It allows us to define a new class that is a modified version of an existing class, inheriting all the attributes and methods of the parent class.

In Python, inheritance is achieved by defining a new class that inherits the properties (attributes and methods) of the parent class. The new class is called the child class or subclass, and the parent class is called the base class or superclass.

To create a subclass, we define it like any other class, but we include the name of the superclass in parentheses after the subclass name. This tells Python that the new class is a subclass of the specified superclass.

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Dog(Animal):
    def speak(self):
        return "woof"

class Cat(Animal):
    def speak(self):
        return "meow"
d = Dog("Rufus")
print(d.name)  # Output: Rufus
print(d.speak())  # Output: woof

c = Cat("Mittens")
print(c.name)  # Output: Mittens
print(c.speak())  # Output: meow

```

As we can see, we can access the name attribute of each instance and call the speak method. The implementation of the speak method depends on the subclass, but we can call it in the same way regardless of the subclass.

When a class inherits from a base class in Python, it automatically gains access to all of the attributes and methods of the base class. This means that any object created from the child class will have all of the attributes and methods of both the child and parent classes.

When a child class is created, it can override any attributes or methods of the parent class by redefining them in the child class. This allows for customization and specialization of the child class without changing the behavior of the parent class or any other child classes that inherit from it.

When you create an instance of the child class, the \_\_new\_\_ and \_\_init\_\_ methods of the base class are called first, followed by the \_\_new\_\_ and \_\_init\_\_ methods of the child class.

This is because the child class inherits all the attributes and methods from its base class. When you create an instance of the child class, Python first looks for the attribute or method in the child class. If it doesn't find it, it then looks in the base class. If it still doesn't find it, it continues up the chain of inheritance until it either finds the attribute or method or reaches the top of the chain (which is usually the object class).

#### super()

super() is used to call a method in a parent class from a subclass. It is often used when a method in a subclass overrides a method in the parent class and the subclass wants to call the parent class method in addition to its own functionality.

When a subclass method calls super(), it returns a temporary object of the superclass, which allows the subclass to call the method in the superclass. This is useful when you want to inherit some behavior from the parent class, but also add some additional functionality in the subclass.
In Python, all classes are implicitly subclasses of the object class, even if you do not explicitly specify this in your code. This means that any new class you define automatically inherits all of the attributes and methods of the object class, such as \_\_str\_\_, \_\_repr\_\_, \_\_hash\_\_, etc.

This is why you can use the super() function to call methods in the parent class of your class, even if you don't explicitly specify a parent class. In the absence of an explicit parent class, super() automatically refers to the implicit parent class, which is the object class.

Yes, that's correct. In Python, all classes are implicitly subclasses of the object class, even if you do not explicitly specify this in your code. This means that any new class you define automatically inherits all of the attributes and methods of the object class, such as \_\_str\_\_, \_\_repr\_\_, \_\_hash\_\_, etc.

This is why you can use the super() function to call methods in the parent class of your class, even if you don't explicitly specify a parent class. In the absence of an explicit parent class, super() automatically refers to the implicit parent class, which is the object class.

##### Attributes inherited from object class by default

1. \_\_class\_\_: Returns the class object of the instance.
2. \_\_delattr\_\_(self, name): Deletes an attribute from the instance.
3. \_\_dir\_\_(self): Returns a list of valid attributes for the instance.
4. \_\_doc\_\_: Provides documentation for the class.
5. \_\_eq\_\_(self, other): Returns True if the instance is equal to the other instance.
6. \_\_format\_\_(self, format_spec): Formats the instance as a string.
7. \_\_ge\_\_(self, other): Returns True if the instance is greater than or equal to the other instance.
8. \_\_getattribute\_\_(self, name): Retrieves the value of an attribute from the instance.
9. \_\_gt\_\_(self, other): Returns True if the instance is greater than the other instance.
10. \_\_hash\_\_(self): Returns a hash value for the instance.
11. \_\_init_subclass\_\_: Method called when a class is subclassed.
12. \_\_le\_\_(self, other): Returns True if the instance is less than or equal to the other instance.
13. \_\_lt\_\_(self, other): Returns True if the instance is less than the other instance.
14. \_\_ne\_\_(self, other): Returns True if the instance is not equal to the other instance.
15. \_\_new\_\_(cls, \*args, \*\*kwargs): Creates and returns a new instance of the class.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("John", 30)
print(person)  # Output: <__main__.Person object at 0x000001>


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

point1 = Point(1, 2)
point2 = Point(1, 2)
print(point1 == point2)  # Output: True

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("John", 30)
print(dir(person))
# Output: ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'age', 'name']

```

#### Operator overloading using dunder methods

Operator overloading is a feature in Python that allows the use of operators such as +, -, \*, /, etc., with custom classes or objects. It means that we can define how an operator behaves for a custom class by providing a special method that is invoked when the operator is used with the object.

refers to defining how operators work with user-defined objects. Python provides a way to define and customize operators for classes by using special methods called "magic methods" or "dunder methods".

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, other):
        return Vector(self.x * other, self.y * other)

    def __str__(self):
        return f"({self.x}, {self.y})"

```

we have defined a class Point that represents a point in 2D space. We have overloaded the + and - operators using the special methods add() and sub(), respectively. These methods take two Point objects as input and return a new Point object that represents the sum or difference of the two points.

We have also defined a str() method that returns a string representation of the Point object.

When we run this code, we can see that the + and - operators now work with Point objects just like they work with built-in types such as integers and floats.

#### example demonstrate the OOP consepts

```python
class Animal:
    # Class variable
    classification = "Animal"

    def __init__(self, name, species):
        # Instance variables
        self.name = name
        self.species = species
        self._health = 100  # Encapsulation with protected attribute

    def get_health(self):
        return self._health

    def set_health(self, health):
        if health < 0:
            self._health = 0
        elif health > 100:
            self._health = 100
        else:
            self._health = health

    def eat(self, food):
        self.set_health(self.get_health() + food)

    def sleep(self):
        self.set_health(self.get_health() + 10)

    # Operator overloading
    def __add__(self, other):
        return Animal("Baby " + self.name + "-" + other.name, self.species)

class Cat(Animal):
    # Inheritance
    classification = "Mammal"

    def __init__(self, name, breed):
        super().__init__(name, "Cat")
        self.breed = breed

    def meow(self):
        print("Meow!")

    def scratch(self):
        print("Scratch!")

class Dog(Animal):
    # Inheritance
    classification = "Mammal"

    def __init__(self, name, breed):
        super().__init__(name, "Dog")
        self.breed = breed

    def bark(self):
        print("Woof!")

    def wag_tail(self):
        print("Tail wagging!")

# Polymorphism
def make_sound(animal):
    if isinstance(animal, Cat):
        animal.meow()
    elif isinstance(animal, Dog):
        animal.bark()

# Modularity and Reusability
if __name__ == "__main__":
    fluffy = Cat("Fluffy", "Persian")
    sparky = Dog("Sparky", "Golden Retriever")
    print(fluffy.classification)  # Mammal
    print(sparky.classification)  # Mammal
    make_sound(fluffy)  # Meow!
    make_sound(sparky)  # Woof!
    kitten = fluffy + sparky
    print(kitten.name)  # Baby Fluffy-Sparky
    kitten.sleep()
    print(kitten.get_health())  # 110

```

we have a parent class Animal which has instance variables name and species, and a class variable classification. We use encapsulation by making \_health a protected attribute and providing getter and setter methods. We also define methods eat and sleep which modify the health attribute, demonstrating encapsulation and modularity.

We then define two child classes Cat and Dog which inherit from Animal and add their own unique instance variables and methods. This demonstrates inheritance and modularity.

We also define the make_sound function which takes an Animal object and uses polymorphism to call the appropriate method depending on the object's type.

Finally, we demonstrate operator overloading by defining the \_\_add\_\_ method for Animal which creates a new Animal object with a combination of the two input animals' names.

Overall, this example demonstrates the core OOP concepts of modularity, reusability, encapsulation, inheritance, polymorphism, and operator overloading.
