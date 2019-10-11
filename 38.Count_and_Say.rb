# The count-and-say sequence is the sequence of integers with the first five terms 
# as following:

# 1.     1
# 2.     11
# 3.     21
# 4.     1211
# 5.     111221
# 1 is read off as "one 1" or 11.
# 11 is read off as "two 1s" or 21.
# 21 is read off as "one 2, then one 1" or 1211.

# Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say 
# sequence.

# Note: Each term of the sequence of integers will be represented as a string.


# @param {Integer} n
# @return {String}
def count_and_say(n)
    return '1' if n == 1
    current_sequence = [1]
    (n-1).times do
        count = 1
        next_sequence = []
        while !current_sequence.empty?
            if current_sequence[0] == current_sequence[1]
                count += 1
                current_sequence.shift
            else
                next_sequence << count
                next_sequence << current_sequence.shift
                count = 1
            end
        end
        current_sequence = next_sequence.dup
    end
    current_sequence.join("")
end

# p count_and_say(5)