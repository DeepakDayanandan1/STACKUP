""" 
# Modules & Packages

Q1. Create a module mathutils.py with functions add(), sub(), mul(), div(). Import it into another
script and use each function.
Q2. Import only add and mul from mathutils using from ... import ....
Q3. Import mathutils with an alias mu and call mu.add(3, 4).
""" 

""" 
import mathutils as mu

print(mu.add(3,4))
print(mu.mul(3,4))   
"""

"""
Q4. Create a package folder structure:
    calc_pkg/
        __init__.py
        basic.py
        advanced.py
basic.py should have add, sub; advanced.py should have power, sqrt. Import and use both
modules from a script outside the package.
""" 

""" 
from calc_pkg import advanced,basic

print(advanced.sqrt(25))
print(basic.add(5,10)) 
"""

"""
Q5. Use the built-in math module to calculate factorial, square root, and ceiling of a number.
""" 
""" 
import math

print(math.factorial(4))
print(math.sqrt(4))
print(math.ceil(4.5)) 
""" 
"""
Q6. Use the random module to generate 5 random integers between 1 and 100.
"""
""" 
import random

for i in range(5):
    print(random.randint(1, 100)) 
"""

