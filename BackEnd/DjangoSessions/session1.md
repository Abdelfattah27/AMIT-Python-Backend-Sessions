# Django1

## syllabus

- into to network and osi model
- http request
- web pages and web servers
- django installation
- django overview
- django commends
- create hello world end point
- orm overview
- create a student class and map it to databases

## intro to network and osi model

The OSI (Open Systems Interconnection) model is a conceptual model for networking that divides the communication process into seven layers. Each layer has a specific set of functions and protocols that enable communication between devices on a network.

Here's a brief description of each layer and its role in the OSI model:

Physical Layer: This layer deals with the physical transmission of data over a network, including the transmission media, connectors, and signaling.

Data Link Layer: This layer is responsible for the reliable transfer of data between adjacent nodes on a network, and includes functions such as error detection and correction, flow control, and access control.

Network Layer: This layer handles the routing of data between different networks, including addressing and packet forwarding.

Transport Layer: This layer provides end-to-end reliable communication between applications running on different hosts, and includes functions such as segmentation, flow control, and error recovery.

Session Layer: This layer establishes, maintains, and terminates communication sessions between applications on different hosts.

Presentation Layer: This layer is responsible for the presentation of data to applications, including data encoding, compression, and encryption.

Application Layer: This layer provides services and interfaces for user applications to access network resources and services.

### Overview of HTTP (I expect you to not understand everything)

The HyperText Transfer Protocol (HTTP), the Web’s application-layer protocol, is at the heart of the Web. It is defined in [RFC 1945], [RFC 7230] and [RFC 7540]. HTTP is implemented in two programs: a client program and a server program. The client program and server program, executing on different end systems, talk to each other by exchanging HTTP messages. HTTP defines the structure of these messages and how the client and server exchange the messages. Before explaining HTTP in detail, we should review some Web terminology.
A Web page (also called a document) consists of objects. An object is simply a file—such as an HTML file, a JPEG image, a Javascrpt file, a CCS style sheet file, or a video clip—that is addressable by a single URL. Most Web pages consist of a base HTML file and several referenced objects. For example, if a Web page contains HTML text and five JPEG images, then the Web page has six objects: the base HTML file plus the five images. The base HTML file references the other objects in the page with the objects’ URLs. Each URL has two components: the hostname of the server that houses the object and the object’s path name. For example, the URL http://www.someSchool.edu/someDepartment/picture.gif has www.someSchool.edu for a hostname and /someDepartment/picture. gif for a path name. Because Web browsers (such as Internet Explorer and Chrome) implement the client side of HTTP, in the context of the Web, we will use the words browser and client interchangeably. Web servers, which implement the server side of HTTP, house Web objects, each addressable by a URL. Popular Web servers include Apache and Microsoft Internet Information Server.
HTTP defines how Web clients request Web pages from Web servers and how servers transfer Web pages to clients. We discuss the interaction between client and server in detail later, but the general idea is illustrated in Figure 2.6. When a user requests a Web page (for example, clicks on a hyperlink), the browser sends
HTTP request messages for the objects in the page to the server. The server receives the requests and responds with HTTP response messages that contain the objects.
HTTP uses TCP as its underlying transport protocol (rather than running on top
of UDP). The HTTP client first initiates a TCP connection with the server. Once the connection is established, the browser and the server processes access TCP through their socket interfaces. As described in Section 2.1, on the client side the socket interface is the door between the client process and the TCP connection; on the server side it is the door between the server process and the TCP connection. The client sends
HTTP request messages into its socket interface and receives HTTP response messages from its socket interface. Similarly, the HTTP server receives request messages from its socket interface and sends response messages into its socket interface. Once the client sends a message into its socket interface, the message is out of the client’s hands and is “in the hands” of TCP. Recall from Section 2.1 that TCP provides a reliable data transfer service to HTTP. This implies that each HTTP request message sent by a client process eventually arrives intact at the server; similarly, each HTTP response message sent by the server process eventually arrives intact at the client. Here we see one of the great advantages of a layered architecture—HTTP need not worry about lost data or the details of how TCP recovers from loss or reordering of data within the network. That is the job of TCP and the protocols in the lower layers of the protocol stack.
It is important to note that the server sends requested files to clients without storing any state information about the client. If a particular client asks for the same object twice in a period of a few seconds, the server does not respond by saying that it just served the object to the client; instead, the server resends the object, as it has completely forgotten what it did earlier. Because an HTTP server maintains no information about the clients, HTTP is said to be a stateless protocol. We also remark that the Web uses the client-server application architecture, as described in Section 2.1. A Web server is always on, with a fixed IP address, and it services requests from potentially millions of different browsers. The original version of HTTP is called HTTP/1.0 and dates back to the early 1990’s [RFC 1945]. As of 2020, the majority of HTTP transactions take place over
HTTP/1.1 [RFC 7230].

### HTTP with Non-Persistent Connections

Let’s walk through the steps of transferring a Web page from server to client for the case of non-persistent connections. Let’s suppose the page consists of a base HTML file and 10 JPEG images, and that all 11 of these objects reside on the same server.
Further suppose the URL for the base HTML file is
http://www.someSchool.edu/someDepartment/home.index
Here is what happens:

1. The HTTP client process initiates a TCP connection to the server
   www.someSchool.edu on port number 80, which is the default port number for HTTP. Associated with the TCP connection, there will be a socket at the client and a socket at the server.
   M02_KURO1557_08_SE_C02.indd 98 11/02/20 11:41 AM 2.2 • THE WEB AND HTTP 99
2. The HTTP client sends an HTTP request message to the server via its socket.
   The request message includes the path name /someDepartment/home
   .index. (We will discuss HTTP messages in some detail below.)
3. The HTTP server process receives the request message via its socket, retrieves
   the object /someDepartment/home.index from its storage (RAM or
   disk), encapsulates the object in an HTTP response message, and sends the
   response message to the client via its socket.
4. The HTTP server process tells TCP to close the TCP connection. (But TCP
   doesn’t actually terminate the connection until it knows for sure that the client
   has received the response message intact.)
5. The HTTP client receives the response message. The TCP connection terminates.Themessage indicates that the encapsulated object is an HTML file. The client extracts the file from the response message, examines the HTML file, and finds references to the 10 JPEG objects.
6. The first four steps are then repeated for each of the referenced JPEG objects.

### django installation

pip install django [Django](C:\Users\cm\AppData\Local\Programs\Python\Python310\Lib\site-packages\django)

### Basic commends

Here are some of the most commonly used management commands in Django:

- runserver: Starts the development server and serves your Django application. This command is used for testing and development purposes.

- makemigrations: Generates new database migration files based on changes to your Django models. This command is used when you make changes to your models and need to update the database schema.

- migrate: Applies pending database migrations to your database. This command is used to create or update the database tables based on the models defined in your Django project.

- createsuperuser: Creates a new superuser account for the Django admin site.

- startapp: Creates a new Django app within your project.

- shell: Launches the Python interactive shell with the Django environment preloaded.

- test: Runs your Django project's test suite.

- collectstatic: Collects all static files and copies them to the static file directory, as defined in your project's settings.

### How to create your own commend

To implement a management command in Django, you need to create a Python module in one of your app's management/commands subdirectories. The module should define a subclass of Django's BaseCommand class, and the subclass should define the handle() method to implement the command's logic.

Here's an example of a management command that prints "Hello, World!" to the console:

```python
# myapp/management/commands/hello.py

from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Prints "Hello, World!" to the console'

    def handle(self, *args, **options):
        print('Hello, World!')
```

In this example, we define a new management command called hello. This command inherits from BaseCommand and overrides the handle() method to print "Hello, World!" to the console.

Once you've defined your management command, you can run it using the python manage.py command. In this case, to run the hello command, you would run:

```python
python manage.py hello
```

This would execute the handle() method of the hello command and print "Hello, World!" to the console.

You can also pass arguments and options to management commands using the same syntax as command-line arguments. For example, if you define a command that takes a name argument, you can run it like this:

```python
python manage.py mycommand --name John
```

In this case, the name argument would be passed to the handle() method as a keyword argument with the value 'John'.

## ORM

ORM stands for Object-Relational Mapping, which is a technique used to map data from a relational database to objects in an object-oriented programming language. Essentially, it provides a way for developers to interact with a database using the language constructs of their programming language, rather than having to write SQL queries directly.

The main advantage of using an ORM is that it can make database interactions much easier and more intuitive for developers, by allowing them to work with objects and methods rather than raw SQL queries. This can lead to faster development times, easier maintenance, and fewer errors.

ORMs also provide a level of abstraction between the application code and the database, which can help with portability and scalability. Because the ORM handles the translation between the database schema and the application's object model, changes to the database schema can be made without requiring changes to the application code. This can make it easier to scale the application by adding additional database servers or changing the underlying database technology.
