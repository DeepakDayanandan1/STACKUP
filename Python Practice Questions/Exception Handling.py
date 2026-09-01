# Exception Handling

""" 
Q15. Write a program that divides two numbers entered by the user, handling ZeroDivisionError.
Q16. Write a program that takes a number as input and handles ValueError if the user enters
non-numeric input.

Q17. Write a program with try, except, else, and finally blocks — demonstrate when each
executes.
Q18. Write a program that handles multiple exceptions (ZeroDivisionError, ValueError,
IndexError) in a single try block using multiple except clauses.
Q19. Write a program that opens a file that may not exist and handles FileNotFoundError gracefully
with a custom message.
Q20. Create a custom exception class InvalidAgeError and raise it if age entered is negative.
Q21. Write a program that validates user input (age between 1-120) in a loop, using try/except until
valid input is given. 
"""

""" 
try:
a,b=int(input("Enter two numbers: ")),int(input())
    c = a/b
    print("Result: ",c)
except ZeroDivisionError:
    print("ZeroDivisionError: Division by zero error") 
"""

""" 
try:
    a,b=int(input("Enter two numbers: ")),int(input())
    c = a/b
    print("Result: ",c)
except ValueError:
    print("ValueError: Wrong value type")  
"""