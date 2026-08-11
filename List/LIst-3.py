# Write a program to check if a list contains more than 5 elements.

a=[]
n=int(input("Enter limit:"))
for i in range (n):
    a.append(int(input()))
if len(a) > 5:
    print("List contains more than 5 elements.")
else:
    print("List does not contains more than 5 elements.")