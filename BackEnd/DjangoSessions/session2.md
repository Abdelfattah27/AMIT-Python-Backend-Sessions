# intro to views

## what meant by django is MTV

Model: The "M" in "MTV" stands for "Model", which is responsible for handling the data and the database schema. It represents the information that is being stored and manipulated by the application and includes fields, relationships, and behaviors. In Django, Models are defined using Python classes and subclasses of the built-in django.db.models.Model class.

Template: The "T" in "MTV" stands for "Template", which is responsible for rendering the user interface or presentation layer of the application. It defines the structure and layout of the pages and determines how the data is displayed to the user. In Django, Templates are typically written in HTML and may include template tags and filters for dynamic content.

View: The "V" in "MTV" stands for "View", which is responsible for handling user requests and business logic. Views are the bridge between the Models and the Templates and define what data to retrieve from the database, how to process it, and what Template to render. In Django, Views are typically defined as Python functions or classes that receive an HTTP request and return an HTTP response.

## deference between MTV and MVC

Both MTV (Model-Template-View) and MVC (Model-View-Controller) are architectural patterns used in web development to separate concerns and organize code. The main difference between them is the way they handle the presentation layer.

In MVC, the Controller is responsible for handling user input, managing the flow of the application, and determining which View to display. The Model represents the data and the database schema, while the View is responsible for rendering the user interface. The Controller acts as the mediator between the Model and the View, handling user input and updating the Model and the View accordingly.

In MTV, the View is responsible for handling user input, managing the flow of the application, and determining which Template to display. The Model represents the data and the database schema, while the Template is responsible for rendering the user interface. The View acts as the mediator between the Model and the Template, handling user input and updating the Model and the Template accordingly.

So, the main difference between MVC and MTV is the way they handle the presentation layer. In MVC, the Controller is responsible for handling user input and updating both the Model and the View, while in MTV, the View is responsible for handling user input and updating both the Model and the Template

## django commends

In Django, "commands" refer to the management commands that allow developers to perform various administrative and maintenance tasks from the command line interface. These commands are defined in Python scripts and can be invoked using the python manage.py command.

Some common Django commands are:

- runserver: Starts the development web server.
- makemigrations: Creates new database migration files based on changes to the Models.
- migrate: Applies database migrations to the database.
- createsuperuser: Creates a new superuser account for the Django admin site.
- shell: Opens an interactive Python shell with Django loaded.
- test: Runs the test suite for the project.
- startapp: Creates a new Django app with the specified name.
- collectstatic: Collects static files from each of the apps into a single location.

## let's make our first view

### say hello view

this view simply returns a greeting message to the client, using the name parameter from the URL query string if it was provided

```python
# views.py

from django.http import HttpResponse

def hello(request):
    name = request.GET.get('name', 'World')
    return HttpResponse(f'Hello, {name}!')

# urls.py

from django.urls import path
from .views import hello

urlpatterns = [
    path('hello/', hello, name='hello'),
]
```

**from django.http import HttpResponse**: This line imports the HttpResponse class from the django.http module, which is used to create an HTTP response object that the view can return.

**def hello(request):**: This defines a function-based view called hello that takes a single parameter, request. The request parameter is an object that represents the current HTTP request.

**name = request.GET.get('name', 'World')**: This line retrieves the value of the name parameter from the URL query string using the GET method. If the name parameter is not present in the query string, the default value of 'World' is used instead.

**return HttpResponse(f'Hello, {name}!')**: This line creates an HttpResponse object that contains the string 'Hello, World!' (or 'Hello, {name}!' if the name parameter was provided in the URL query string). This response is returned from the view and sent back to the client as the HTTP response.
from django.urls import path: This line imports the path function from the django.urls module, which is used to define URL patterns.

**from .views import hello**: This line imports the hello view function from the views.py file in the current directory (assuming that the views.py file contains the hello view we defined earlier).

**urlpatterns**: This is a list of URL patterns that maps URLs to views.

**path('hello/', hello, name='hello')**: This line defines a URL pattern that matches the string 'hello/' at the end of the URL. When this URL is requested, the hello view function is called. The name argument is used to give the URL pattern a name that can be used to refer to it in templates and other parts of the Django app.

## ORM

ORM stands for Object-Relational Mapping, which is a technique used to map data from a relational database to objects in an object-oriented programming language. Essentially, it provides a way for developers to interact with a database using the language constructs of their programming language, rather than having to write SQL queries directly.

The main advantage of using an ORM is that it can make database interactions much easier and more intuitive for developers, by allowing them to work with objects and methods rather than raw SQL queries. This can lead to faster development times, easier maintenance, and fewer errors.

ORMs also provide a level of abstraction between the application code and the database, which can help with portability and scalability. Because the ORM handles the translation between the database schema and the application's object model, changes to the database schema can be made without requiring changes to the application code. This can make it easier to scale the application by adding additional database servers or changing the underlying database technology.

## django models

In Django, a model is a Python class that defines the structure of a database table. Each attribute of the class represents a column in the table, and the class itself represents the table as a whole. Django's built-in ORM (Object-Relational Mapping) maps the model's attributes to fields in the database table, and provides a way to interact with the database using Python code, rather than SQL.

The ORM is a programming technique that allows you to access a database using an object-oriented API, rather than writing raw SQL queries. It essentially maps the objects and relationships in your code to tables and relationships in your database, allowing you to work with the database in a more Pythonic way. The ORM provides a high-level, abstract interface to the database that makes it easier to perform common database operations, such as creating, updating, and querying data.

Django uses its own ORM, which is included as part of the Django framework. This ORM provides a simple and easy-to-use way to interact with the database using Python code, and it supports a wide range of database backends, including PostgreSQL, MySQL, SQLite, and Oracle. The ORM includes a wide range of built-in field types, including integers, strings, dates, times, and more, as well as support for related objects and many-to-many relationships.

Using the ORM in Django is simple: you define your models as Python classes, and Django automatically generates the necessary database tables and SQL queries for you. You can then use the model's API to perform CRUD (Create, Read, Update, Delete) operations on the database, as well as run more complex queries using Django's QuerySet API.

One of the key benefits of using an ORM like Django's is that it helps to reduce the amount of boilerplate code you need to write when working with databases, and makes it easier to work with databases in a Pythonic way. It also helps to prevent common security issues, such as SQL injection attacks, by automatically escaping input values and generating parameterized SQL queries. Finally, it allows developers to focus on the business logic of their application, rather than the low-level details of database access.

## lets dive into django models

To create a model in Django, you would typically define a Python class that inherits from the django.db.models.Model base class, and then define attributes on that class to represent the fields in the corresponding database table. Here's an example model that defines a simple blog post:

```python
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
```

In this example, the Post class inherits from models.Model, which means it is a Django model. The class defines three attributes: title, content, and pub_date. These attributes represent the fields in the corresponding database table for this model.

Each attribute is defined using a Django field class, such as CharField or DateTimeField. These field classes tell Django what type of data should be stored in the field, and provide various options for customizing how the field works. For example, in this case the title field is defined using the CharField class with a max_length option of 200, which means it will store a string of up to 200 characters.

When you create a new instance of the Post model in your Python code, Django automatically creates a new row in the corresponding database table, and populates the fields with the values you provide. For example:

```python
new_post = Post(title='My First Post', content='Hello, world!')
new_post.save()
```

Behind the scenes, Django is generating SQL code to create the corresponding database table for the model (if it doesn't already exist), and to insert the new row into the table with the values you provided. The SQL code is specific to the database backend you are using (e.g. MySQL, PostgreSQL, SQLite), but Django's ORM abstracts away these differences, so you don't need to worry about the specific SQL syntax.

### models datatypes

Django provides a wide range of built-in field types that you can use to define the various types of data you want to store in your models. Here are some of the most commonly used field types:

- CharField: Used to store short to medium length strings.
- TextField: Used to store longer strings of text.
- BooleanField: Used to store boolean (True/False) values.
- IntegerField: Used to store integers.
- FloatField: Used to store floating-point numbers.
- DecimalField: Used to store decimal numbers with a fixed number of digits.
- DateField: Used to store dates.
- TimeField: Used to store times.
- DateTimeField: Used to store dates and times.
- FileField: Used to store files uploaded by users.
- ImageField: Used to store image files uploaded by users.

Each field type has its own set of options that you can use to customize its behavior, such as the maximum length of a string field, or the number of decimal places in a decimal field.

By using these field types to define the structure of your models, you can take advantage of Django's object-relational mapper (ORM) to interact with your database using Python code. The ORM handles the details of converting between Python objects and database rows, and provides a high-level, Pythonic API for querying and manipulating your data. This allows you to focus on writing Python code to define your models and work with your data, rather than having to write SQL queries and manage the details of the database schema yourself.

- CharField:

  - max_length: The maximum length of the string that can be stored in the field.
  - null: Whether the field can be set to NULL in the database (default is False).
  - blank: Whether the field is allowed to be blank in forms (default is False).

- TextField:
  - null: Whether the field can be set to NULL in the database (default is False).
  - blank: Whether the field is allowed to be blank in forms (default is False).
- BooleanField:

  - null: Whether the field can be set to NULL in the database (default is False).
  - default: The default value of the field (default is False).

- IntegerField:

  - null: Whether the field can be set to NULL in the database (default is False).
  - default: The default value of the field (default is 0).

- FloatField:

  - null: Whether the field can be set to NULL in the database (default is False).
  - default: The default value of the field (default is 0.0).

- DecimalField:

  - max_digits: The maximum number of digits allowed in the number (including decimal places).
  - decimal_places: The number of decimal places allowed in the number.
  - null: Whether the field can be set to NULL in the database (default is False).
  - default: The default value of the field (default is 0).

- DateField:

  - auto_now: Whether the field should automatically be set to the current datewhenever the model is saved (default is False).
  - auto_now_add: Whether the field should be set to the current date when the objectis first created (default is False).
  - null: Whether the field can be set to NULL in the database (default is False).
  - default: The default value of the field (default is None).

- TimeField:

  - auto_now: Whether the field should automatically be set to the current time whenever the model is saved (default is False).
  - auto_now_add: Whether the field should be set to the current time when the object is first created (default is False).
  - null: Whether the field can be set to NULL in the database (default is False).
  - default: The default value of the field (default is None).

- DateTimeField:

  - auto_now: Whether the field should automatically be set to the current date andtime whenever the model is saved (default is False).
  - auto_now_add: Whether the field should be set to the current date and time whenthe object is first created (default is False).
  - null: Whether the field can be set to NULL in the database (default is False).
  - default: The default value of the field (default is None).

- FileField:

  - upload_to: The directory where uploaded files should be stored (relative toMEDIA_ROOT).
  - null: Whether the field can be set to NULL in the database (default is False).

- ImageField:
  - upload_to: The directory where uploaded files should be stored (relative to MEDIA_ROOT).
  - null: Whether the field can be set to NULL in the database (default is False).
  - height_field: The name of the field that should store the height of the image (optional).

### Django relations

In Django, you can represent relationships between models using fields that are designed specifically for that purpose. Here are some examples:

ForeignKey: This field is used to create a many-to-one relationship between two models. It takes a required argument that specifies the model to which the relationship is being created. For example, if you have a Book model and an Author model, you could create a ForeignKey field on the Book model that points to the Author model to represent the fact that each book has one author.

ManyToManyField: This field is used to create a many-to-many relationship between two models. It takes a required argument that specifies the model to which the relationship is being created. For example, if you have a Book model and a Genre model, you could create a ManyToManyField field on the Book model that points to the Genre model to represent the fact that each book can belong to multiple genres, and each genre can have multiple books.

OneToOneField: This field is used to create a one-to-one relationship between two models. It takes a required argument that specifies the model to which the relationship is being created. For example, if you have a User model and a Profile model, you could create a OneToOneField field on the Profile model that points to the User model to represent the fact that each user has one profile.

When you create a relationship between models using one of these fields, Django creates a database column that stores the primary key of the related model. This allows you to access related objects using convenient object attributes and methods, such as book.author or genre.book_set.all(). You can also use related objects in queries to filter and sort results based on related data.

for example

```python
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Address(models.Model):
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    zip_code = models.CharField(max_length=10)
    person = models.OneToOneField(Person, on_delete=models.CASCADE, related_name='address')

    def __str__(self):
        return f'{self.street}, {self.city}, {self.state} {self.zip_code}'

class PhoneNumber(models.Model):
    number = models.CharField(max_length=20)
    person = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='phone_numbers')

    def __str__(self):
        return self.number

class Hobby(models.Model):
    name = models.CharField(max_length=100)
    people = models.ManyToManyField(Person, related_name='hobbies')

    def __str__(self):
        return self.name
```

In this example, we have four models: Person, Address, PhoneNumber, and Hobby. The Address model has a one-to-one relationship with the Person model, which means that each person has exactly one address, and each address belongs to exactly one person. The PhoneNumber model has a one-to-many relationship with the Person model, which means that each person can have multiple phone numbers, and each phone number belongs to exactly one person. The Hobby model has a many-to-many relationship with the Person model, which means that each person can have multiple hobbies, and each hobby can be shared by multiple people.

With these relationships in place, we can access related objects using convenient object attributes and methods. For example, if we have a person object, we can access its address using person.address, its phone numbers using person.phone_numbers.all(), and its hobbies using person.hobbies.all(). We can also use related objects in queries to filter and sort results based on related data. For example, if we want to find all the people who have a particular hobby, we could use a query like this:

```python
people_with_cooking_hobby = Person.objects.filter(hobbies__name='Cooking')
```

This will return a QuerySet of all the Person objects that have a hobby with the name "Cooking"

## django Constraints

In Django, you can add various types of constraints to your model fields to enforce data integrity and consistency. Here are some common constraints and how to use them:

Primary Key: A primary key uniquely identifies a record in a table. In Django, you can specify a primary key by setting the primary_key parameter to True in the field definition. For example:

```python
class MyModel(models.Model):
id = models.IntegerField(primary_key=True)
name = models.CharField(max_length=100)
```

Unique Constraint: A unique constraint ensures that a field value is unique across all records in a table. In Django, you can specify a unique constraint by setting the unique parameter to True in the field definition. For example:

```python
class MyModel(models.Model):
name = models.CharField(max_length=100, unique=True)
```

Index: An index speeds up query performance by allowing the database to quickly locate records that match a certain value. In Django, you can specify an index by setting the db_index parameter to True in the field definition. For example:

```python
class MyModel(models.Model):
name = models.CharField(max_length=100, db_index=True)
```

Check Constraint: A check constraint ensures that a field value meets certain conditions. In Django, you can specify a check constraint by using the CheckConstraint class in the model's Meta class. For example:

```python
class MyModel(models.Model):
age = models.IntegerField()

    class Meta:
        constraints = [
            models.CheckConstraint(check=models.Q(age__gte=18), name='age_gte_18'),
        ]
```

This adds a check constraint that requires the age field to be greater than or equal to 18.

Foreign Key: A foreign key establishes a relationship between two tables. In Django, you can specify a foreign key by using the ForeignKey field type. For example:

Example to demonstrate constraint

```python
class Author(models.Model):
name = models.CharField(max_length=100)

class Book(models.Model):
title = models.CharField(max_length=100)
author = models.ForeignKey(Author, on_delete=models.CASCADE)
```

```python
from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
import datetime

def no_digits(value):
    if any(char.isdigit() for char in value):
        raise ValidationError(_('This field should not contain digits.'))

class Person(models.Model):
    first_name = models.CharField(max_length=100, validators=[no_digits])
    last_name = models.CharField(max_length=100, validators=[no_digits])
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, unique=True)
    birthdate = models.DateField()

    class Meta:
        constraints = [
            models.CheckConstraint(check=models.Q(birthdate__lte=datetime.date.today()), name='birthdate_past'),
        ]
```

In this example, we have defined a model called Person with several fields. The first_name and last_name fields are both CharField instances, with a max_length of 100 characters and a custom validator no_digits that raises a ValidationError if the value contains digits.

The email and username fields are also CharField instances, with a max_length of 254 characters and a unique constraint.

Finally, we have defined a birthdate field, which is a DateField. We have also defined a CheckConstraint to ensure that the birthdate is in the past.

All of these constraints are defined in the Meta class of the Person model using the constraints attribute.

## django validators

To create a validator in Django, you can define a function that takes a value and returns nothing if the value is valid, or raises a ValidationError if the value is not valid. Here's an example:

```python
from django.core.exceptions import ValidationError

def validate_even(value):
if value % 2 != 0:
raise ValidationError(
'%(value)s is not an even number',
params={'value': value},
)
```

This validator checks if a given value is an even number. If the value is not even, it raises a ValidationError with a message that includes the invalid value.

You can use this validator in a model field by passing it to the validators argument when defining the field:

```python
from django.db import models

class MyModel(models.Model):
    even_field = models.IntegerField(validators=[validate_even])
```

This example creates a model with an IntegerField that is validated using the validate_even function. If the value entered into even_field is not even, a ValidationError will be raised.

Note that you can define multiple validators for a single field by passing a list of validator functions to the validators argument.

### validators

To prevent creating instances with odd numbers even when you create from the Python shell, you can add the validator to the model's field and use the clean() method to raise a validation error.

Here's an example of how to do it:

```python
from django.core.exceptions import ValidationError
from django.db import models

def validate_even(value):
if value % 2 != 0:
raise ValidationError(
'%(value)s is not an even number',
params={'value': value},
)

class Student(models.Model):
name = models.CharField(max_length=100)
number = models.IntegerField(validators=[validate_even])

    def clean(self):
        super().clean()
        if self.number % 2 != 0:
            raise ValidationError('Number must be an even number.')
```

In this example, we defined a validate_even() function to validate if a number is even or not. Then, we added the validators argument to the number field to ensure it always passes this validator.

In the clean() method, we checked if the number is even or not, and if it is not, we raised a ValidationError with a custom error message.

Now, if you try to create a Student instance with an odd number even from the Python shell, you will get a ValidationError:

```python
>>> from myapp.models import Student
>>> s = Student(name='John', number=3)
>>> s.full_clean()
Traceback (most recent call last):
...
django.core.exceptions.ValidationError: {'number': ['Number must be an even number.']}
```
