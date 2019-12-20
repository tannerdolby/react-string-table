# This performs a very low level implementation of the built in Python API method .toUpperCase()
#mimic the .toUpperCase() function by creating our own method of converting a string to uppercase
# lowercase s in ASCII characters is Decimal: 115, Octal: 0161, Hex: 0x73
# uppercase S in ASCII code is Decimal: 83, Octal: 01

# chr() is a built in function that returns the string representing a character whose unicode is an integer.
# ord() is also a built in function that accepts a string of length 1 as an argument and returns the unicode code point representation.

#using ord to return integer unicode code point representation
testLetter = ord('s')
testLetter1 = ord('t')
testLetter2 = ord('r')
testLetter3 = ord('o')
testLetter4 = ord('o')
testLetter5 = ord('k')
#chr() function to save the integer ASCII value as its string representation
test = chr(testLetter)
test1 = chr(testLetter1)
test2 = chr(testLetter2)
test3 = chr(testLetter3)
test4 = chr(testLetter4)
test5 = chr(testLetter5)
# Converting lower case letters to upper case use bitwise operation XOR of 0x20
letter1 = chr(ord('s')^0x20)
upLet1 = ord('S')
letter2 = chr(ord('t')^0x20)
upLet2 = ord('T')
letter3 = chr(ord('r')^0x20)
upLet3 = ord('R')
letter4 = chr(ord('o')^0x20)
upLet4 = ord('O')
letter5 = chr(ord('o')^0x20)
upLet5 = ord('O')
letter6 = chr(ord('k')^0x20)
upLet6 = ord('K')
# printing results
print("The ASCII for each lower case letter is "+test+":"+str(testLetter)+" "+test1+":"+str(testLetter1)+
      " "+test2+":"+str(testLetter2)+" "+test3+":"+str(testLetter3)+" "+test4+":"+str(testLetter4)+" "+test5+": "+str(testLetter5))
print("The ASCII for each upper case letter is "+letter1+":"+str(upLet1)+" "+letter2+":"+str(upLet2)+
      " "+letter3+":"+str(upLet3)+" "+letter4+":"+str(upLet4)+" "+letter5+":"+str(upLet5)+" "+letter6+": "+str(upLet6))
print("Original lower case input string was "+test+test1+test2+test3+test4+test5)
print("The letters converted to uppercase are "+letter1+letter2+letter3+letter4+letter5+letter6)