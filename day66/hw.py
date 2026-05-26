
# def palindrome_chain_length(n):
#     count = 0
#     while str(n) != str(n) [::- 1]:
#         if str(n) != str(n) [::- 1]:
#             n = n + int(str(n)[::- 1])
#             count = count + 1
#     return count


# codewars 3

# def nth_smallest(arr, pos):
#     arr.sort()
#     return arr[pos - 1]

# codewars 5

# def incrementer(nums):
#     if nums == []:
#         return []
#     new = []
#     for i in range(len(nums)):
#         if len(str(nums[i]+1+i)) > 1:
#             new.append(int(str(nums[i]+1+i)[-1]))
#         else:
#             new.append(nums[i]+i+1)
#     return new

# codewars 6

# def sum_of_n(n):
#     ll = []
#     if n >= 0:
#         last = 0
#         for i in range(0,n+1):
#             last +=i
#             ll.append(last)
#         return ll
#     elif n < 0:
#         last = 0
#         for i in range(0,n-1,-1):
#             last +=i
#             ll.append(last)
#     return ll


# codewars 7

# def largest(n, xs):
#     if n == 0:
#         return []
#     xs.sort()
#     return xs[-n:]