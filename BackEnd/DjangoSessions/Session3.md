## views

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

## Class based view

1. A class-based view for retrieving all students and returning them as a JSON response:

```python
from django.http import JsonResponse
from django.views import View
from myapp.models import Student

class StudentListView(View):
def get(self, request):
students = Student.objects.all()
data = list(students.values())
return JsonResponse(data, safe=False)
```

In this example, we define a class-based view called StudentListView that inherits from the View class. We then define a get() method that retrieves all Student objects using the objects.all() method, converts them to a list of dictionaries using the values() method, and creates a JSON response using the JsonResponse class.

The safe=False argument in JsonResponse allows the serialization of objects that are not lists or dictionaries.

2. A class-based view for creating a new student and returning a JSON response:

```python
from django.http import JsonResponse
from django.views import View
from myapp.models import Student

class CreateStudentView(View):
def post(self, request):
name = request.POST.get('name', '')
age = request.POST.get('age', '')
student = Student(name=name, age=age)
student.save()
data = {'status': 'success', 'id': student.id, 'name': student.name, 'age': student.age}
return JsonResponse(data)
```

In this example, we define a class-based view called CreateStudentView that inherits from the View class. We then define a post() method that retrieves the name and age of the new student from the request using the request.POST.get() method, creates a new Student object with the given name and age, saves it to the database using the save() method, creates a dictionary called data with keys for the new student's id, name, and age, as well as a key called status with a value of 'success', and returns a JSON response using the JsonResponse class.

3. A class-based view for deleting a student based on their ID:

```python
from django.http import JsonResponse
from django.views import View
from myapp.models import Student

class DeleteStudentView(View):
    def delete(self, request, student_id):
        try:
            student = Student.objects.get(id=student_id)
            student.delete()
            data = {'status': 'success'}
        except Student.DoesNotExist:
            data = {'status': 'error', 'message': 'Student not found'}
            return JsonResponse(data, status=404)
        return JsonResponse(data)
```

In this example, we define a class-based view called DeleteStudentView that inherits from the View class. We then define a delete() method that attempts to retrieve the Student object with the given student_id using the objects.get() method. If the student exists, we delete it using the delete() method and create a dictionary called data with a key called status and a value of 'success'.

If the student does not exist, we create a dictionary called data with a key called status and a value of 'error', as well as a key called message with a value of 'Student not found'.

Finally, we return a JsonResponse object that takes the data dictionary as its argument. If the student is successfully deleted, this will convert the dictionary to a JSON string and return it as the response with a 200 status code. If the student is not found, it will return a JSON response

4. A class-based view for Read a student based on their ID:

```python
from django.http import JsonResponse
from django.views import View
from myapp.models import Student

class StudentDetailView(View):
    def get(self, request, id):
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

In this example, we define a class StudentDetailView that extends the built-in Django View class. We override the get method to handle GET requests to this view.

We use the try-except block to catch the case where the requested Student object does not exist in the database. If the Student object does exist, we create a dictionary data that contains the desired fields and their values. Finally, we return a JSON response containing the data dictionary with a status code of 200. 5. A class-based view for Update a student based on their ID:

```python
from django.http import JsonResponse
from django.views import View
from myapp.models import Student
import json

class StudentUpdateView(View):
def put(self, request, id):
try:
student = Student.objects.get(id=id)
data = json.loads(request.body)
student.name = data.get('name', student.name)
student.age = data.get('age', student.age)
student.gender = data.get('gender', student.gender) # add more fields as necessary
student.save()
response_data = {
'message': f'Student with id {student.id} updated successfully',
}
return JsonResponse(response_data, status=200)
except Student.DoesNotExist:
return JsonResponse({'error': 'Student does not exist'}, status=404)
```

We override the put method to handle PUT requests to this view. We first try to retrieve the Student object with the specified id from the database. If the object exists, we parse the request body as JSON and update the fields of the Student object with the new data.

Finally, we save the updated Student object and return a JSON response indicating that the update was successful. If the Student object does not exist, we return a JSON response with an error message and a status code of 404.

## Admin Dashboard

To access the Django Admin Dashboard, you need to create a superuser by running the following command in the terminal:

```python
python manage.py createsuperuser
```

Enter the required data to create the superuser. Then, start the Django development server by running the following command:

```python
python manage.py runserver
```

Now, you can access the Admin Dashboard by visiting http://localhost:8000/admin in your web browser. You can perform CRUD (Create, Read, Update, Delete) operations from this dashboard.

Users
You can create a user from the dashboard.

Groups
You can create groups of users (teams) that differ in permissions. You can add users to groups.

admin.py

```python
from product.models import Product, Category
from django.contrib import admin

admin.site.register(Product)
admin.site.register(Category)
```

In the admin.py file, we are importing the Product and Category models from the product application and registering them with the admin site to make them available in the Admin Dashboard.

models.py

```python
class Category(models.Model):
name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'categories'

class Product(models.Model):
name = models.CharField(max_length=100)
price = models.IntegerField()
category = models.ForeignKey(Category, on_delete=models.SET_NULL, related_name='products', null=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'products'
```

In the models.py file, we are defining two models: Category and Product.

Category: It has a name field and a **str** method to return the name of the category. We are also defining a Meta class to set the database table name to 'categories'.
Product: It has a name, price, and category field. The category field is a foreign key to the Category model. We are defining a **str** method to return the name of the product. We are also defining a Meta class to set the database table name to 'products'.
Now, you can add products using the GUI at http://localhost:8000/admin.

To use classes instead of functions, we need to modify the admin.py file:

admin.py (class-based views)

```python
from product.models import Product, Category
from django.contrib import admin

def increase_price(modeladmin, request, queryset):
    for i in range(0, len(queryset)):
        queryset[i].price = queryset[i].price + 100
        queryset[i].save()

increase_price.short_description = 'Increase price by 100'

class ProductTabular(admin.TabularInline):
    model = Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category']
    list_editable = ['price', 'category']
    ordering = ['-price']
    list_filter = ['category', 'price']
    search_fields = ['name__startswith', 'price__lte']
    list_per_page = 1
    actions = [increase_price]
    fieldsets = (
        ('Description', {
            'fields': (('name', 'price'), ('category')),
            'classes': ('collapse',)
        }),
        ('Categories', {
            'classes': ('collapse',),
            'fields': ['category']
        })
    )

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
inlines = [ProductTabluar] # to show the relation (products in this Category)

list_display = ['name'] # what data appears in dashboard (outer view of the table)

search_fields = ['name'] # search for categories by name

class Meta:
	db_table = 'categories'
```

This is a basic example of how to use the admin dashboard in Django to perform CRUD operations on your models. You can customize the dashboard by modifying the `admin.py` file, as shown in the example.
