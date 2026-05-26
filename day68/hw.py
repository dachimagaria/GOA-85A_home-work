# codewars 3

# def is_pangram(st):
#     st = st.lower()

#     for i in "abcdefghijklmnopqrstuvwxyz":
#         if i not in st:
#             return False
#     return True




# codewars 4

# def to_camelcase(text):
#     word = ""
#     words = []

#     for i in text:
#         if i == "-" or i == "":
#             words.append(word)
#             word = ""
#         else:
#             word += i

#     words.append(word)

#     result = ""

#     for i in words[1:]:
#         result += i.capitalize()

#     return words[0] + result






# codewars 5

# def multi(l_st):
#     result = 1
#     for i in l_st:
#         result *= i
#     return result

# def add(l_st):
#     result2 = 0
#     for i in l_st:
#         result2 += i
#     return result2

# def reverse(st):
#     return st[::-1]









# codewars 6

# def DNA_strand(dna):
#     result = ""
#     for i in dna:
#         if i == "A":
#             result += "T"
#         elif i == "T":
#             result += "A"
#         elif i == "C":
#             result += "G"
#         elif i == "G":
#             result += "C"
#     return result