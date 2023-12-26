# products = [
#     # {
#     #     "name" : "phone" , 
#     #     "price" : 12000.99 , 
#     #     "count_in-stock" : 23
#     # } ,
#     # {
#     #     "name" : "Car" , 
#     #     "price" : 120000.99 , 
#     #     "count_in-stock" : 10
#     # } 

# ]


class Product : 
    count = 0 
    def __init__(self , name = "" , count_in_stock = 0 , price = 0) :
        self.id = Product.count
        self.__name = name 
        self.__count_in_stock = count_in_stock
        self.__price = price
        Product.count += 1
    
    def set_count_in_stock(self , count_in_stock) : 
        if count_in_stock >= 0 : 
            self.__count_in_stock = count_in_stock 
            return True 
        else : 
            return False 
    def get_count_in_stock(self) :
        return self.__count_in_stock 
    
    
    def set_price(self , price) : 
        if price >= 0 : 
            self.__price = price 
            return True 
        else : 
            return False 
    def get_price(self) :
        return self.__price
    
    def set_name(self , name) : 
        if len(name) > 3 : 
            self.__name = name
            return True 
        else : 
            return False
    def get_name(self) : 
        return self.__name

    def __str__(self) : 
        return f"Id:{self.id}\nName: {self.__name}\nCount Available: {self.__count_in_stock}\nPrice {self.__price}"