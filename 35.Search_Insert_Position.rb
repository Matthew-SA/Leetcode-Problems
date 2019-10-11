# Given a sorted array and a target value, return the index if the target is 
# found. If not, return the index where it would be if it were inserted in order.

# You may assume no duplicates in the array.

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    return 0 if target < nums[0]
    return nums.length if target > nums[-1]
    nums.each_with_index do |num, i|
        if num == target
            return i
        elsif num < target
            next
        else
            return i
        end
    end
end