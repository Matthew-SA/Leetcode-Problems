# Given a string, determine if it is a palindrome, considering only alphanumeric 
# characters and ignoring cases.

# Note: For the purpose of this problem, we define empty string as valid palindrome.

# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    new_str = ""
    valid_chars = ("a".."z").to_a + ("0".."9").to_a
    s.downcase.each_char { |char| new_str << char if valid_chars.include?(char) }
    new_str == new_str.reverse
end

str = 'taco .$cat.'

puts str.gsub(/[^a-zA-Z0-9]/, '')
### regex
p str.gsub('.', "")
p str.gsub(/\./, "")
# p is_palindrome("")
# p is_palindrome("A man, a plan, a canal: Panama")
# p is_palindrome("race a car")
# p is_palindrome("0P")