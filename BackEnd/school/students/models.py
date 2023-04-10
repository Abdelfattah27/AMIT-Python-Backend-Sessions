from django.db import models
from django.contrib.auth.models import User
class Student (models.Model) :
    name = models.CharField(max_length=100 ,null=False ,blank=False , default= "hamada")
    description = models.TextField(null=True , default="just a human")
    age = models.IntegerField(default=0)
    GPA = models.FloatField(blank=False , default=0)
    birth_data = models.DateField(auto_now_add=True)
    email = models.EmailField(null=False , blank=False , unique=True)
    password = models.CharField(max_length=100)
    class Meta : 
        constraints = [
            models.CheckConstraint(check=models.Q(GPA__lte = 4) , name="gpa must be less than 4")
        ] 
        db_table = "student"

class Address (models.Model) : 
    city = models.CharField(max_length=100) 
    street = models.CharField(max_length= 100) 
    country = models.CharField(max_length= 100) 
    zip_code = models.CharField(max_length= 100)
    student_id = models.OneToOneField(Student , on_delete= models.CASCADE , null=True)
    class Meta:
        db_table = 'Address'
  
    
class PhoneNumber (models.Model) :
    number = models.CharField(max_length=12)
    student_id = models.ForeignKey(Student , on_delete= models.CASCADE)
    class Meta : 
        db_table = "PhoneNumber"
    
class Hobby (models.Model) : 
    name = models.CharField(max_length=100) 
    student_id = models.ManyToManyField(Student)
    class Meta : 
        db_table = "Hobby"
class Hamada (models.Model) : 
    _id = models.AutoField(primary_key=True , null= False) 
    name = models.CharField(max_length=100) 


class Product (models.Model) : 
    name = models.CharField(max_length=200 , null=False , blank=False , default="Product")
    image = models.ImageField(null=True , blank=True)
    brand = models.CharField(max_length=200 , null=False , blank=False) 
    category = models.CharField(max_length=100 , null= False , blank=False )
    description = models.TextField() 
    rating = models.FloatField(null=False , default=0) 
    num_reviews = models.IntegerField(default=0)
    price = models.FloatField(null=False , blank=False) 
    count_in_stock = models.IntegerField(default=0 , null=False ,blank=False)
    created_at = models.DateTimeField(auto_now_add=True )
    user = models.ForeignKey(User , on_delete=models.SET_NULL)

class Review (models.Model) : 
    product = models.ForeignKey(Product , on_delete=models.CASCADE)
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    rating = models.FloatField(null=False) 
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) 
    