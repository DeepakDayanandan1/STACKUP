""" 
1.	Write a function to reverse a string.

2.	Write a function to check whether a string is a palindrome.

3.	Write a function to count vowels in a string.

4.	Write a function to generate Fibonacci series up to n terms.

5.	Write a function to find the sum of elements in a list.

6.	Write a function to find the maximum element in a list.

7.	Write a function to remove duplicates from a list.

8.	Write a function to sort a list without using built-in functions.

9.	Write a function to count frequency of elements in a list.

10. Write a function to check whether two strings are anagrams.
"""

# Write a function to reverse a string.

""" 
a = "string"
rev = a[::-1]
print(rev) 
"""

# Write a function to check whether a string is a palindrome.

""" 
a = "malayalam"
b = a[::-1]
if a == b:
    print("The string is palindrome.")
else:
    print("The string is not palindrome.") 
"""


""" 
a = input("Enter a string: ")
def isPalindrome():
    b = a[::-1]
    if a == b:
        return "The string is Palindrome."
    else:
        return "The string is not Palindrome."
c = isPalindrome()
print(c) 
"""

# Write a function to count vowels in a string.

""" 
a = input("Enter a string: ")
b = ['a','e','i','o','u','A','E','I','O','U']
count = 0
for char in a:
    if char in b:
        count=count+1
print("Number of vowels: ",count) 
"""

# Write a function to generate Fibonacci series up to n terms.

""" 
n = int(input("Enter the limit: "))
f1 = 0
f2 = 1
print(f1)
print(f2)
for i in range(2,n):
    f3 = f1+f2
    f1 = f2
    f2 = f3
    print(f3)  
"""

#	Write a function to find the sum of elements in a list.

""" 
n = int(input("Enter the limit: "))
arr = []
for i in range(n):
    a = int(input())
    arr.append(a)

total = sum(arr)
print("Sum of elements:", total)
"""

# Write a function to find the maximum element in a list.

""" 
n = int(input("Enter the limit: "))
arr = []
for i in range(n):
    a = int(input())
    arr.append(a)

m = max(arr)
print("Maximum element:", m) 
"""

# Write a function to remove duplicates from a list.

""" 
n = int(input("Enter the limit: "))
arr1 = []
arr2 = []
for i in range(n):
    a = int(input())
    arr1.append(a)

for i in arr1:
    if i not in arr2:
        arr2.append(i)

print(arr2) 
"""

# Write a function to sort a list without using built-in functions.

""" 
n = int(input("Enter the limit: "))
arr = []
for i in range(n):
    a = int(input())
    arr.append(a)

for i in range(0,n):
    for j in range(i+1,n):
        if arr[i]>arr[j]:
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp

print("Sorted array: ",arr) 
"""
            
# Write a function to count frequency of elements in a list.

""" 
n = int(input("Enter the limit: "))
arr1 = []
arr2 = []
for i in range(n):
    a = int(input())
    arr1.append(a)

for i in arr1:
    if i not in arr2:
        arr2.append(i)
        print("Count of ",i,":",arr1.count(i)) 
"""

# Write a function to check whether two strings are anagrams.

""" 
a = input("Enter first word: ")
b = input("Enter second word: ")

if sorted(a) == sorted(b):
    print("The strings are Anagram")
else:
    print("The strings are not Anagram") 
"""