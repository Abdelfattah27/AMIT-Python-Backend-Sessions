# Templates
## What templates 

```python


def data(request):
    from django.template import Template, Context

    li = [1, 2, 3, 4, 5]

    # Define your template string
    x = """
    {% for i in list %}
        <div>Hello {{ i }}</div>
    {% endfor %}
    """

    # Create a Template object
    template = Template(x)

    # Create a Context object with the provided context data
    context = Context({"list": li})

    # Render the template with the context
    w = template.render(context)
    from django.template import engines

    li = [1, 2, 3, 4, 5]

    # Define your template string
    x = """
    {% for i in list %}
        <h1>Hello {{ i }}</h1>
    {% endfor %}
    """

    # Get Django's default template engine
    template_engine = engines['django']

    # Render the template with the provided context
    template = template_engine.from_string(x)
    w = template.render({"list": li})
    # print(w)

    # return HttpResponse(w)
    return render(request, "index.html")

```
## Templates : it's the DTL - django teplates language - it supports

    1. inheretance **totally ot partially**
    2. filters
    3. tags
    4. variables
    5. comments

## DTL

    Engine it does
        1. loading : loading static files like html
        2. render : render the context and variables

### variables

    {{x}}

## Filter

    {{varibleName|filter : v1 v2  v3}}
    1. defalut          >   {{ name|default: "hamada" }}
    2. length           >   {{ name | length }}
    3. filesizeformat   >   {{ name | filesizeformat }} // change the number to file size format to be readed
    4. add              >   {{ num  | add : 2 }} // add number or concatinate two strings
    5. capfirst         >   {{ name | capfirst }} // make the first letter capitilize
    6. cut              >   {{ name | cut:" " }} // delete all spaces from the name
    7. date             >   {{ date | date:"D" }}
        D > short day
        l > long day
        d > day of the month
        j > day of the month wothout leading zeros
        m > month 2 digits with leading zero
        n > without leading zeros
        M > 3 letters from month
        F > full month
        y > 2 digits from year
        Y > 4 digits from year
    8. floatformat      > {{ number| floatformat }}
    9. upper            > {{ name  | upper }}
    10. lower           > {{ name  | lower }}
    11. random          > {{ name  | random }}
    12. slice           > {{ name  | slice:"0:2" }}

```dtl
<p>Name: {{ name|default:"hamada" }}</p>

<p>Length of name: {{ name|length }}</p>

<p>File size: {{ size|filesizeformat }}</p>

<p>Number + 2: {{ num|add:2 }}</p>

<p>Capitalized name: {{ name|capfirst }}</p>

<p>Without spaces: {{ name|cut:" " }}</p>

<p>Date: {{ date|date:"D, d M Y" }}</p>

<p>Formatted number: {{ number|floatformat }}</p>

<p>Uppercased name: {{ name|upper }}</p>

<p>Lowercased name: {{ name|lower }}</p>

<p>Random: {{ name|random }}</p>

<p>Slice: {{ name|slice:"0:2" }}</p>


```

## tags

    1. extends          > {% extends "index.html" %}
    2. include          > {% include "part.html" %}
    3. block            > {% block blockname %} {% end block blockname %}
    4. load static      > {% load static %}
    5. static "url"     > {% static "url" %}

1. extends: {% extends "base.html" %}
   This tag allows you to inherit a base template and override certain blocks. In this example, the current template extends from the base.html template.
   an example of using the extends tag in Django templates:

Suppose you have a base template named base.html which contains the overall structure of your website, and you want to extend it in a child template to add some specific content. Here's what your base.html file might look like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{% block title %}My Website{% endblock %}</title>
    {% block stylesheets %}
    <link rel="stylesheet" href="{% static 'css/styles.css' %}" />
    {% endblock %}
  </head>
  <body>
    <header>
      {% block header %}
      <h1>Welcome to my website!</h1>
      {% endblock %}
    </header>
    <main>{% block content %}{% endblock %}</main>
    <footer>
      {% block footer %}
      <p>Copyright &copy; 2023</p>
      {% endblock %}
    </footer>
  </body>
</html>
```

In this example, the base.html template has several blocks defined that can be overridden in a child template. For example, the title block is defined with a default value of "My Website", but can be overridden by a child template.

Now suppose you have a child template named home.html which extends the base.html template and adds some specific content to the content block. Here's what your home.html file might look like:

```dtl
{% extends 'base.html' %}

{% block content %}
    <h2>Welcome to my home page!</h2>
    <p>Here's some content for the home page...</p>
{% endblock %}
```

In this example, the child template uses the extends tag to inherit from the base.html template. The content block is then overridden to add some specific content for the home page.

When you render the home.html template, Django will first render the base.html template, and then insert the content from the content block of the child template into the appropriate location in the base.html template. The resulting HTML will contain the overall structure of the website defined in the base.html template, along with the specific content for the home page defined in the home.html template.

2. include: {% include "header.html" %}
   This tag includes the contents of another template file in the current template. In this example, the contents of the header.html file will be included in the current template.
   Let's say we have a reusable component for displaying a user's profile picture and username, and we want to include it on multiple pages throughout our site. We can create a template for this component called user_profile.html:

```javascript
<div class="user-profile">
  <img src="{{ profile_picture_url }}" alt="Profile Picture">
  <h3>{{ username }}</h3>
</div>
```

We can then include this template in other templates using the {% include %} tag:

```csharp
{% include 'user_profile.html' with profile_picture_url=user.profile_picture.url username=user.username %}
```

Here, we pass in the variables profile_picture_url and username to the user_profile.html template using the with keyword. These variables can come from the context passed to the parent template. The included template will render in place of the {% include %} tag in the parent template.

1. block: {% block content %} This is the main content {% endblock %}
   This tag defines a block of content that can be overridden in a child template that extends the current template. In this example, a block named "content" is defined with some default content.
   Let's say we have a base template called base.html that defines the overall structure of our site, with a header, navigation, and footer:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{% block title %}Default Title{% endblock %}</title>
  </head>
  <body>
    <header>
      <h1>My Site</h1>
    </header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/contact/">Contact</a></li>
      </ul>
    </nav>
    <main>{% block content %} {% endblock %}</main>
    <footer>
      <p>Copyright &copy; {{ year }} My Site</p>
    </footer>
  </body>
</html>
```

Notice the {% block %} tag used for the title and content sections of the template. These are called "block tags", and they define a section of the template that can be overridden by child templates that extend the base template.

For example, we can create a child template called home.html that extends the base.html template and overrides the title and content blocks:

```css
{% extends 'base.html' %}

{% block title %}Home{% endblock %}

{% block content %}
  <h2>Welcome to My Site!</h2>
  <p>This is the home page.</p>
{% endblock %}
```

Here, we use the {% extends %} tag to indicate that the home.html template extends the base.html template. We then override the title block to set the title of the page to "Home", and the content block to add some content to the page.

When we render the home.html template, Django will use the base.html template as the base and replace the contents of the {% block %} tags with the contents from the child template. So the final rendered output will have the title "Home" and the content "Welcome to My Site!" and "This is the home page." in the main section of the page.

1. load static: {% load static %}
   This tag loads the static file tag library, which allows you to include static files such as CSS and JavaScript in your templates.
   The {% load static %} and {% static 'filename' %} tags are used to include static files (such as CSS, JavaScript, and images) in your templates.

Here is an example:

Assuming we have a CSS file called style.css located in the static/css directory of our Django project. We want to include it in our base.html template which extends to other templates.

In base.html, we need to load the static template tag at the beginning of the file:

```dtl
{% load static %}
```

To include the CSS file in the template, we can use the {% static %} template tag like this:

```html
<link rel="stylesheet" type="text/css" href="{% static 'css/style.css' %}" />
```

In this example, href="{% static 'css/style.css' %}" will generate the full URL to our style.css file based on the STATIC_URL setting in settings.py.

Note that we need to specify the path to the file relative to the STATIC_ROOT directory. In this case, css/style.css is the path relative to STATIC_ROOT.

We can use the {% static %} tag to include other static files like images and JavaScript files.

2. static "url": {% static "css/styles.css" %}
   This tag generates the absolute URL to a static file in your project, using the path provided as an argument. In this example, the absolute URL to the CSS file named "styles.css" located in the "css" folder under the static folder will be generated.

in forms.py

```python
from django import forms

from student.models import Student
from django.forms import ValidationError

def check_first_name(value):
	if value[0] == 'm':
		raise ValidationError('m is forbidden')
def check_age(value) :
    if value < 0 or value > 100 :
        raise ValidationError('age must be between 0 to 100')

class StudentForm(forms.ModelForm) :
    first_name= forms.CharField(max_length=50 , validators=[check_age])
    last_name = forms.CharField(max_length=50)
    age = forms.IntegerField()
    email = forms.EmailField(max_length=70)
    url = forms.URLField(max_length= 100)
    class Meta :
        fields = "__all__"
        model = Student
```

in views.py

```python
from django.shortcuts import render , redirect
from django.views import View

from student.forms import StudentForm
from .models import Student
import json
# Create your views here.
class StudentView(View) :
    def get(self , request , *args, **kwargs)  :
        data = list(Student.objects.values())
        return render(request , "index.html" , {'data': data})

    def update(request , id) :

        if request.method == "GET" :
            data = Student.objects.filter(id=id).values()[0]
            return render(request  , "update.html" , data)
        elif request.method == "POST" :
            try :
                print(request.POST.dict()  )
                inst = Student.objects.filter(id = id)[0]
                form = StudentForm(request.POST.dict()   , instance=inst)
                if form.is_valid() :
                    form.save()
                    return redirect("/student")
                else :
                    print(form.errors)
                    return redirect("/update/" + str(inst.id))
            except Exception as ex :
                print(str(ex))
                return redirect("/student")
    def remove(request , id) :
        if request.method == "GET" :
            print("hello get")
            return render(request , "delete.html" , Student.objects.filter(id = id).values()[0])
        elif request.method == "POST":
            print("hello post")
            Student.objects.filter(id = id).delete() ;
            return redirect("/student")
    def add(request) :
        if request.method == "GET" :
            return render(request , "add.html")
        elif request.method == "POST" :
            try :
                form = StudentForm(request.POST.dict())
                if form.is_valid() :
                    form.save()
                    return redirect("/student")
                else :
                    print(form.errors)
                    return redirect("/add")
            except Exception as ex :
                print(str(ex))
                return redirect("/student")


    def delete(request , id) :
        Student.objects.filter(id = id).delete()
        return redirect("student/")

```

in templates
1 - add.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <form action="/add" method="post">
      {% comment %} {% csrf_token %} {% endcomment %}
      <div class="form-group">
        <label for="first_name">first_name</label>
        <input class="form-control" type="text" name="first_name" />
        <label for="last_name">last_name</label>
        <input class="form-control" type="text" name="last_name" />
        <label for="age">age</label>
        <input class="form-control" type="number" name="age" />
        <label for="url">url</label>
        <input class="form-control" name="url" type="text" />
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary d-flex justify-content-center align-items-center"
      >
        Submit
      </button>
    </form>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

2. delete.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <form action="/delete/{{id}}" method="post">
      <label>Are you sure you want to delete this student ? </label>
      <button class="btn btn-danger" type="submit">Delete</button>
      <button class="btn btn-primary" type="submit">
        <a href="/student">Cancel</a>
      </button>
    </form>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

3. index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />

    <title>Document</title>
  </head>
  <body>
    <table class="table">
      <thead>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>age</th>
          <th>email</th>
          <th>url</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {% for i in data %}
        <tr>
          <td>{{ i.first_name }}</td>
          <td>{{ i.last_name }}</td>
          <td>{{ i.age }}</td>
          <td>{{ i.email }}</td>
          <td>{{ i.url }}</td>
          <td> <button class="btn btn-primary"><a href="/update/{{i.id}}">Update<a/></button></td>
          <td> <button class="btn btn-danger"><a href="/delete/{{i.id}}">Delete<a/></button></td>
        </tr>
         {% endfor %}
      </tbody>
    </table>
    <button class="btn btn-secondary"><a href="/add">ADD</a></button>
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

    4. update.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />

    <title>Document</title>
  </head>
  <body>
    <table class="table">
      <thead>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>age</th>
          <th>email</th>
          <th>url</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {% for i in data %}
        <tr>
          <td>{{ i.first_name }}</td>
          <td>{{ i.last_name }}</td>
          <td>{{ i.age }}</td>
          <td>{{ i.email }}</td>
          <td>{{ i.url }}</td>
          <td> <button class="btn btn-primary"><a href="/update/{{i.id}}">Update<a/></button></td>
          <td> <button class="btn btn-danger"><a href="/delete/{{i.id}}">Delete<a/></button></td>
        </tr>
         {% endfor %}
      </tbody>
    </table>
    <button class="btn btn-secondary"><a href="/add">ADD</a></button>
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

[**Link the Repo**](https://github.com/Abdelfattah27/CRUDOdsDjangoTemplates)
