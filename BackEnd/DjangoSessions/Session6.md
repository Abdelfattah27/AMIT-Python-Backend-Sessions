# Restructure the templates

layout.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{title|default:"Students"}}</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />
  </head>
  <body>
    {% block content %}{% endblock content %}
  </body>
</html>
```

index.html

```html
{% extends 'layout.html' %} {% block content %}

<a href="{% url 'add' %}">
  <button class="btn btn-primary">Add</button>
</a>
<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>name</th>
      <th>description</th>
      <th>age</th>
      <th>GPA</th>
      <th>birth_data</th>
      <th>email</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {% for student in students %}
    <tr>
      <td>{{ student.name }}</td>
      <td>{{ student.description }}</td>
      <td>{{ student.age }}</td>
      <td>{{ student.GPA }}</td>
      <td>{{ student.birth_data }}</td>
      <td>{{ student.email }}</td>
      <td>
        <button>
          <a href="{% url "update" id=student.id %}">Update</a>
        </button>
      </td>
      <td>
        <button>
          <a href="{% url "delete" id=student.id %}">Update</a>
        </button>
      </td>
    </tr>
    {% endfor %}
  </tbody>
  {% endblock content %}
</table>
```

create.html

```html
{% extends 'layout.html' %} {% block content %}

<div class="text-danger">
  {% if form.errors %} {{ form.errors }} {% endif %}
</div>
<form class="m-4" action="/student/add/" method="post">
  <div class="form-group">
    <label for="name"> name</label>
    <input
      class="form-control"
      type="text"
      placeholder="enter the name"
      id="name"
      name="name"
    />

    <label for="description"> description</label>
    <input
      class="form-control"
      type="text"
      placeholder="enter the description"
      id="description"
      name="description"
    />

    <label for="age"> age</label>
    <input
      class="form-control"
      type="number"
      placeholder="enter the age"
      id="age"
      name="age"
    />

    <label for="GPA"> GPA</label>
    <input
      class="form-control"
      type="number"
      placeholder="enter the GPA"
      id="GPA"
      name="GPA"
    />

    <label for="email"> email</label>
    <input
      class="form-control"
      type="email"
      placeholder="enter the email"
      id="email"
      name="email"
    />

    <label for="email"> password</label>
    <input
      class="form-control"
      type="password"
      placeholder="enter the password"
      id="password"
      name="password"
    />
  </div>

  {% include "btn.html" with name="btn-primary" %}
</form>
{% endblock content %}
```

update.html

```html
{% extends 'layout.html' %} {% block content %}
<div class="text-danger">
  {% if form.errors %} {{ form.errors }} {% endif %}
</div>
<form class="m-4" action="/student/update/{{ student.id }}/" method="post">
  <div class="form-group">
    <label for="name"> name</label>
    <input
      class="form-control"
      type="text"
      placeholder="enter the name"
      id="name"
      name="name"
      value="{{ student.name }}"
    />

    <label for="description"> description</label>
    <input
      class="form-control"
      type="text"
      placeholder="enter the description"
      id="description"
      name="description"
      value="{{ student.description }}"
    />

    <label for="age"> age</label>
    <input
      class="form-control"
      type="number"
      placeholder="enter the age"
      id="age"
      name="age"
      value="{{ student.age }}"
    />

    <label for="GPA"> GPA</label>
    <input
      class="form-control"
      type="number"
      placeholder="enter the GPA"
      id="GPA"
      name="GPA"
      value="{{ student.GPA }}"
    />

    <label for="email"> email</label>
    <input
      class="form-control"
      type="email"
      placeholder="enter the email"
      id="email"
      name="email"
      value="{{ student.email }}"
    />
  </div>

  {% include "btn.html" with name="btn-primary" %}
</form>
{% endblock content %}
```

delete.html

```html
{% extends 'layout.html' %} {% block content %}
<form action="/student/delete/{{ id }}/" method="post">
  <p>Are you sure you want to delete this ?</p>
  {% include "btn.html" %} {% include "btn.html" with name="btn-danger" %}
  <button class="btn btn-primary" type="button">
    <a href="/student/index">Cancel</a>
  </button>
</form>
{% endblock content %}
```

btn.html

```html
<button type="submit" class="btn {{ name }}">Submit</button>
```

# RestFrameWork

1. APIView
   APIView is the simplest view you can use in DRF. You can define HTTP methods (GET, POST, PUT, PATCH, DELETE) inside the class and handle the request/response. You can also use authentication, permission, and throttling classes in APIView.

Example:

```python
from rest_framework.views import APIView
from rest_framework.response import Response

class HelloAPIView(APIView):
    def get(self, request, format=None):
        return Response({'message': 'Hello, world!'})
```

2. Mixin views
   Mixin views are classes that provide common behaviors to views. DRF provides several mixins views such as ListModelMixin, CreateModelMixin, UpdateModelMixin, and RetrieveModelMixin. You can use these mixins in combination with APIView to get a specific behavior.

Example:

```python
from rest_framework.mixins import ListModelMixin
from rest_framework.views import APIView
from rest_framework.response import Response

class ListUsersAPIView(ListModelMixin, APIView):
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
```

3. Generic views
   Generic views provide common functionalities such as retrieving, creating, updating, and deleting objects. DRF provides several generic views such as ListAPIView, CreateAPIView, UpdateAPIView, and DestroyAPIView. You can use these generic views to simplify your code.

Example:

```python
from rest_framework.generics import ListAPIView
from .models import User
from .serializers import UserSerializer

class UserListAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
```

4. Function-based API view
   Function-based views are the simplest views in Django. You can define your own request/response handling logic in a function. You can also use authentication, permission, and throttling decorators in function-based views.

Example:

```python
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

```

## Serializer

What is a Serializer in DRF?
A serializer in DRF is a class that converts complex data types such as Django models, querysets, and Python objects into JSON, XML, or other content types for the HTTP response. It also parses incoming JSON or other content types into Python data types.

Creating a Serializer
Here's an example of a basic serializer for a User model:

```python
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
class Meta:
    model = User
    fields = ['id', 'username', 'email', 'password']
    extra_kwargs = {'password': {'write_only': True}}
```

In the above example, we define a serializer class UserSerializer that inherits from serializers.ModelSerializer. We also define the model that this serializer is based on, and the fields we want to serialize. We use extra_kwargs to specify that the password field should be write-only (i.e., it should not be returned in the serialized response).

## Custom Attributes

Sometimes you may want to add additional attributes to the serialized response that are not part of the model. Here's an example of how to add a custom attribute to the UserSerializer:

```python
class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'full_name']
        extra_kwargs = {'password': {'write_only': True}}

    def get_full_name(self, obj):
        return f'{obj.first_name} {obj.last_name}'
```

In the above example, we've added a custom attribute full_name to the UserSerializer that combines the first_name and last_name fields of the User model.

## Validations

Serializers also allow you to validate incoming data and raise errors if the data does not meet certain criteria. Here's an example of how to add a validation check to the UserSerializer:

```python
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        if 'example.com' in value:
            raise serializers.ValidationError("Email domain not allowed.")
        return value
```

In the above example, we're adding a validation check to the email field of the UserSerializer. If the email domain is "example.com", we raise a serializers.ValidationError.

## Example Of Code

in models.py

```python
from django.db import models

class Parent(models.Model) :
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    class Meta :
        db_table = "Parent"

class Student(models.Model) :
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField(max_length=256)
    parent = models.ForeignKey(Parent , on_delete=models.CASCADE , related_name="sons")
    class Meta :
        db_table = "Student"


```

in serializers.py

```python
from rest_framework import serializers
from student.models import Parent, Student
from django.forms import ValidationError

def validate_name(value) :
    if value == "Ahmed" :
        raise ValidationError("nam shouldn't be = Ahmed")

class StudentSerializer(serializers.ModelSerializer) :
    first_name = serializers.CharField(max_length =100 , validators=[validate_name])
    class Meta :
        model = Student
        fields = "__all__"
class ParentSerializer(serializers.ModelSerializer) :

    class Meta :
        model = Parent
        fields = ["name" , "age" , "sons"]

```

in view.py

```python
import json
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from student.models import Parent, Student
from student.serializers import ParentSerializer, StudentSerializer
from rest_framework import status , filters
from rest_framework import mixins , generics , viewsets
from rest_framework.authentication import BasicAuthentication , TokenAuthentication
from rest_framework.permissions import IsAuthenticated
```

# APIView

```python
class StudentsView(APIView) :
    def get(self , request, *args, **kwargs) :
        data = StudentSerializer(Student.objects.all() , many =True)
        return Response(data.data)
    def post(self , request, *args, **kwargs) :
        serializer = StudentSerializer(data = request.data)
        if serializer.is_valid() :
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class StudentView(APIView) :
    def get(self , request, *args, **kwargs) :
        data = StudentSerializer(Student.objects.filter(id=kwargs["id"])[0])
        return Response(data.data)
    def put(self , request , *args, **kwargs) :
        serializer = StudentSerializer(instance=Student.objects.filter(id = kwargs["id"])[0] , data = request.data)
        if serializer.is_valid() :
            serializer.save()
            return Response(serializer.data)

        else :
            return Response(serializer.errors)
    def delete(self , request, *args, **kwargs) :
        try :
            Student.objects.get(id=kwargs["id"]).delete()
            return Response(status=status.HTTP_200_OK)
        except Exception as es :
            return Response(status=status.HTTP_404_NOT_FOUND)


# Mixins


class StudentsMixinsView(generics.GenericAPIView , mixins.ListModelMixin  , mixins.CreateModelMixin) :
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    def get(self , request  ,*args, **kwargs) :
        return self.list( request  ,*args, **kwargs)
    def post(self , request , *args, **kwargs) :
        return self.create(request , *args, **kwargs)
class StudentMixinsView(generics.GenericAPIView , mixins.RetrieveModelMixin  , mixins.DestroyModelMixin , mixins.UpdateModelMixin) :
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    def get(self , request  ,*args, **kwargs) :
        return self.retrieve( request  ,*args, **kwargs)
    def put(self , request , *args, **kwargs) :
        return self.update(request , *args, **kwargs)
    def delete(self , request ,*args, **kwargs ) :
        return self.remove(request ,*args, **kwargs)

# generic views


class StudentGenericsView(generics.DestroyAPIView , generics.UpdateAPIView , generics.RetrieveAPIView) :
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
class StudentsGenericsView(generics.ListAPIView , generics.CreateAPIView) :
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
class ParentsGenericsView(generics.ListAPIView , generics.CreateAPIView):
    queryset = Parent.objects.all()
    serializer_class = ParentSerializer
class ParentGenericsView(generics.DestroyAPIView , generics.UpdateAPIView , generics.RetrieveAPIView) :
    queryset = Parent.objects.all()
    serializer_class = ParentSerializer

class StudentViewSets(viewsets.ModelViewSet) :
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    #authentication_classes = [BasicAuthentication]
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class ParentViewSets(viewsets.ModelViewSet) :
    queryset = Parent.objects.all()
    serializer_class = ParentSerializer
```

in urls.py

```python
from django.urls import path , include
from rest_framework.routers import DefaultRouter
from student.models import Student
from .views import ParentViewSets, StudentViewSets

from student.views import ParentGenericsView, ParentsGenericsView, StudentGenericsView, StudentMixinsView, StudentsGenericsView,StudentsMixinsView , StudentView, StudentsView
urlpatterns = [
    path("student" , StudentsView.as_view()) ,
    path("student/<int:id>" , StudentView.as_view()),
    path("studentmixins" , StudentsMixinsView.as_view()) ,
    path("studentmixins/<int:pk>" , StudentMixinsView.as_view()) ,
    path("studentgenerics" , StudentsGenericsView.as_view()) ,
    path("studentgenerics/<int:pk>" , StudentGenericsView.as_view()) ,
    path("parentgenerics" , ParentsGenericsView.as_view()) ,
    path("parentgenerics/<int:pk>" , ParentGenericsView.as_view()) ,
    path("studentviewset/" , include(router.urls)) ,
    path("getauthtoken" , obtain_auth_token)
]

```

in settings.py

```python
REST_FRAMEWORK = {
    # "DEFAULT_AUTHENTICATION_CLASSES" : [
    #     "rest_framework.authentication.BasicAuthentication"
    # ]
    # ,
    # "DEFAULT_PERMISSION_CLASSES" : [
    #     "rest_framework.permissions.IsAdminUser"
    # ]
    # IsAuthenticated , AllowAny , IsAdminuser , IsAuthenticatedOrReadOnly
    # ,
     "DEFAULT_AUTHENTICATION_CLASSES" : [
        "rest_framework.authentication.TokenAuthentication"
    ]
}
```

# instaled apps

1.  "rest_framework.authtoken" ,
2.  'rest_framework',
