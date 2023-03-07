# Project: Bank Account Management System

**Project files** :

1. **account\.py**: defines the Account class and its properties and methods.
2. **checking_account.py**: defines the CheckingAccount class which is a subclass of Account and has additional properties and methods specific to a checking account.
3. **savings_account.py**: defines the SavingsAccount class which is a subclass of Account and has additional properties and methods specific to a savings account.
4. **bank\.py**: defines the Bank class which manages a collection of accounts, and provides methods to add, remove, and search for accounts, as well as to deposit, withdraw, and transfer funds between accounts.

**The project should achive this consepts :**

1. **Modularity**
   The project is organized into several modules to handle different parts of the bank account management system : you can go ahead as the files which mentioned before

2. **Encapsulation**
   The project utilizes encapsulation to keep the account information private and to prevent unauthorized access. The properties of the Account class are declared as private and can only be accessed through public methods.

3. **Inheritance**
   The project utilizes inheritance to create specialized account types that inherit from a base Account class. The CheckingAccount and SavingsAccount classes inherit properties and methods from the Account class, and can also override and extend them as needed.

4. **Polymorphism**
   The project utilizes polymorphism to allow the Bank class to manage a collection of accounts of different types. The add_account() method can accept instances of Account, CheckingAccount, and SavingsAccount, and the search_accounts() method can return instances of any of these types.

5. **Operator Overloading**
   The project utilizes operator overloading to allow for mathematical operations to be performed on account balances. The \_\_add\_\_() and \_\_sub\_\_() methods are defined in the Account class to allow for addition and subtraction of account balances.

**Hint To Start**

```python
# account.py
class Account:
    def __init__(self, account_number, account_holder, balance):
        self.__account_number = account_number
        self.__account_holder = account_holder
        self.__balance = balance

    def get_account_number(self):
        return self.__account_number

    def get_account_holder(self):
        return self.__account_holder

    def get_balance(self):
        return self.__balance

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient balance.")

    def __str__(self):
        return f"Account Number: {self.__account_number}\nAccount Holder: {self.__account_holder}\nBalance: {self.__balance}"

    def __add__(self, other):
        return self.__balance + other.__balance

    def __sub__(self, other):
        return self.__balance - other.__balance


# checking_account.py
from account import Account

class CheckingAccount(Account):
    def __init__(self, account_number, account_holder, balance, overdraft_limit):
        super().__init__(account_number, account_holder, balance)
        self.__overdraft_limit = overdraft_limit

    def get_overdraft_limit(self):
        return self.__overdraft_limit

    def set_overdraft_limit(self, overdraft_limit):
        self.__overdraft_limit = overdraft_limit

    def __str__(self):
        return f"Account Number: {self.account_number}"

```

[**Project repo**](https://github.com/Abdelfattah27/AMIT-Python-project)
