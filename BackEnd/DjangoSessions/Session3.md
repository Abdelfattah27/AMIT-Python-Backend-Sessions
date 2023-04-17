# manipulate the models

```python
from django.db import models

class MyModel(models.Model):
    field1 = models.CharField(max_length=50)
    field2 = models.IntegerField()
    related_items = models.ManyToManyField('RelatedModel')

    def __str__(self):
        return self.field1

all_objects = MyModel.objects.all()

filtered_objects = MyModel.objects.filter(field1__icontains='value')

object = MyModel.objects.get(id=1)

new_object = MyModel(field1='new_value', field2=123)
new_object.save()

object.delete()

MyModel.objects.filter(field1='value1').update(field2=456)

MyModel.objects.create(field1='value3', field2=789)

ordered_objects = MyModel.objects.order_by('-field2')

distinct_values = MyModel.objects.values('field1').distinct()

num_objects = MyModel.objects.count()

if MyModel.objects.filter(field1='value1').exists():
    # Do something

fields = MyModel.objects.values('field1', 'field2')

annotated_objects = MyModel.objects.annotate(num_related_items=models.Count('related_items'))

average_value = MyModel.objects.aggregate(avg_value=models.Avg('field2'))['avg_value']
```

## Lockups

In Django, a lookup filter is a tool used to filter/query the database based on certain conditions. It is used in conjunction with the queryset API to retrieve data from the database that matches certain criteria.

Lookup filters allow you to specify conditions such as exact matches, greater than, less than, and many more. Some examples of lookup filters in Django include exact, contains, icontains, gt (greater than), lt (less than), in, range, isnull, and startswith.

Using lookup filters, you can filter down a queryset to a specific set of records that meet your requirements. For instance, you can retrieve all records that match a specific value in a certain field, or records with a certain value in a date field within a specific range.

for examples :

Retrieve all books whose title contains the word "Django":

```python
books = Book.objects.filter(title\*\*contains='Django')
```

Retrieve all books whose price is greater than 10:

```python
books = Book.objects.filter(price**gt=10)
```

Retrieve all orders made on a certain date:

```python
orders = Order.objects.filter(date_ordered\*\*date=date(2023, 4, 8))
```

Retrieve all blog posts that were published in the last 7 days:

```python
posts = BlogPost.objects.filter(published_date**gte=datetime.now()-timedelta(days=7))
```

Retrieve all users whose username starts with the letter 'j':

```bash
users = User.objects.filter(username__startswith='j')

```

## Q

In Django, Q is a class that encapsulates a single query expression, similar to the WHERE clause in SQL. It is used to build complex queries with logical operators such as AND, OR, and NOT.

Q objects can be used in queries to filter results based on multiple conditions. They can be combined using logical operators to create more complex queries. This is useful when you need to construct complex queries dynamically based on user input or other runtime conditions.

For example, consider a model called Book with attributes title, author, and price. If you want to query for books written by "John Doe" or with a price less than $10, you can use a Q object to combine the conditions:

css
Copy code
from django.db.models import Q

books = Book.objects.filter(Q(author='John Doe') | Q(price\_\_lt=10))
This will return all Book objects where the author is "John Doe" or the price is less than $10.

## sqlmigrate

You can view the SQL that Django will execute by running the sqlmigrate command followed by the migration name. For example:

```yaml
Copy code
python manage.py sqlmigrate myapp 0001
```

This will output the SQL statements that will be executed for the first migration of the myapp application. You can then copy and paste these SQL statements into a database client to execute them manually.

## query

You can get the SQL query for a single model instance by calling the query attribute on it:

```python
book = Book.objects.get(title='Django for Beginners')
query = book.query
print(str(query))
```

This will print the SQL query that will be executed to get the Book instance with the title "Django for Beginners".

## User Model

The User model is a pre-defined model in Django that comes with the built-in django.contrib.auth app. This model represents the users that can access your application and provides a number of useful attributes and methods.

To use the User model, you need to import it from the django.contrib.auth.models module. Here's an example:

```python
from django.contrib.auth.models import User

class MyModel(models.Model):
user = models.ForeignKey(User, on_delete=models.CASCADE) # other fields...
```

The User model has a number of attributes that you can use to get information about a user. Some of the most commonly used attributes include:

- username: The username for the user. This attribute is unique and is used for authentication.
- email: The email address for the user.
- first_name: The first name of the user.
- last_name: The last name of the user.
- is_active: A boolean indicating whether the user account is active or not.
- is_staff: A boolean indicating whether the user has staff permissions.
- is_superuser: A boolean indicating whether the user has superuser permissions.
  In addition to these attributes, the User model also has a number of methods that you can use to perform various tasks related to authentication and authorization, such as check_password(), set_password(), has_perm(), and get_group_permissions()

# views

Functional views are a type of view in Django that use functions instead of classes to define the behavior of a web page. The main advantage of using functional views is that they are often simpler and easier to understand than class-based views.

To create a functional view in Django, you can follow these steps:

Define the function that will represent your view. This function should take an HTTP request object as its first argument.

```python
def my_view(request): # View logic goes here
```

Write the view logic inside the function. This can include things like querying a database, rendering a template, or performing some other action.

```python
from django.shortcuts import render
from django.http import JsonResponse

def my_view(request):
    my_objects = MyModel.objects.values()
    return JsonResponse(list(my_objects))
```

In the example above, we are querying all instances of the MyModel model

Map the view to a URL. This can be done using Django's URL patterns. For example:

```python
from django.urls import path
from .views import my_view

urlpatterns = [
path('my-url/', my_view, name='my-view'),
]
```

In this example, we are mapping the my_view function to the URL /my-url/.

And that's it! Your functional view is now ready to use. Just visit the URL that you mapped it to (e.g. http://localhost:8000/my-url/) to see the results.

## CRUD Operations

### Read All Students

here is an example of a view in Django that retrieves all data from a Student model and returns it as a JSON response:

```python
from django.http import JsonResponse
from myapp.models import Student

def get_all_students(request):
    students = Student.objects.all()
    data = {'students': list(students.values())}
    return JsonResponse(data)
```

In this example, we first import the necessary modules - JsonResponse from django.http and the Student model from the myapp.models module.

Next, we define a function-based view called get_all_students that takes a request object as its argument.

Inside the view function, we retrieve all the Student objects using the objects.all() method of the Student model.

We then create a dictionary called data that contains a key called students with a value that is a list of dictionaries. Each dictionary in the list corresponds to a single Student object and contains all the fields of that object as key-value pairs.

Finally, we return a JsonResponse object that takes the data dictionary as its argument. This will convert the dictionary to a JSON string and return it as the response.

To use this view in your Django app, you will need to define a URL pattern that maps to the get_all_students view. For example:

```python
from django.urls import path
from myapp.views import get_all_students

urlpatterns = [
    path('students/', get_all_students, name='all-students'),
]
```

In this example, we are mapping the get_all_students view to the URL /students/. When a user visits this URL, the view will be called and it will return a JSON response containing all the Student objects in the database.

### Read Student based on ID

```python
from django.http import JsonResponse
from myapp.models import Student

def student_detail_view(request, id):
    try:
        student = Student.objects.get(id=id)
        data = {
            'name': student.name,
            'age': student.age,
            'gender': student.gender,
            # add more fields as necessary
        }
        return JsonResponse(data, status=200)
    except Student.DoesNotExist:
        return JsonResponse({'error': 'Student does not exist'}, status=404)
```

In this example, we define a function student_detail_view that takes a request object and an id parameter. We use the try-except block to catch the case where the requested Student object does not exist in the database.

If the Student object does exist, we create a dictionary data that contains the desired fields and their values. Finally, we return a JSON response containing the data dictionary with a status code of 200.

### Update Student

```python
from django.http import JsonResponse
from myapp.models import Student

def edit_student(request, student_id):
    student = get_object_or_404(Student, pk=student_id)
    if request.method == 'POST':
        student.name = request.POST['name']
        student.age = request.POST['age']
        student.save()
        data = {'status': 'success'}
    else:
        data = {'id': student.id, 'name': student.name, 'age': student.age}
    return JsonResponse(data)
```

In this updated version of the function, we still retrieve the Student object with the given student_id using the get_object_or_404 function, and we still check the request method to determine whether to update the student's data or return the student's data.

If it's a POST request and we successfully update the student's data, we create a dictionary called data with a key called status and a value of 'success'.

If it's a GET request and we need to return the student's data, we create a dictionary called data with keys called id, name, and age, and values corresponding to the student's id, name, and age.

Finally, we return a JsonResponse object that takes the data dictionary as its argument. This will convert the dictionary to a JSON string and return it as the response.

### Create Student

```python
from django.http import JsonResponse
from myapp.models import Student

def create_student(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        age = request.POST.get('age', '')
        student = Student(name=name, age=age)
        student.save()
        data = {'status': 'success', 'id': student.id, 'name': student.name, 'age': student.age}
        return JsonResponse(data)
    else:
        data = {'status': 'error', 'message': 'Invalid Request Method'}
        return JsonResponse(data, status=400)
```

In this example, we first import the necessary modules - JsonResponse from django.http and the Student model from the myapp.models module.

We then define a function-based view called create_student that takes a request object as its argument.

Inside the view function, we check the request method. If it's a POST request, we retrieve the name and age of the student from the request using the request.POST.get() method. We then create a new Student object with the given name and age, save it to the database using the save() method, and create a dictionary called data with keys for the new student's id, name, and age, as well as a key called status with a value of 'success'.

If it's not a POST request, we create a dictionary called data with a key called status with a value of 'error', and a key called message with a value of 'Invalid Request Method'.

Finally, we return a JsonResponse object that takes the data dictionary as its argument. If it's a successful POST request, this will convert the dictionary to a JSON string and return it as the response with a 200 status code. If it's not a POST request, it will return a JSON response with a 400 status code.

### Delete Student

```python
from django.http import JsonResponse
from myapp.models import Student

def delete_student(request, student_id):
    try:
        student = Student.objects.get(id=student_id)
        student.delete()
        data = {'status': 'success'}
    except Student.DoesNotExist:
        data = {'status': 'error', 'message': 'Student not found'}
        return JsonResponse(data, status=404)
    return JsonResponse(data)
```

In this example, we first import the necessary modules - JsonResponse from django.http and the Student model from the myapp.models module.

We then define a function-based view called delete_student that takes a request object and a student_id parameter as its arguments.

Inside the view function, we attempt to retrieve the Student object with the given student_id using the get() method. If the student exists, we delete it using the delete() method and create a dictionary called data with a key called status and a value of 'success'.

If the student does not exist, we create a dictionary called data with a key called status and a value of 'error', as well as a key called message with a value of 'Student not found'.

Finally, we return a JsonResponse object that takes the data dictionary as its argument. If the student is successfully deleted, this will convert the dictionary to a JSON string and return it as the response with a 200 status code. If the student is not found, it will return a JSON response with a 404 status code.
