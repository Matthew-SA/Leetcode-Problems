# Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one 
# sorted array.

# Note:

# The number of elements initialized in nums1 and nums2 are m and n respectively.
# You may assume that nums1 has enough space (size that is greater or equal to 
# m + n) to hold additional elements from nums2.

# Example:

# Input:
# nums1 = [1,2,3,0,0,0], m = 3
# nums2 = [2,5,6],       n = 3

# Output: [1,2,2,3,5,6]
# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
    nums1.each_index do |i|
        if nums1[i] > nums2
    end
end

def 


p merge([1,2,3,0,0,0], 3, [2,5,6], 3)


p merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3)  # ==> [-1,0,0,1,2,2,3,3,3]
