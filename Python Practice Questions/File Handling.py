# File Handling
""" 
Q7. Write a program to create a text file notes.txt and write 3 lines to it.
Q8. Read notes.txt and print its content line by line using a for loop.
Q9. Append a new line to notes.txt without deleting existing content.
Q10. Write a program that counts the number of words and lines in a text file.
Q11. Write a program to copy the content of one file into another file.
Q12. Write a program using with open(...) (context manager) to read a file — explain why with is
preferred over open()/close().
Q13. Write a program that reads a file and writes only lines containing a specific keyword into a new file.
Q14. Write a program to count how many times a given word appears in a file. 
"""

file = open("notes.txt","w")
file.write("One\nTwo\nThree")
file.close()

with open ("notes.txt","r") as file:
    for line in file:
        print(line,end="")

file = open("notes.txt","a")
file.write("\nFour")
file.close()

with open ("notes.txt","r") as file:
    content = file.read()
    print("\nNo. of words: ",len(content.split()))
    print("No. of lines: ",len(content.splitlines()))

with open ("notes.txt","r") as file:
    with open ("copy.txt","w") as file1:
        for line in file:
            file1.write(line)

""" key = input("Enter a keyword: ")
with open ("data.txt","r") as file:
    content = file.readlines()
    for line in content:
        if key in line:
            print(line)  """

word = input("Enter a word: ")
count = 0 
with open ("data.txt","r") as file:
    content = file.readlines()
    for line in content:
        if word in line:
            count=count+1
    print("Count of words: ",count)