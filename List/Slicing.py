""" 
# 1. int 'pyt' from 'python'. Output: pyt
# 2. Print 'thon' from 'python'. Output: thon
# 3. Print 'comp' from 'computer'. Output: comp
# 4. Print 'puter' from 'computer'. Output: puter
# 5. Print 'educ' from 'education'. Output: educ
# 6. Print 'tion' from 'education'. Output: tion
# 7. Print all characters except the first one from 'keyboard'. Output: eyboard
# 8. Print all characters except the last one from 'keyboard'. Output: keyboar
# 9. Print the last 4 characters of 'programming'. Output: ming
# 10. Print 'gram' from 'programming'. Output: gram 
"""

a="python"
print(a[0:3])
print(a[2:])

b="computer"
print(b[0:4])
print(b[3:])

c="education"
print(c[0:4])
print(c[5:])

d="keyboard"
print(d[1:])
print(d[:7])

e="programming"
print(e[7:])
print(e[3:7])

"""
# 11. Print every second character of 'python'. Output: pto
# 12. Print every second character starting from index 1 of 'computer'. Output: optr
# 13. Reverse 'python'. Output: nohtyp
# 14. Reverse 'keyboard'. Output: draobyek
# 15.  Print the first five characters of 'programming' in reverse. Output: gorp
# 16.  Print every third character of 'education'. Output: eci
# 17. Print the middle four characters of 'computer'. Output: mput
# 18. Print 'board' from 'keyboard' using negative indices. Output: board
# 19. Print every second character in reverse from 'programming'. Output: gimrop
# 20. Check whether 'madam' is a palindrome using slicing. Output: True 
 """


print(a[::2])
print(b[1::2])
print(a[::-1])
print(d[::-1])
print(e[3::-1])
print(c[::3])
print(c[2:6])
print(d[-5:])
print(e[::-2])


name="madam"
name1=name[::-1]
if name == name1:
    print("True")
else:
    print("False")


