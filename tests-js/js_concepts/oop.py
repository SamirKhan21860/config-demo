from datetime import datetime
# Example 1: Abstraction and Classes & Objects

class Animal:
    def __init__(self, name):
        self.name = name
        
    def speak(self):
        pass    # Abstract method

# Each subclass provides its implementation of the speak method, 
# demonstrating polymorphism.
class Dog(Animal):
    def speak(self):
        return "Woof!"


class Cat(Animal):
    def speak(self):
        return "Meow!"


dog = Dog("Buddy")
cat = Cat("Whiskers")

print(f"{dog.name} sasy: {dog.speak()}")
print(f"{cat.name} sasy: {cat.speak()}")

# Example 2: Encapsulation

# store user transactions
history = dict()

class BankAccount:
    def __init__(self, account_holder, balance=0):
        self._account_holder = account_holder   # Protected attribute
        self._balance = balance                 # Protected attribute
        
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            history["deposite"] = f"You've deposite {amount} at {datetime.now()}\n"
            return f"Deposite of {amount} successfull. Now balance: {self._balance}"
        else:
            return "Invalid deposit amount."
        
    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            history["withdraw"] = f"You've withdraw {amount} at {datetime.now()}\n"
            return f"Withdraw of {amount} successful. New balance: {self._balance}"
        else:
            return "Invalid withdrawal amount or insufficient balance."
    
    def historyTransactions(self):
        happened = ''
        if self.deposit:
            happened += history["deposite"]
        if self.withdraw:
            happened += history["withdraw"]
        return happened
        
# Usage
account1 = BankAccount("John Doe", 1000)

print(account1.deposit(480))
print(account1.withdraw(115))
print(account1.historyTransactions())


# Explanation:

# BankAccount is a class that demonstrates encapsulation by using protected attributes (_account_holder and _balance).
# The deposit and withdraw methods provide controlled access to the internal state of the object, enforcing rules for valid transactions.


# _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_


# OOP In Python
# OOP, or Object-Oriented Programming, is a programming paradigm that uses objects and classes for organizing and structuring code. It is designed to improve the efficiency and reusability of code by encapsulating data and methods into objects. Key concepts in OOP include:

# Classes and Objects:

# Class: A blueprint or a template that defines the attributes and behaviors common to all objects of a certain kind.
# Object: An instance of a class. It represents a real-world entity and encapsulates data and methods.
# Encapsulation:

# The bundling of data and methods that operate on the data into a single unit (class).
# Encapsulation helps in hiding the internal details of an object and restricting direct access to some of its components.
# Inheritance:

# A mechanism where a new class (subclass or derived class) inherits properties and behaviors from an existing class (superclass or base class).
# It promotes code reusability and establishes a relationship between classes.
# Polymorphism:

# The ability of a function or method to behave differently based on the context.
# Polymorphism allows objects of different classes to be treated as objects of a common base class.
# Abstraction:

# Simplifying complex systems by modeling classes based on real-world entities and their interactions.
# Abstraction involves focusing on essential properties and ignoring unnecessary details.