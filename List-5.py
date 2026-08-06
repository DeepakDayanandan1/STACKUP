# Write a program to check if the sum of the first two elements is greater than the last element.

a=[]
n=int(input("Enter limit:"))
for i in range (n):
    a.append(int(input()))
b=a[0]+a[1]

if b > a[-1]:
    print("Sum of the first two elements is greater than the last element.")
else:
    print("Sum of the first two elements is greater than the last element.")