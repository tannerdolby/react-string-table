# This performs a very low level implementation of the built in Python API method .toUpperCase()
#mimic the .toUpperCase() function by creating our own method of converting a string to uppercase
# lowercase s in ASCII characters is Decimal: 115, Octal: 0161, Hex: 0x73
# uppercase S in ASCII code is Decimal: 83, Octal: 01

#chr() is a built in function that returns the string representing a character whose unicode is an integer.

testLet = chr(80)
print(testLet)
testLet1 = chr(112)
print(testLet1)

testLetter = ord('p')

print(testLetter)
testLetter1 = ord('P')
print(testLetter1)

letter1 = chr(ord('s')^0x20)
letter2 = chr(ord('t')^0x20)
letter3 = chr(ord('r')^0x20)
letter4 = chr(ord('o')^0x20)
letter5 = chr(ord('o')^0x20)
letter6 = chr(ord('k')^0x20)
print("The letters converted to uppercase are "+letter1+letter2+letter3+letter4+letter5+letter6)

