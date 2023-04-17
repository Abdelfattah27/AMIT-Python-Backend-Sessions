from django.shortcuts import render
from django.http import JsonResponse
from .models import Student
import json
# Create your views here.
def students(request) :
    if request.method == "GET" :
        q = request.GET.get("name")
        
        students = list(Student.objects.filter(name__contains = q).values())
        return JsonResponse(students , safe=False)
    elif request.method == "POST" : 
        new_student = json.loads(request.body)
        stu = Student.objects.create(**new_student)
        return JsonResponse({"status" : "created successfully"})
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
  


    
