# Given two binary strings, return their sum (also a binary string).

# The input strings are both non-empty and contains only characters 1 or 0.

# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
    converted_sum = a.to_i(2) + b.to_i(2)
    converted_sum.to_s(2)
end

# p add_binary('11', '1')
# p add_binary('1010', '1011')