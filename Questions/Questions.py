""" 
1. Write a Python program to check whether a number is positive, negative, or zero.
2. Write a program to check whether a given number is even or odd.
3. Write a program to find the largest of two numbers using if-else.
4. Write a program to check whether a person is eligible to vote (age ≥ 18).
5. Write a program to check whether a given character is a vowel or consonant.
6. Write a program to check whether a year is a leap year or not.
7. Write a program to calculate student grade based on marks:
        ≥ 90 → A
        ≥ 75 → B
        ≥ 60 → C
        < 60 → Fail 
8. Write a program to check whether a number is divisible by 5 and 11.
9. Write a program to check whether a given number is a multiple of 3 or 7.
10. Write a program to find whether a given number is greater than 100.
"""



"""
if a > 0:
    print("The number is positive.")
elif a < 0:
    print("The number is negative.")
else:
    print("The number is zero.") 
"""


""" 
a = int(input("Enter a number:"))
if a % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.") 
"""


""" 
a,b = int(input("Enter first number: ")),int(input("Enter the second number: "))
if a > b:
    print(a," is the largest.")
else:
    print(b," is the largest.")
"""

""" 
a=input("Enter a character: ")
b=['a','e','i','o','u','A','E','I','O','U']

if a in b:
    print(a, "is a vowel.")
else:
    print(a, "is a consonant.")  
 """


""" 
a=int(input("Enter a year: "))
if a%4 == 0 and a%100!=0 or a%400 == 0:
    print(a," is a leap year.")
else:
    print(a," is not a leap year.")
"""


""" 
a=int(input("Enter the mark: "))
if a >= 90:
    print("Grade A")
elif a >= 75:
    print("Grade B")
elif a >= 60:
    print("Grade C")
else:
    print("You Failed!")
"""


""" 
a=int(input("Enter a number: "))
if a%5 == 0 and a%11 == 0:
    print(a," is divisible by 5 and 11.")
else:
    print(a," is not divisible by 5 and 11.") 
"""

""" 
a=int(input("Enter a number: "))
if a%3 == 0 and a%7 == 0:
    print(a," is multiple of 3 and 7.")
elif a%3 == 0:
    print(a," is multiple of 3.") 
elif a%7 == 0:
    print(a," is multiple of 7.") 
else:
    print(a," is not a multiple of 3 and 7.") 

"""

""" 
a=int(input("Enter a number: "))
if a > 100:
    print(a," is greater than 100.")
else:
    print(a," is not greater than 100.")
"""
