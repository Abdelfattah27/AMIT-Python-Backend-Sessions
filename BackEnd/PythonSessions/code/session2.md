```python
# number = int(input("Please, Enter your grade : "))

# if number < 50  : 
#     print("Fail")
# if number % 3 == 0 :
#     print(str(number) + " Divisible by 3 ")
# else : 
#     print("Not Divisible")


# if number >= 85 :
#     print("Excellent")
# else : 
#     if number >= 75 : 
#         print("Very Good")
#     else : 
#         if number >= 65 : 
#             print("Good")
#         else : 
#             if number >= 50 :
#                 print("Passed")
#             else :
#                 print("Fail")

# if number >= 85 :
#     print("Excellent")
# elif number >= 75 : 
#     print("Very Good")
# elif number >= 65 : 
#     print("Good")
# elif number >= 50 :
#     print("Passed")
# else :
#     print("Fail")

# Logical operators : 
    # - and 
        # True and True => True 
        # True and False => False 
        # False and True => False 
        # False and False => False

    # - or 
        # True or True => True 
        # True or False => True 
        # False or True => True 
        # False or False => False
    # - not ~ Not the condition 
        # not True => False 
        # not False => True 

# number1 = int(input("Please Enter the first Number : "))
# number2 = int(input("Please Enter the second Number : "))
# number3 = int(input("Please Enter the third Number : "))
# number4 = int(input("Please Enter the forth Number : "))

# # if  number1 > number3 and  number1 > number2  and number1 > number4 : 
# # if  number1 > number2  and number1 > number3 and  number1 > number4 : 
# if  number1 > number4 and number1 > number2  and number1 > number3  : 
#     print(f"Number {number1} is the greater")
# elif number2 > number3 and number2 > number4 : 
#     print(f"Number {number2} is the greater")
# elif number3 > number4: 
#     print(f"Number {number3} is the greater")
# else : 
#     print(f"Number {number4} is the greater")

# False and True => False
# True and False => False

# number1 = int(input("Please Enter the first Number : "))
# number2 = int(input("Please Enter the second Number : "))

# if number2 != 0 and number1 % number2 == 0 :
# # if number1 % number2 == 0  and number2 != 0: 
#     print(f"{number1}  Divisible by {number2}")
# else : 
#     print(f"{number1 } Not Divisible by {number2}")

name = input("Please Enter your name : ")
# if name  : 
#     greating =  "Hello " + name 
# else : 
#     greating =  "Hello World"

# greating = "Hello " + name if name else "Hello world"
greating = "Hello" + (name or "World")
print(greating)  
    
```