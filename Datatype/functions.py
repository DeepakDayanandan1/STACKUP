""" 
a = ['apple', 'banana',8.4,5,6]
print(len(a))  #len
"""

""" 
b = [9,8,5,6] 
print(max(b))   #max 
print(min(b))   #min
print(sum(b))   #sum
"""

""" 
a="deepak"
print(list(a))  #list name  
"""

""" 
a = [False, True, True]
print(all(a))  #all function 
print(any(a))  #any function  
"""

""" 
mark = [70,65,35,50,90,40]
result= any(mark >= 50 for mark in mark)
print(result)
"""    

""" 
#enumerate
a = ['apple','orange','cherry','mango','pineapple']
for index,name in enumerate(a):
    print(index,name)
"""

""" 
#zipcode
fruit = ['apple','orange','cherry','mango','pineapple']
price = [70,65,35,50,40]
calculate = zip(fruit,price)
print(list(calculate)) 
"""

""" 
a = ['apple','orange','cherry','mango']
a.append('pineapple')        #append
a.insert(2,'kiwi')           #insert
a.extend(['A','B','C','D'])  #extend
a.remove('orange')           #remove
a.pop()                      #pop
a.clear()                    #clear
print(a) 
"""


""" 
a = [70,65,50,35,50,40]
print(a.count(50))      #count
print(a.index(40))      #index
a.sort()                #sort ascending order 
a.sort(reverse=True)    #sort descending order 
print(a) 
"""

"""
#set
a = {70,65,50,35,50,40}
b=a.copy()
print(b)
a.add(100)
a.remove(65)
a.update([2,3])
a.discard(40)       #remove
print(a) 
"""

""" 
a = {70,65,50,40}
b = {35,20,45,40}
c = a.union(b)          #union
c = a.intersection(b)   #intersection
print(c) 
"""

""" 
a = {10,20,30,40}
b = {15,30,45,60}
c = a.difference(b)             #difference
c = a.symmetric_difference(b)   #symmetric_difference
print(c) 
"""

