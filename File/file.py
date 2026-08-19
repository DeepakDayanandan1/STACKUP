
file = open("data.txt","r")
content = file.read()        
#content = file.readline()   #single line can be read using readline() method
#content = file.readlines()   #multiple lines can be read using readlines() method
#file.write("Welcome to Stackup!\nHello Deepak.")
print(content)

file.close() 



with open("data.txt","r") as file:
    content = file.read()
    print(content)

