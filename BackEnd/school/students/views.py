from django.shortcuts import render , redirect
from django.http import JsonResponse
from django.views import View
from .models import Student
import json
from .forms import StudentForm , StudentUpdateForm
from django.utils import timezone
# Create your views here.

def delete_student(request , id) : 
    if request.method == "GET" : 
        return render(request , "delete.html" , {"id" : id})
    elif request.method == "POST" : 
        Student.objects.get(id = id).delete() 
        return redirect("/student/index")
    

def add_student(request) : 
    if request.method == "GET" :
        return render(request , "create.html")
    
    elif request.method == "POST" : 
        data = request.POST.dict() # json.loads(request.body)
        form = StudentForm(data= data)
        if form.is_valid() :
            form.save()
            return redirect("/student/index/")

        else : 
        
            return render(request , "create.html" , {"form" : form})
        
def update_student(request , id) : 
    if request.method == "GET" :
        student = Student.objects.filter(id = id).values()[0] 
        return render(request , "update.html" , {"student" : student })
    
    elif request.method == "POST" : 
        data = request.POST.dict() # json.loads(request.body)
        inst = Student.objects.get(id = id)
        form = StudentUpdateForm(data= data , instance=inst )
        if form.is_valid() :
            form.save()
            return redirect("/student/index/")
           
        else : 
            return render(request , "create.html" , {"form" : form})
       
        
        
def hamada (request) : 
    data = list(Student.objects.values())
    return render( request , "index.html" , {"students" :data})


class GetAllStudents(View) :
    def get (self , request ) :
        all_students = Student.objects.all() 
        all_students = list(all_students.values())
        return JsonResponse({"data" : all_students})
    def post(self , request) :
        data = request.POST.dict() # json.loads(request.body)
        form = StudentForm(data = data)
        if form.is_valid() :
            form.save()
            return JsonResponse({"data" : form.data})
        else : 
            return JsonResponse({"error" : form.errors})
        # Student.objects.create(**data)
        # return JsonResponse({"status":"created successfully"})  
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
  


    
