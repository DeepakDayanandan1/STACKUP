try:
    a = 5
    b = 0
    c = a/b
    print("Result :",c)
except ZeroDivisionError:
    """ print("Division by zero error") """


""" 
ZeroDivisionError   -  Dividing by zero.
ValueError          -  Wrong value type, like converting "abc" to int.
TypeError           -  Operation between incompatible data types.
IndexError          -  Accessing an invalid list index.
KeyError            -  Accessing a missing dictionary key.
FileNotFoundError   -  Trying to open a file that doesn't exist.
NameError           -  Using a variable that isn't defined. 
"""