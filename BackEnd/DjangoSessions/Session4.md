# Class based view

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

## Form Validation

Form validators are used to validate data that is submitted through HTML forms before processing it in the backend. In Django, you can define validators for each form field using the validators attribute. In this example, we will create a User form that contains several fields and apply validation constraints to them.

In the forms.py file, we define the UserForm class that inherits from forms.ModelForm. We add the necessary fields and apply the validation constraints using validators functions that we define. For example, we define the check_mark function to validate the mark field, which should be greater than 0. We also define the check_first_name function to validate the first name field, which should not start with the letter "M". Then, we add these validators to their respective fields using the validators attribute.

```python
from django import forms
from .models import User
from django.forms import ValidationError

def check_mark(value):
    if value < 0:
        raise ValidationError('Mark must be greater than 0')

def check_first_name(value):
    if value[0] == 'M':
        raise ValidationError('M is forbidden')

class UserForm(forms.ModelForm):
    mark = forms.IntegerField(required=False, validators=[check_mark])
    first_name = forms.CharField(max_length=100, validators=[check_first_name])

    class Meta:
        model = User
        fields = "__all__"
        # fields=[...] for a set of fields
```

In the views.py file, we define a UserView class that inherits from View. We define the post method to handle the HTTP POST requests to create a new user and the put method to handle the HTTP PUT requests to update an existing user. In both methods, we create an instance of the UserForm class using the data that is sent in the request body. We then call the is_valid method to check if the data is valid according to the validators that we defined in the form class. If the data is valid, we call the save method to create or update the user object and return the serialized data in a JSON response. If the data is not valid, we return a JSON response that contains the errors.

```python
from django.views import View
from .models import User
from .forms import UserForm
from django.http import JsonResponse
import json

class UserView(View):
    def post(self, request):
        try:
            form = UserForm(data=json.loads(request.body))
            if form.is_valid():
                form.save()
                return JsonResponse(form.data)
            return JsonResponse(form.errors, status=422)
        except:
            return JsonResponse({'message':'Unknown Format'}, status=500)

    def put(self, request, id):
        try:
            form = UserForm(data=json.loads(request.body), instance=User.objects.get(id=id))
            if form.is_valid():
                form.save()
                return JsonResponse(form.data)
            return JsonResponse(form.errors, status=422)
        except User.DoesNotExist:
            return JsonResposne({'message':'Record does not exist'}, status=404)
```

We also define the check_mark and check_first_name functions in forms.py and add them to the respective fields in the UserForm class. The check_mark function checks if the mark is greater than 0, and the check_first_name function checks if the first name does not start with the letter "M".
