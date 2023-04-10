from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def say_hello(request) :
    name = request.GET.get("name")
    return HttpResponse(f"<h1>Hello {name}</h1>")
