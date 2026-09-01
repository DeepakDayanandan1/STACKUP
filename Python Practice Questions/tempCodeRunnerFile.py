
try:
    a,b=int(input("Enter two numbers: ")),int(input())
    c = a/b
    print("Result: ",c)
except ValueError:
    print("ValueError: Wrong value type")  
