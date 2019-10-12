# Given a column title as appear in an Excel sheet, return its corresponding 
# column number.

# For example:

#     A -> 1
#     B -> 2
#     C -> 3
#     ...
#     Z -> 26
#     AA -> 27
#     AB -> 28 
#     ...
# Example 1:

# Input: "A"
# Output: 1
# Example 2:

# Input: "AB"
# Output: 28
# Example 3:

# Input: "ZY"
# Output: 701

# @param {String} s
# @return {Integer}
def title_to_number(s)
    alpha = Hash.new(1)
    ("A".."Z").each_with_index { |char, i| alpha[char] = 1 + i }
    sum = 0
    s.reverse.split("").each_with_index do |char, exponent|
        sum += alpha[char] * (26 ** exponent)
    end
    sum
end

p title_to_number("AAAA")