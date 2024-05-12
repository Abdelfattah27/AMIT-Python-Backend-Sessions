## 1. first session
  1. **What's the python primitive types**
     1. int
     2. str
     3. float
     4. bool
     5. None
  2. list the falsy values in python  
     1. - False
     2. ""
     3. 0
     4. 0.0
     5. None
     6. []
     7. {}
     8. ()
  3. what's the between / and // 
     1. / used for float division and // used for integer division 

### 2. Second Session
1. **Difference between Hard Copy and Deep Copy**
   - **Hard Copy:** Hard copy is a duplication of data in memory that is separate from the original. Changes made to the hard copy do not affect the original data.
   - **Deep Copy:** Deep copy creates a new object and recursively inserts copies into it of the objects found in the original. Changes made to the deep copy do not affect the original data, and vice versa.

2. **Difference between pop and remove in lists**
   - **pop:** Removes and returns the item at the specified index. If no index is specified, it removes and returns the last item in the list.
   - **remove:** Removes the first occurrence of the specified value from the list.

3. **How to Get the Greatest Number in a List?**
   - Use the `max()` function to find the greatest number in a list. Example: `max(my_list)`
```python
li = [1,2,3,4,5]
# first sol : 
max_num = max(li)
# second sol 

max_num = -1 
for (ele in li) : 
    if ele > max_num : 
        max_num= ele 
print(max_num)

```

### 3. Third Session
1. **Difference between List and Set**
   - **List:** Ordered collection of items where duplicates are allowed. Lists are mutable.
   - **Set:** Unordered collection of unique items where duplicates are not allowed. Sets are mutable.

2. **How to Set a Default Value for Parameter in Methods in Python?**
   - You can set default values for parameters in Python methods by assigning a value to the parameter in the method definition. Example: `def my_method(param=value):`

3. **How to Write to a File in Python?**
   - Open the file in write mode (`'w'`), `'a'` to append, or `'r+'` for both reading and writing. Then use methods like `write()` or `writelines()` to write to the file.

### 4. Fourth Session
1. **What's Inheritance in Python and Does It Use Multiple Inheritance?**
   - Inheritance is a mechanism in Python where a new class inherits properties and behaviors from an existing class. Python supports multiple inheritance, where a class can inherit from multiple base classes.

2. **What's Encapsulation?**
   - Encapsulation is the bundling of data (attributes) and methods (functions that operate on the data) that act on the data into a single unit, typically a class. It hides the internal state of an object from the outside.

3. **What's Polymorphism?**
   - Polymorphism allows methods to do different things based on the object that they are acting upon. In Python, polymorphism is achieved through method overriding and method overloading.
