# Implement int sqrt(int x).

# Compute and return the square root of x, where x is guaranteed to be a
# non-negative integer.

# Since the return type is an integer, the decimal digits are truncated and only 
# the integer part of the result is returned.

# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    (x ** 0.5).floor
end


def my_sqrt2(x)
    1.upto(x) do |num|
        return num - 1 if (num * num) > x
    end
end

def my_sqrt3(n)
    return n if n < 2
    small_candidate = my_sqrt3(n >> 2) << 1
    large_candidate = small_candidate + 1
    puts "n   = " + n.to_s
    puts "smc = " + small_candidate.to_s
    puts "lgc = " + large_candidate.to_s
    return small_candidate if large_candidate * large_candidate > n
     
end

# p my_sqrt3(9)

# p my_sqrt2(9)