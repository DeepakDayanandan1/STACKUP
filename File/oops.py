# __init__()

""" 
class student:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    def study(self):
        print(self.name," is studying")
        print(self.name," is ",self.age," years old.")
a = student("John",22)
a.study() 
"""

# encapsulation

""" 
class bank:
    def __init__(self):
        pass
    def balance(self):
        self.bal = 10000
        print("Balance: ",self.bal)
    def deposit(self):
        self.dep = int(input("Enter the amount to be credited: "))
        self.bal = self.bal+self.dep
        print("Amount credited:",self.dep)
        print("Balance:",self.bal)
a = bank()
a.balance()
a.deposit()
"""

# inheritance

""" 
class Animal:
    def eat(self):
        print("Animal is eating")
class Dog(Animal):
    def bark(self):
        print("Dog is barking")
class Cat(Dog):
    def Meow(self):
        print("Cat is drinking")
c = Dog()
c.eat()   # inherited from Animal
c.bark()  # inherited from Dog
c.Meow()  # Cat's own method 
"""

# polymorphism

""" 
class Dog:
    def sound(self):
        print("Bark")
class Cat:
    def sound(self):
        print("Meow")
c = Cat()
d = Dog()
c.sound()
d.sound() 
"""

# abstraction
""" 
from abc import ABC,abstractmethod

class Animal(ABC):
    @abstractmethod
    def eat(self):
        pass

class Dog(Animal):
    def eat(self):
        print("Animal is eating")
    def sound(self):
        print("Bark")

d = Dog()
d.eat()
d.sound() 
"""