# Given an array nums and a value val, remove all instances of that value 
# in-place and return the new length.

# Do not allocate extra space for another array, you must do this by modifying 
# the input array in-place with O(1) extra memory.

# The order of elements can be changed. It doesn't matter what you leave beyond 
# the new length.

# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    nums.delete(val)
    nums.length
end

def remove_element2(nums, val)
    (0...nums.length).each do |i|
        nums.delete_at(i) if nums[i] == val
    end
    nums.length
end

# p remove_element2([3,2,2,3], 3)