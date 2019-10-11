# Given a non-empty array of digits representing a non-negative integer, 
# plus one to the integer.

# The digits are stored such that the most significant digit is at the head of 
# the list, and each element in the array contain a single digit.

# You may assume the integer does not contain any leading zero, except the 
# number 0 itself.

# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    digits[-1] += 1
    digits.reverse!

    digits.each_index do |i|
        if digits[i] == 10
            digits[i] = 0
            if i == digits.length - 1
                digits << 1
            else
                digits[i + 1] += 1
            end
        end
    end
    digits.reverse!
end

# p plus_one([4,3,2,9])
# p plus_one([9,9])