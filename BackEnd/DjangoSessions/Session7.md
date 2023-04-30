# Serializers

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
```

In the above example, we define a serializer class UserSerializer that inherits from serializers.ModelSerializer. We also define the model that this serializer is based on, and the fields we want to serialize. We use extra_kwargs to specify that the password field should be write-only (i.e., it should not be returned in the serialized response).

## binefits of serializer

### Data Validation

```python
from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer) :
    def validate_first_name(self , value) :
        if len(value) < 7 :
            return serializers.ValidationError("first name must be more than 7 chars")
    class Meta :
        model = User
        fields = ["first_name"]

```

### at inheritance

```python
class Reviewserializer(serializers.ModelSerializer) :

    class Meta :
        fields = "__all__"
        model = Review


class ProductSerializer (serializers.ModelSerializer) :
    reviews = serializers.SerializerMethodField(read_only = True)
    class Meta :
        model = Product
        fields = '__all__'
    def get_reviews (self , obj) :
        serializer = Reviewserializer(obj.reviews.all() , many = True)
        return serializer.data
```

```python
class ShippingAddressSerializer (serializers.ModelSerializer) :
    class Meta :
        model = ShippingAddress
        fields = '__all__'

class OrderItemsSerializer (serializers.ModelSerializer) :
    class Meta :
        model = OrderItems
        fields = '__all__'
class OrderSerializer (serializers.ModelSerializer) :
    items = serializers.SerializerMethodField(read_only = True)
    shipping_address = serializers.SerializerMethodField(read_only = True)
    user = serializers.SerializerMethodField(read_only=True)
    class Meta :
        model = Order
        fields = '__all__'
    def get_items(self , obj) :
        items = obj.orderitems_set.all()
        serializer = OrderItemsSerializer(items , many =True)
        return serializer.data
    def get_shipping_address(self , obj) :
        try:
            address = ShippingAddressSerializer(obj.shippingAddress , many=False).data
        except :
            address = False
        return address
    def get_user(self , obj) :
        serializer = UserSerializer(obj.user  , many=False)
        return serializer.data


# for user update or create user serializer
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {
            "password" : {"write_only" : True} ,

            "email" : {
                "allow_blank" : False ,
                "required" : True ,
                "validators" : [
                    validators.UniqueValidator(User.objects.all() , "A user with that Email already exists")
                ]
            }
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for key, value in validated_data.items():
            setattr(instance, key, value)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


```

## Custom Attributes

Sometimes you may want to add additional attributes to the serialized response that are not part of the model. Here's an example of how to add a custom attribute to the UserSerializer:

```python
class ProductSerializer(serializers.ModelSerializer ) :
    year = serializers.SerializerMethodField(read_only = True)

    class Meta :
        model = Product
        fields = ["name" , "year"]

    def get_year(self , obj ) :
        return obj.data.year

```

# Middle wares

## How to apply middleware class on your project

```python
# at middlewares.py
class MyMiddleware :
    def __init__(self , get_response)  :
        self.get_response = get_response
    def __call__(self,request) :
        response = self.get_response(request)
        print("Hello from middle ware")
        response.hamada = "ahmed"
        return response

# at settings.py
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    #"base.middlewares.MyMiddleware"
]
```

## authentication

```python

@api_view(["POST"])
def login(request) :
    print(request.hamada)
    try :
        data = request.data
        print(data["password"])
        user_data = authenticate(username = data["username"] , password=data["password"])
        user_dict = {
            "id" : user_data.id ,
            "first_name" : user_data.first_name ,
            "username" : user_data.username ,
            "password" : user_data.password
        }
        token = jwt.encode(user_dict , key=SECRET_KEY)
        return Response({"token" :token })

    except User.DoesNotExist:
        return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as ex:
        return Response({"error": str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["POST"])
def register(request) :
    data = request.data
    try :
        new_user = UserSerializer(data = data)
        if new_user.is_valid() :
            User.objects.create_user(**data)
            return Response({"message" : "created successfully"} , status=status.HTTP_201_CREATED )
        else : return Response({"error" : str(new_user.errors)} , status=status.HTTP_400_BAD_REQUEST)
    except Exception as ex :
        return Response({"error" : str(ex)} , status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def getusers(request) :
    try :
        token = request.data["token"]
        user_data = jwt.decode(token , key=SECRET_KEY ,algorithms=["HS256"] )
        requested_user  = User.objects.get(id = user_data["id"] )
        if requested_user.is_staff :

            users = list(User.objects.values())
            return Response(users)
        else :
            return Response(status=status.HTTP_401_UNAUTHORIZED)
    except Exception as ex :
        return Response(status=status.HTTP_401_UNAUTHORIZED)

@api_view(["GET"])
@permission_classes([IsAdminUser])
def get_all_users(request) :

    print(request.user)
    return Response({"hello" : "world"})
@permission_classes([IsAdminUser])
class Hamada(APIView) :
    def get (self , request) :
        return Response({"Hello" : "world"})

@api_view(["POST"])
@authentication_classes([UserAuthentication])
def get_products(request) :
    print(request.user)
    serializer = ProductSerializer( Product.objects.all() , many= True)
    return Response(serializer.data)


# middlewares.py
from rest_framework import authentication
from django.contrib.auth.models import User
from rest_framework import exceptions
class MyMiddleware :
    def __init__(self , get_response)  :
        self.get_response = get_response
    def __call__(self,request) :
        response = self.get_response(request)
        print("Hello from middle ware")
        response.hamada = "ahmed"
        return response

class UserAuthentication (authentication.BaseAuthentication) :
    def authenticate(self, request):
        if request.method == "GET" :
            return (None , None)
        elif request.method == "POST" :
            user = User.objects.filter(id = request.headers.get("id"))
            if len(user) < 1 :
                raise exceptions.AuthenticationFailed("this user Not authenticated")
            else : return (user , None)



# Serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
class UserSerializer(serializers.ModelSerializer) :
    def validate_first_name(self , value) :
        if len(value) < 7 :
            return serializers.ValidationError("first name must be more than 7 chars")
    class Meta :
        model = User
        fields = ["first_name"]

class ProductSerializer(serializers.ModelSerializer ) :
    year = serializers.SerializerMethodField(read_only = True)

    class Meta :
        model = Product
        fields = ["name" , "year"]

    def get_year(self , obj ) :
        return obj.data.year



```

## for the project

```python
## Views
from django.shortcuts import render
from django.http import JsonResponse
# from .products import products
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED , HTTP_400_BAD_REQUEST
from ..models import Product
from ..serializers import ProductSerializer, Userserializer, UserserializerWithToken
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
# Create your views here.




# @api_view(["POST"])
# def allProduct(request) :
#     serializer = ProductSerializer(request.data)
#     if serializer.is_valid() :
#         serializer.save( )
#         return Response(status=HTTP_201_CREATED)
#     else :
#         return Response(status=HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def registerUser(request) :
    data = request.data
    try :
        user =User.objects.create(
        first_name = data["name"] ,
        username = data["email"] ,
        email = data["email"] ,
        password = make_password(data["password"])
        )
        serializer = UserserializerWithToken(user , many=False)
        return Response(serializer.data)
    except Exception as ex :
        return Response({"detail": str(ex)} , status=HTTP_400_BAD_REQUEST)


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserserializerWithToken(self.user).data
        for k , v in serializer.items() :
            data[k] = v


        # refresh = self.get_token(self.user)

        # data["refresh"] = str(refresh)
        # data["access"] = str(refresh.access_token)

        # if api_settings.UPDATE_LAST_LOGIN:
        #     update_last_login(None, self.user)

        return data
    # @classmethod
    # def get_token(cls, user):
    #     token = super().get_token(user)

    #     # Add custom claims
    #     token['username'] = user.username
    #     token["message"] = "hello world"

    #     # ...

    #     return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request) :
    user = request.user
    serializer = UserserializerWithToken(user, many=False)
    data = request.data
    user.username = data["email"]
    user.first_name = data["name"]
    user.email = data["email"]
    if data["password"] != "" :
        user.password = make_password(data["password"] )
    user.save()
    return Response(serializer.data)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request) :
    user = request.user
    serializer = Userserializer(user, many=False)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAdminUser])
def getUsers(request) :
    users = User.objects.all()
    serializer = Userserializer(users , many =True)

    return Response(serializer.data)

@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def deleteUser(requset , pk) :
    try :
        user = User.objects.get(id = pk)
        user.delete()
        return Response({"message": "User deleted successfully"} , status=status.HTTP_200_OK)
    except Exception as ex:
        print(str(ex))
        return Response({"message" : "Not found"} , status= status.HTTP_404_NOT_FOUND)

@api_view(["GET"])
@permission_classes([IsAdminUser])
def getUserById(requset , pk) :
    try :
        user = User.objects.get(id = pk)
        userInfo = Userserializer(user , many=False)
        return Response(userInfo.data , status=status.HTTP_200_OK)
    except Exception as ex:
        print(str(ex))
        return Response({"message" : "User Not found"} , status= status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateUser(request , pk) :
    try:
        user = User.objects.get(id = pk)

        data = request.data
        user.username = data["email"]
        user.first_name = data["name"]
        user.email = data["email"]
        user.is_staff = data["isAdmin"]
        user.save()
        serializer = UserserializerWithToken(user, many=False)
        return Response(serializer.data)
    except Exception as ex:
        print(str(ex))
        return Response({"message" : "User Not found"} , status= status.HTTP_400_BAD_REQUEST)

## serializers


from rest_framework import serializers
from django.contrib.auth.models import User
from .models import  Review , Product  , Order , OrderItems , ShippingAddress
from rest_framework_simplejwt.tokens import RefreshToken


class Userserializer(serializers.ModelSerializer) :
    name = serializers.SerializerMethodField(read_only = True)
    _id = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only = True)

    class Meta :
        model = User
        fields = ['_id' , 'username' , 'email' , "name" , 'isAdmin']
    def get_name(self , obj ) :
        name = obj.first_name
        if name == "" :
            name = obj.email
        return name
    def get__id(self , obj) :
        return obj.id
    def get_isAdmin(self, obj) :
        return obj.is_staff

class UserserializerWithToken(Userserializer) :
    token = serializers.SerializerMethodField(read_only = True)
    class Meta :
        model = User
        fields = ['_id' , 'username' , 'email' , "name" , 'isAdmin' , 'token']
    def get_token(self , obj) :
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class Reviewserializer(serializers.ModelSerializer) :

    class Meta :
        fields = "__all__"
        model = Review


class ProductSerializer (serializers.ModelSerializer) :
    reviews = serializers.SerializerMethodField(read_only = True)
    class Meta :
        model = Product
        fields = '__all__'
    def get_reviews (self , obj) :
        serializer = Reviewserializer(obj.reviews.all() , many = True)
        return serializer.data


class ShippingAddressSerializer (serializers.ModelSerializer) :
    class Meta :
        model = ShippingAddress
        fields = '__all__'

class OrderItemsSerializer (serializers.ModelSerializer) :
    class Meta :
        model = OrderItems
        fields = '__all__'
class OrderSerializer (serializers.ModelSerializer) :
    items = serializers.SerializerMethodField(read_only = True)
    shipping_address = serializers.SerializerMethodField(read_only = True)
    user = serializers.SerializerMethodField(read_only=True)
    class Meta :
        model = Order
        fields = '__all__'
    def get_items(self , obj) :
        items = obj.orderitems_set.all()
        serializer = OrderItemsSerializer(items , many =True)
        return serializer.data
    def get_shipping_address(self , obj) :
        try:
            address = ShippingAddressSerializer(obj.shippingAddress , many=False).data
        except :
            address = False
        return address
    def get_user(self , obj) :
        serializer = Userserializer(obj.user  , many=False)
        return serializer.data




```
