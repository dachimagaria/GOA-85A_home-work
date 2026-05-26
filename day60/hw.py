# def digital_root(n):

#     while n >= 10:

#         total = 0

#         for i in str(n):

#             total += int(i)

#         n = total

#     return n

# ---------------------------------------

# def delete_nth(order, max_e):

#     result = []
#     counts = {}

#     for i in order:

#         if i not in counts:
#             counts[i] = 0

#         if counts[i] < max_e:

#             result.append(i)

#             counts[i] += 1

#     return result

# ---------------------------------------

# def compute_sum(n):

#     total = 0

#     for i in range(1, n + 1):

#         for j in str(i):

#             total += int(j)

#     return total

# ---------------------------------------

# def is_valid_walk(walk):

#     if len(walk) != 10:
#         return False

#     x = 0
#     y = 0

#     for i in walk:

#         if i == "n":
#             y += 1

#         elif i == "s":
#             y -= 1

#         elif i == "e":
#             x += 1

#         elif i == "w":
#             x -= 1

#     return x == 0 and y == 0