from django import forms
from .models import Student
def validate_name(value) :
    if not value.isalpha() : 
        raise forms.ValidationError("name should be alphabetic")
def validate_age (value) : 
    if value < 0 or value > 100 : 
        raise forms.ValidationError("The man is already dead ")

class StudentForm(forms.ModelForm) : 
    name = forms.CharField(required=True , max_length=100 , validators=[validate_name])
    age = forms.IntegerField(required=True , validators=[validate_age])
    class Meta : 
        model = Student
        fields =  "__all__" #["name" , "age" , "description"]
class StudentUpdateForm(forms.ModelForm) : 
    name = forms.CharField(required=True , max_length=100 , validators=[validate_name])
    age = forms.IntegerField(required=True , validators=[validate_age])
    class Meta : 
        model = Student
        fields = ["name" , "age" , "description" , "age" , "GPA"] #["name" , "age" , "description"]
    