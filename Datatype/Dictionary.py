#Dictionary

Details = {
    "name": "Deepak",
    "age": 22,
    "locations": {
        "Alappuzha", "Trivandrum", "Kollam"
    }
}

""" 
print(Details)
print(Details["name"])
print(Details["locations"])

print(Details.get("name")) 

print(Details.keys())
print(Details.values())
print(Details.items())

Details.update({'age': 25})       #update values
print(Details)
"""

""" 
Details.pop("locations")          #delete keys
print(Details)
Details.popitem()                 #delete last inserted item
print(Details)
Details.clear()                   #delete everything
print(Details) 
"""

""" 
Backup = Details.copy()           #copy the data to a new variable
print(Backup) 
"""

""" 
Details.setdefault("Address", "123 Ambalapuzha")   #add new key value
print(Details) 
"""



