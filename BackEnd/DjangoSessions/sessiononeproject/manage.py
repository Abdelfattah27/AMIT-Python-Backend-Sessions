# manage.py is a command-line utility that is automatically 
# created when you start a new Django project using the django-admin startproject command.
# It is a Python script that provides a number of command-line tools for managing your Django project,
# such as creating database tables, running development servers, and creating new apps.

# When you run python manage.py from the command line, it executes the main() 
# function in manage.py. This function sets the DJANGO_SETTINGS_MODULE environment 
# variable to the project's settings module and then uses Django's 
# execute_from_command_line function to run the command specified in the command-line 
# arguments.

# For example, if you run python manage.py runserver, it will start the 
# development server and serve your Django application. Similarly,
# if you run python manage.py migrate, it will create or update the database 
# tables based on the models defined in your Django project.

# The manage.py script is an important tool for managing your Django project,
# and it is recommended that you use it instead of running Django commands directly from
# the command line. This is because manage.py automatically sets up the correct 
# environment variables and settings for your project, which can be tricky 
# to do manually.

#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sessiononeproject.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
