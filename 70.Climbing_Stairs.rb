# You are climbing a stair case. It takes n steps to reach to the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways 
# can you climb to the top?

# Note: Given n will be a positive integer.

# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
    return n if n <= 3
    ways_to_climb = climb_stairs(n - 1) + climb_stairs(n - 2)
end

def climb_stairs2(n)
    return n if n <= 3
    climb_variants = [1,2,3]
    while climb_variants.length < n
        climb_variants << climb_variants[-2] + climb_variants[-1]
    end
    climb_variants[-1]
end

def climb_stairs3(n)
    return n if n <= 3
    last_total = 2
    current_total = 3
    (n-3).times do
        new_total = current_total + last_total
        last_total = current_total
        current_total = new_total
    end
    current_total
end

def climb_stairs4(n)
    return n if n <= 3
    last_totals = [2,3]
    (n-3).times do
        last_totals << last_totals.sum
        last_totals.shift
    end
    last_totals[-1]
end


# p climb_stairs4(4)

# 1 = 1
# 2 = 2
# 3 = 3
# 4 = 5
# 5 = 8
# 6 = 13
# 7 = 21
# 8 = 34
# 9 = 55
# 10 = 89