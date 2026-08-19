class student:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    def study(self):
        print(self.name," is studying")
        print(self.name," is ",self.age," years old.")
a = student("John",22)
b = student("Jude",22)
a.study()
b.study()