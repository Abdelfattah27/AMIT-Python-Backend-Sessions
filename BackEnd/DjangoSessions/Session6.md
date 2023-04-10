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

Custom Attributes
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

Validations
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

I hope this brief tutorial helps you get started with creating serializers and custom attributes and validations in DRF!

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
from rest_framework.authtoken.views import obtain_auth_token

router = DefaultRouter()
router.register("student" ,StudentViewSets )
router.register("parent" ,ParentViewSets )
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
