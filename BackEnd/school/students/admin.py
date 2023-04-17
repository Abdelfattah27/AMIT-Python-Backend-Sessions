from django.contrib import admin
from .models import Student , PhoneNumber
# Register your models here.



class PhoneNumberTabular (admin.TabularInline):
    model = PhoneNumber

@admin.register(Student)
class StudentAdmin (admin.ModelAdmin) :
    list_display = ["id" , "name" , "email" , "age"]
    list_editable = ["name" , "email" , "age"]
    ordering = ["-name" , "-age"]
    list_filter = ["name" , "GPA"]
    search_fields = ["name__contains" , "GPA__lte"]
    inlines = [PhoneNumberTabular]
    
