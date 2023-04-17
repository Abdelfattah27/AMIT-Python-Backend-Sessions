from django.urls import path 
from . import views

urlpatterns = [
    path("" , views.students) , 
    path("<int:id>" , views.student) , 
    path("class/" , views.GetAllStudents.as_view()) , 
    path("class/<int:id>" , views.URDStudent.as_view()) ,
    path("hamada/" , views.hamada)
]
