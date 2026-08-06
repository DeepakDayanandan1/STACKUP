# Write a program to check whether a given number exists in a list.

a=[]
n=int(input("Enter limit:"))
for i in range (n):
    a.append(int(input()))

b = int(input("Enter a number:"))

if b in a:
    print("Number exist in the list")
else:
    print("Number does not exist in the list") 