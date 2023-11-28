```python
# x = "Hello" 
# print(x[0])
# print(x[1])
# y = x 
# x = y 

# # print(y)
# x = "World"
# print(x)
# print(y)
# x = 3 
# x = "hello"
# x[0] = "m"
# print(x)
# age = 30
# name = "ahmed"
# x = f"""Hello
# {name}
# sdl;kf
# sdfkj
# dskfld
# dflkds
# dsfkds
# gae = {age}
# World"""
# print(x)

# print (f"welcome { name or 'hamada' } whose age = {age or 30}")

# x = 4 
# x += 7 
# welcome[start:stop:step]
# welcome = "hello"
# welcome += " world" 
# print(welcome)
# welcome = "Hello World" 
# print(welcome[0 : 7 ])
# print(welcome[1 : 7 ])
# print(welcome[1 :  ])
# print(welcome[: 7])
# length = len(welcome)

# print(welcome[length-2 : ])

# print(welcome[1:8:2])
# print(welcome[-3 : ])
# print(welcome[-3 : -1])
# print(welcome[5 : 0 : -1])
# print(welcome[ : : -1])

# stu0  , stu1 , stu2 , stu3 , stu4 , stu5  = 1 , 2 , 3 , 4 , 5  , 6
# stu = [1 , 2 , 3 , 4 , 5  , 6 ]
# stu[0] = "hamada"
# print(stu[5])

# data = "Helloworld"
# print(data.upper())
# print(data.lower())
# print(data.casefold())
# print(data.title())
# print(data.swapcase())
# print(data.capitalize())

# print(data.count("hello"))
# print(data.startswith("w"))
# print(data.endswith("d"))

# print(data.isupper())
# print(data.islower())
# print(data.isalpha())
# print("   ".isspace())
# print("123²".isdigit())
# print("123²".isdecimal())
# print("123.1".isnumeric())

# data = data.lower()
# print(data)
data = "Hello world" # "Hemlo World"
# print(data.find("H"))
# print(data.find("m"))
# print(data.index("H"))
# print(data.index("m"))
# idx = data.find("l")
# output = data[:idx] + "m" + data[idx+1 : ]
# print(output)
# print(data.find("l"))
# print(data.replace("l" , "m" , 1))

# print(data.strip())
# print(data.lstrip())
# print(data.rstrip())

# print("  abd".strip() == "abd")

# print(data.rfind("l"))

# print(f"Hello {data}")

# name = "ahmed"
# age= 30 
# welcome_message = "Hello {} whose age = {}"

# welcome_message.format(name , age)

# print(welcome_message)
# ["" , " " , " " , " "]

data  = """I'm full stack developer
with 2 years experience
haamda ahmed
Ali"""

# ["I'm", 'full', 'stack', 'developer', 'with', '2', 'years', 'experience']
num_of_lines = len(data.split("\n"))
print(num_of_lines)
num_of_words = len(data.split(" ")) + data.count("\n")
num_of_chars = len(data) - data.count(" ") - data.count("\n")

print(f"""
Num of Chars = {num_of_chars}
num_of_words = {num_of_words}
num of lines = {num_of_lines}
""")

```