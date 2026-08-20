""" 
Create a file and write text into it.
Create sample.txt
Write 5 lines into the file.
Read and display the contents of a file.
Count the number of lines in a file.
Count the number of words in a file.
Count the number of characters in a file.
Copy one file into another file.
source.txt → destination.txt
Append data to an existing file.
Check whether a file exists or not.
Read a file line by line and print each line.
Display only the lines containing a particular word. 
"""

# Create a file and write text into it.
# Create sample.txt
# Write 5 lines into the file.

file = open("sample.txt","w")
file.write("One\nTwo\nThree\nFour\nFive")
file.close()

# Read and display the contents of a file.

file = open("sample.txt","r")
content = file.read()
print(content)
file.close()

# Count the number of lines in a file.

file = open("sample.txt","r")
n = file.readlines()
print("Number of lines:", len(n))
file.close()

# Count the number of words in a file.

file = open("sample.txt","r")
content = file.read()
words = content.split()
print("Number of words:", len(words))
file.close()

# Count the number of characters in a file.

file = open("sample.txt","r")
content = file.read()
print("Number of characters:", len(content))
file.close()

# Copy one file into another file.
# source.txt → destination.txt

with open("sample.txt","r") as source_file:
    with open("destination.txt","w") as destination_file:
        for line in source_file:
            destination_file.write(line)
file.close()

# Append data to an existing file.

file = open("sample.txt","a")
file.write("\nSix\nSeven")
file.close()

# Check whether a file exists or not.

import os

if os.path.exists("sample.txt"):
    print("File exists.")
else:
    print("File does not exist.")

# Read a file line by line and print each line.

file = open("sample.txt","r")
for line in file:
    print(line.strip())         #strip() - Each line usually contains a \n (newline). strip() removes it.
file.close()

# Display only the lines containing a particular word. 

word = input("Enter the word: ")
file = open("sample.txt","r")
for line in file:
    if word in line:
        print(line.strip())
file.close()