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

# Templates

## Templates : it's the DTL - django teplates language - it supports

    1. inheretance **totally ot partially**
    2. filters
    3. tags
    4. variables
    5. comments

## DTL

    Engine it does
        1. loading : loading static files like html
        2. render : render the context and variables

### variables

    {{x}}

## Filter

    {{varibleName|filter : v1 v2  v3}}
    1. defalut          >   {{ name | default: "hamada" }}
    2. length           >   {{ name | length }}
    3. filesizeformat   >   {{ name | filesizeformat }} // change the number to file size format to be readed
    4. add              >   {{ num  | add : 2 }} // add number or concatinate two strings
    5. capfirst         >   {{ name | capfirst }} // make the first letter capitilize
    6. cut              >   {{ name | cut:" " }} // delete all spaces from the name
    7. date             >   {{ date | date:"D" }}
        D > short day
        l > long day
        d > day of the month
        j > day of the month wothout leading zeros
        m > month 2 digits with leading zero
        n > without leading zeros
        M > 3 letters from month
        F > full month
        y > 2 digits from year
        Y > 4 digits from year
    8. floatformat      > {{ number| floatformat }}
    9. upper            > {{ name  | upper }}
    10. lower           > {{ name  | lower }}
    11. random          > {{ name  | random }}
    12. slice           > {{ name  | slice:"0:2" }}

## tags

    1. extends          > {% extends "index.html" %}
    2. include          > {% include "part.html" %}
    3. block            > {% block blockname %} {% end block blockname %}
    4. load static      > {% load static %}
    5. static "url"     > {% static "url" %}

in forms.py

```python
from django import forms

from student.models import Student
from django.forms import ValidationError

def check_first_name(value):
	if value[0] == 'm':
		raise ValidationError('m is forbidden')
def check_age(value) :
    if value < 0 or value > 100 :
        raise ValidationError('age must be between 0 to 100')

class StudentForm(forms.ModelForm) :
    first_name= forms.CharField(max_length=50 , validators=[check_age])
    last_name = forms.CharField(max_length=50)
    age = forms.IntegerField()
    email = forms.EmailField(max_length=70)
    url = forms.URLField(max_length= 100)
    class Meta :
        fields = "__all__"
        model = Student
```

in views.py

```python
from django.shortcuts import render , redirect
from django.views import View

from student.forms import StudentForm
from .models import Student
import json
# Create your views here.
class StudentView(View) :
    def get(self , request , *args, **kwargs)  :
        data = list(Student.objects.values())
        return render(request , "index.html" , {'data': data})

def update(request , id) :

    if request.method == "GET" :
        data = Student.objects.filter(id=id).values()[0]
        return render(request  , "update.html" , data)
    elif request.method == "POST" :
        try :
            print(request.POST.dict()  )
            inst = Student.objects.filter(id = id)[0]
            form = StudentForm(request.POST.dict()   , instance=inst)
            if form.is_valid() :
                form.save()
                return redirect("/student")
            else :
                print(form.errors)
                return redirect("/update/" + str(inst.id))
        except Exception as ex :
            print(str(ex))
            return redirect("/student")
def remove(request , id) :
    if request.method == "GET" :
        print("hello get")
        return render(request , "delete.html" , Student.objects.filter(id = id).values()[0])
    elif request.method == "POST":
        print("hello post")
        Student.objects.filter(id = id).delete() ;
        return redirect("/student")
def add(request) :
    if request.method == "GET" :
        return render(request , "add.html")
    elif request.method == "POST" :
        try :
            form = StudentForm(request.POST.dict())
            if form.is_valid() :
                form.save()
                return redirect("/student")
            else :
                print(form.errors)
                return redirect("/add")
        except Exception as ex :
            print(str(ex))
            return redirect("/student")


def delete(request , id) :
    Student.objects.filter(id = id).delete()
    return redirect("student/")

```

in templates
1 - add.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <form action="/add" method="post">
      {% comment %} {% csrf_token %} {% endcomment %}
      <div class="form-group">
        <label for="first_name">first_name</label>
        <input class="form-control" type="text" name="first_name" />
        <label for="last_name">last_name</label>
        <input class="form-control" type="text" name="last_name" />
        <label for="age">age</label>
        <input class="form-control" type="number" name="age" />
        <label for="url">url</label>
        <input class="form-control" name="url" type="text" />
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary d-flex justify-content-center align-items-center"
      >
        Submit
      </button>
    </form>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

2. delete.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <form action="/delete/{{id}}" method="post">
      <label>Are you sure you want to delete this student ? </label>
      <button class="btn btn-danger" type="submit">Delete</button>
      <button class="btn btn-primary" type="submit">
        <a href="/student">Cancel</a>
      </button>
    </form>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

3. index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />

    <title>Document</title>
  </head>
  <body>
    <table class="table">
      <thead>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>age</th>
          <th>email</th>
          <th>url</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {% for i in data %}
        <tr>
          <td>{{ i.first_name }}</td>
          <td>{{ i.last_name }}</td>
          <td>{{ i.age }}</td>
          <td>{{ i.email }}</td>
          <td>{{ i.url }}</td>
          <td> <button class="btn btn-primary"><a href="/update/{{i.id}}">Update<a/></button></td>
          <td> <button class="btn btn-danger"><a href="/delete/{{i.id}}">Delete<a/></button></td>
        </tr>
         {% endfor %}
      </tbody>
    </table>
    <button class="btn btn-secondary"><a href="/add">ADD</a></button>
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

    4. update.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />

    <title>Document</title>
  </head>
  <body>
    <table class="table">
      <thead>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>age</th>
          <th>email</th>
          <th>url</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {% for i in data %}
        <tr>
          <td>{{ i.first_name }}</td>
          <td>{{ i.last_name }}</td>
          <td>{{ i.age }}</td>
          <td>{{ i.email }}</td>
          <td>{{ i.url }}</td>
          <td> <button class="btn btn-primary"><a href="/update/{{i.id}}">Update<a/></button></td>
          <td> <button class="btn btn-danger"><a href="/delete/{{i.id}}">Delete<a/></button></td>
        </tr>
         {% endfor %}
      </tbody>
    </table>
    <button class="btn btn-secondary"><a href="/add">ADD</a></button>
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

[**Link the Repo**](https://github.com/Abdelfattah27/CRUDOdsDjangoTemplates)
