# Given a sorted array nums, remove the duplicates in-place such that each 
# element appear only once and return the new length.

# Do not allocate extra space for another array, you must do this by modifying 
# the input array in-place with O(1) extra memory.

# @param {Integer[]} nums
# @return {Integer}

def remove_duplicates(nums)
    seen = []
    (0..nums.length - 1).each do |i|
        if seen.include?(nums[i])
            nums[i] = "x"
        else
            seen << nums[i]
        end
    end
    nums.delete("x")
    nums.length
end

# p remove_duplicates([0,0,1,1,1,2,2,3,3,4])