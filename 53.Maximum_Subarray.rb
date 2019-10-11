# Given an integer array nums, find the contiguous subarray (containing at 
# least one number) which has the largest sum and return its sum.

# @param {Integer[]} nums
# @return {Integer}

def max_sub_array(nums)
    max = nums[0]
    sum = 0
    tail = 0
    head = 0
    while head < nums.length
        if sum < 0
            tail = head 
            sum = 0
        end
        
        sum += nums[head]
        max = sum if sum > max
        head += 1
    end
    max
end

# p max_sub_array([-2,1,-3,4,-1,2,1,-5,4])
# p max_sub_array([-10,-2,-3,-4])