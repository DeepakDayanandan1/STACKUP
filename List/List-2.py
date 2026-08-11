# Check whether the first element of a list is greater than the last element.

a=[]
n=int(input("Enter limit:"))
for i in range (n):
    a.append(int(input()))
if a[0] > a[-1]:
    print("First element of a list is greater than the last element")
else:
    print("First element of a list is not greater than the last element")
