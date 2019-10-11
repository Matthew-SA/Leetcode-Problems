# Given a non-empty array of integers, every element appears twice except for one. 
# Find that single one.

# Note:

# Your algorithm should have a linear runtime complexity. Could you implement it 
# without using extra memory?


# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    counts = Hash.new(0)
    nums.each { |num| counts[num] += 1 }
    counts.key(1)
end



# p single_number([1,1,"x",3,3,4,4])
# p single_number([1,3,5,2,3,1,5])


def single_number2(nums)
    nums.reduce do |collect, num|
        collect ^= num
    end
end

# [1,3,5,2,2,1,5]
collect = 
001
010
101
111
101
100
011 
# 001
# 011
# 111
# 010
# 010
# 001
# 111
[3, 2, 3]

011
010
011
---
010

# p single_number2([1,1,"x",3,3,4,4])
# p single_number2([1,3,5,2,2,1,5])

# 


# 12
num1 = 43434
# 10
num2 = 1345

# def bitwise_and(num1, num2)
#     puts "num1 = " + num1.to_s(2)
#     puts "num2 = " + num2.to_s(2)
#     puts "base 10 & = " + (num1 & num2).to_s(10)
#     puts "base 2 & = " + (num1 & num2).to_s(2)
# end


def bitwise_and(num1, num2)
    bnum1 = num1.to_s(2)
    bnum2 = num2.to_s(2)
    band = (num1 & num2).to_s(2)
    puts "num1 = " + ( ' ' * bnum2.length ) + num1.to_s(2)
    puts "num2 = " + ( ' ' * bnum1.length ) + num2.to_s(2)
    puts "b2&  = " + ( ' ' * ([bnum1.length, bnum2.length].max ) + band)
    # puts "base 10 & = " + (num1 & num2).to_s(10)
end
# bitwise_and(num1, num2)

def bitwise_or(num1, num2)
    bnum1 = num1.to_s(2)
    bnum2 = num2.to_s(2)
    band = (num1 | num2).to_s(2)
    puts "num1 = " + ( ' ' * bnum2.length ) + num1.to_s(2)
    puts "num2 = " + ( ' ' * bnum1.length ) + num2.to_s(2)
    puts "b|&  = " + ( ' ' * ([bnum1.length, bnum2.length].min ) + band)
end

# bitwise_or(num1, num2)


def bitwise_not(num1)
    bnum1 = num1.to_s(2)
    band = (~num1)
    length = (~num1).to_s(2).length
    real_band = length.downto(0).map { |n| band[n] }.join('')
    puts "num1 =   " + num1.to_s(2)
    puts "b~&  = " +  real_band
end



# bitwise_not(num1)
# 01101010101
# 01010111011
# -----------
# 00111101110

def bitwise_xor(num1, num2)
    bnum1 = num1.to_s(2)
    bnum2 = num2.to_s(2)
    band = (num1 | num2).to_s(2)
    puts "num1 = " + ( ' ' * bnum2.length ) + num1.to_s(2)
    puts "num2 = " + ( ' ' * bnum1.length ) + num2.to_s(2)
    puts "b|&  = " + ( ' ' * ([bnum1.length, bnum2.length].min ) + band)
end
