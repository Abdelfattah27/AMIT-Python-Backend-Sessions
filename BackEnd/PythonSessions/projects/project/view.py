from controller import Store 
my_store = Store()

 
def create_product() :
    name = input("Please Enter the product Name : ")
    price = input("Please Enter the product Price : ")
    count_in_stock = input("Please Enter the product Count : ")

    result = my_store.add_product(name , price ,count_in_stock )

    if result == True : 
        print("Added Successfully")
    else : 
        print("You have entered incorrect data")
def update_product() : 
    id = int(input("Please Enter the Id : "))
    name = input("Please Enter the product Name : ")
    price = input("Please Enter the product Price : ")
    count_in_stock = input("Please Enter the product Count : ")
    message = my_store.update_product(id , name , price , count_in_stock)
    print(message)

        
def display_all_products() :
    all_data = my_store.get_all()

    for product in all_data : 
        print(product)
        print("\n**********************************\n")

def delete_product() : 
    id=  int(input("Please enter the id of the product : "))
    status = my_store.delete_product(id)
    if status : 
        print("Deleted Successfully") 
    else : 
        print("Product Not Found")

def get_product() : 
    id=  int(input("Please enter the id of the product : "))
    product = my_store.get_by_id(id)
    if product : 
        print(product)
    else : 
        print("product Not Found")

def entry() : 
    my_store.read_data("data.txt")

    print("Welcome to out system")

    actions = {
        1: "For Creating Product In Out System" , 
        2: "For Get Product From Out System" ,
        3: "For Deleting Product From Out System" ,
        4: "For Update Product In Our System " ,
        5: "To Display All Products We Have" , 
        6: "To Close Out Program"
    }
    while True : 
        for key , val in actions.items() : 
            print(f"{key} : {val}")
        choice = int(input("Enter Your Choice : "))

        if choice == 1 : 
            create_product()
        elif choice == 2 : 
            get_product() 
        elif choice == 3 :
            delete_product()
        elif choice == 4 : 
            update_product()
        elif choice == 5 : 
            display_all_products() 
        elif choice == 6 :
            my_store.store_data("data.txt")
            break 
            # close_program()
        else :
            print("Bad Input")

    print("We Will Miss You")