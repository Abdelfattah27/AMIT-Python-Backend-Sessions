# asgi.py is a Python module that is automatically created when you start a new Django
# project using the django-admin startproject command. It provides the entry point for
# the ASGI (Asynchronous Server Gateway Interface) application server to interact with
# your Django project.

# ASGI is a specification for asynchronous web servers in Python, which is designed to 
# handle long-lived connections, such as websockets and streaming responses. asgi.py 
# defines a get_asgi_application() function that returns a Django ASGI application 
# instance, which can be used to handle incoming requests from the ASGI server.


# When you deploy a Django project using an ASGI server, the server needs to know how to 
# interact with your project's ASGI application. asgi.py provides the configuration 
# necessary to create an instance of your project's ASGI application, which the server 
# can then use to handle incoming requests.

# The asgi.py file sets the DJANGO_SETTINGS_MODULE environment variable, which tells
# Django which settings module to use. This is important because your project may have 
# different settings for different environments (e.g. development, staging, production), 
# and the ASGI server needs to know which settings to use.

# asgi.py also imports the get_asgi_application() function from Django's core.asgi module,
# which creates an instance of your project's ASGI application. This function uses the 
# DJANGO_SETTINGS_MODULE environment variable to determine which settings to use.

# Once the ASGI server has loaded the asgi.py module and called the get_asgi_application() 
# function, it has an instance of your project's ASGI application, which it can use to 
# handle incoming requests. The ASGI server is responsible for managing the network 
# connections and routing requests to your application.


"""
ASGI config for sessiononeproject project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
print("asgi")
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sessiononeproject.settings')

application = get_asgi_application()


# In this example, we import the get_asgi_application() function from Django's core.asgi 
# module and set the DJANGO_SETTINGS_MODULE environment variable to the project's settings
# module. We then call get_asgi_application() to create a new ASGI application instance, 
# and assign it to the application variable.

# This file is used when deploying a Django application with an ASGI server, such as
# Daphne or Uvicorn. When the server starts, it loads the ASGI application instance from
# asgi.py and uses it to handle incoming requests.

# Note that while asgi.py is automatically created by the django-admin startproject command,
# it is not used by the default development server (i.e. python manage.py runserver).
# To use ASGI with the development server, you can install the channels package and 
# run the server using python manage.py runserver ASGI.
