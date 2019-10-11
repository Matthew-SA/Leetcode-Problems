# Given a non-negative integer numRows, generate the first numRows of 
# Pascal's triangle.

# @param {Integer} num_rows
# @return {Integer[][]}
def generate(num_rows)
    return [] if num_rows <= 0
    triangle = [[1]]
    (num_rows - 1).times do
        new_layer = [1]
        triangle[-1].each_index {|i| new_layer << triangle[-1][i..i+1].sum }
        triangle << new_layer
    end
    triangle
end

# p generate(5)