from django.urls import path 
from . import views

urlpatterns = [
    path("" , views.students) , 
    path("<int:id>" , views.student) , 
    path("class/" , views.GetAllStudents.as_view()) , 
    path("class/<int:id>" , views.URDStudent.as_view()) ,
    path("index/" , views.hamada) , 
    path("add/" , views.add_student) , 
    path("update/<int:id>/" , views.update_student) , 
    path ("delete/<int:id>/" , views.delete_student)
]
