# def add_numbers(a  ,b=4) : 
#     """add two number"""
#     return a + b  

# print(add_numbers.__globals__)


# print(__name__ == "__main__")
# numbers = [1 , 2 , 3 , 4 , 5] 
# squeres = [2, 3] 
# for num in numbers : 
#     squeres.append(num ** 2) 
    
# print(num)

# numbers = [1 , 2 , 3 , 4 , 5] 
# squeres = [2, 3] 
# for num in numbers : 
#     squeres.append(num ** 2) 
    
# print(num)

# type()


# squeres += [num**2 for num in numbers if]
# # print(squeres)

# import json
# str = '{"name":"ahmed", "age":30, "city":"nasr-city"}'

# data = {'name': 'John', 'age': 30, 'city': 'New York'}

# print(data)
# # with open("ahmed.json" , "r" ) as file : 
        
#     dictionary = json.dump(file)
#     for key  in dictionary.values() :
#         print(key )
#     print(dictionary)


# def gen(n) :
#     start = 0 
#     while start < n :
#         yield start 
#         start+=1 
# print(list(gen(10)))
# for i in gen(10) :
#     print(i)


# class Person : 
#     counter = 1 
    
#     def __init__(self, *args, **kwargs):
#         self.hello = "ahmed"
    
#     # @staticmethod
#     @classmethod
#     def static_method(cls) : 
#         Person.counter += 1 

    
# hell = Person()
# hell.static_method() 

# print(hell.counter , hell.hello)
        
        
# class Person : 
#     def __new__(cls) :
#         obj = super().__new__(cls) 
#         obj.hello = "ahmed"
#         return obj
#     def __init__(self)  : 
#         print("init first")
    
# per = Person() 

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, other):
        return Vector(self.x * other.x, self.y * other.y)
    def __truediv__(self , other) : 
        return Vector(self.x / other.x , self.y / other.y)
    def __floordiv__(self , other) : 
        return Vector(self.x // other.x , self.y // other.y)
        

    def __str__(self):
        return f"({self.x}, {self.y})"
    
vec1 = Vector(4, 2) 
vec2 = Vector(2 , 3)
print(vec1 // vec2)

    