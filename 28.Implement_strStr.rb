# Implement strStr().

# Return the index of the first occurrence of needle in haystack, or -1 
# if needle is not part of haystack.

# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
    location = haystack.index(needle)
    location.nil? ? -1 : location
end

# p str_str("hello", "ll")