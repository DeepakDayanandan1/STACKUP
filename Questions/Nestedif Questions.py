"""
1. Write a program to find the largest of three numbers using nested if.
2. Write a program to check whether a number is positive, negative, or zero using nested if.
3. Write a program to check whether a student has passed or failed:
        If marks ≥ 40 → Pass
        If passed and marks ≥ 75 → Distinction
4. Write a program to check whether a person is eligible for a loan:
        Age ≥ 21
        Salary ≥ 25,000
5. Write a program to calculate electricity bill using nested if:
        Units ≤ 100 → ₹2/unit
        Units ≤ 200 → ₹3/unit
        Units > 200 → ₹5/unit
6. Write a program to check whether a given year is a leap year using nested if.
7. Write a program to find whether a number is divisible by both 3 and 5, else check divisible by only one.
8. Write a program to calculate bonus:
        If experience > 5 years
        Salary > 50,000 → 10% bonus
        Else → 5% bonus
9. Write a program to check login validation:
        If username is correct
        Check password
10. Write a program to find the type of triangle: 
"""




""" a = int(input("Enter first number: "))
b = int(input("Enter the second number: "))
c = int(input("Enter the third number: "))
if a > b and a > c: 
    print(a," is the largest.")
elif b > c:
    print(b," is the largest.")
else:
    print(c," is the largest.")  """


""" 
age = int(input("Enter the age: "))
salary = int(input("Enter the salary: "))
if age >= 21 and salary>=25000:
    print("Eligible for loan.")
else:
    print("Not Eligible for loan.") 
"""


""" a = int(input("Enter the units: "))
if a <= 100:
    price=a*2
    print("Price is Rs.",price)
elif a <= 200:
    price=a*3
    print("Price is Rs.",price)
else:
    price=a*5
    print("Price is Rs.",price)
 """


""" 
exp = int(input("Enter experience: "))
salary = int(input("Enter the salary: "))
if exp > 5 and salary > 50000:
    bonus = salary * 0.1
    print("Bonus = ₹",bonus)
else:
    bonus = salary * 0.05
    print("Bonus = ₹",bonus)
 """


""" 
a,b,c = int(input("Enter 3 lengths of a triangle: ")),int(input()),int(input())
if a == b == c:
    print("The triangle is Equilateral.")
elif a == b or b == c or a == c:
    print("The triangle is Isosceles.")
else:
    print("The triangle is Scalene.")
 """        