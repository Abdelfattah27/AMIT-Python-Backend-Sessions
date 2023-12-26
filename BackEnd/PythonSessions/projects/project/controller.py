# from model import products
from model import Product
import json 


class Store: 
    def __init__ (self) : 

        self.products = [] 
    
    def store_data(self , file_name) : 
        data = [] 
        for product in self.products : 
            dict_product = {
                "name" : product.get_name() , 
                "price" : product.get_price() ,
                "count_in_stock" : product.get_count_in_stock()
            }
            data.append(dict_product)

        dict_product = str({"data" : data}) 
        dict_product = dict_product.replace("'" , '"')  
        with open(file_name , "w") as file:
            file.write(dict_product) 
    








        


    
    def check_date(self , name , price , count_in_stock  , product) : 
        count_in_stock_state = product.set_count_in_stock(int(count_in_stock))
        price_state = product.set_price(float(price))
        name_state = product.set_name(name)
        
        return count_in_stock_state and price_state and name_state


    def add_product(self , name , price , count_in_stock) : 
        new_product = Product()
        # count_in_stock_state = new_product.set_count_in_stock(int(count_in_stock))
        # price_state = new_product.set_price(float(price))
        # name_state = new_product.set_name(name)
        if self.check_date( name , price , count_in_stock , new_product) : 
            self.products.append(new_product)
            return True 
        else : 
            return False
    def get_all(self) :
        return self.products 
    
    def get_by_id (self , id) :
        for product in self.products :
            if product.id == id : 
                return product 
            
        return None
    def delete_product(self , id) : 
        product = self.get_by_id(id) 
        if product : 
            self.products.remove(product)
            return True 
        else : 
            return False

    
    def update_product(self , id , name , price , count_in_stock) : 
        product = self.get_by_id(id) 
        if product : 
            # count_in_stock_state = product.set_count_in_stock(int(count_in_stock))
            # price_state = product.set_price(float(price))
            # name_state = product.set_name(name)
            if self.check_date(name , price ,count_in_stock , product): 
                return "Updated Successfully" 
            else :
                return "Wrong Data"
        else : 
            return "No Product Found"
        
    def read_data(self , file_name) : 
        with open(file_name , "r") as file :
            data = file.read()
            data_dict = json.loads(data)
            products = data_dict["data"]
            for product in products : 
                self.add_product(name= product["name"] , price= product["price"] , count_in_stock=product["count_in_stock"])



def add_to_model (name , price , count_in_stock) :
    
    price = float(price)
    count_in_stock = int(count_in_stock) 

    if price >= 0 and count_in_stock >= 0 and name != "" :
        new_product = {
            "name" : name , 
            "count_in_stock" : count_in_stock , 
            "price" : price 
        } 
        products.append(new_product)
        return True 
    else :
        return False
    

def display_all():
    return products

def check_product(id) : 
    my_product = None 
    for product in products : 
        if product.get("id") == id : 
            my_product = product 
            break 
    
    if my_product : 
        return str(my_product)
    else :
        return 'Product Not Found'



    