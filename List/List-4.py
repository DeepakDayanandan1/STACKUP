# Check whether the number 10 is present in the list.

a=[]
b=10
n=int(input("Enter limit:"))
for i in range (n):
    a.append(int(input()))
if b in a:
    print("Number 10 is present in the list.")
else:
    print("Number 10 is not present in the list.")

    