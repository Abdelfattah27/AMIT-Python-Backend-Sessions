"""
WSGI config for sessiononeproject project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
print("wsgi")
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sessiononeproject.settings')

application = get_wsgi_application()
