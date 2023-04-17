from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from .models import Student
import json
# Create your views here.

def hamada (request) : 
    return render( request , "index.html" , {"name" : "ahmed"})


class GetAllStudents(View) :
    def get (self , request ) :
        all_students = Student.objects.all() 
        all_students = list(all_students.values())
        return JsonResponse({"data" : all_students})
    def post(self , request) :
        data = json.loads(request.body)
        Student.objects.create(**data)
        return JsonResponse({"status":"created successfully"})  
class URDStudent(View):
    def get(self , request , id) :
        getted_student = Student.objects.filter(id = id).values()[0]
        return JsonResponse({"student" :getted_student })    
    def put(self , request , id) : 
        stu = Student.objects.filter(id = id) 
        data = json.loads(request.body) 
        stu.update(**data)
        return JsonResponse({"status" : "Updated Successfully"})
    def delete(self , request , id) : 
        Student.objects.get(id = id).delete()
        return JsonResponse({"status" : "Deleted Successfully"})

def students(request) :
    if request.method == "GET" :
        q = request.GET.get("name") or ""
        students = list(Student.objects.filter(name__contains = q ).values())
        return JsonResponse(students , safe=False)
    elif request.method == "POST" : 
        new_student = json.loads(request.body)
        stu = Student.objects.create(**new_student)
        return JsonResponse({""})
    else : 
        return JsonResponse({"message" : "BAD Request"})
  

def student(request , id) : 
    if request.method == "PUT" :
        stu = Student.objects.get(id = id)
        data = json.loads(request.body)
        stu.name = data["name"]
        stu.save()
        return JsonResponse({"status" : "Updated successfully"})
    elif request.method == "DELETE" :
        stu = Student.objects.get(id = id).delete()
        return JsonResponse({"status" : "deleted successfully"})
    elif request.method =="GET" : 
        stu = Student.objects.filter(id = id).values()[0]
        return JsonResponse({"student" :stu})
    else : 
        return JsonResponse({"message" : "BAD Request"})
  


    
