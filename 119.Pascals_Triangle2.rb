# Given a non-negative index k where k ≤ 33, return the kth index row of the 
# Pascal's triangle.

# Note that the row index starts from 0.

# def get_row(row_index)
#     current_row = [1]
#     (row_index).times do
#         next_row = [1]
#         current_row.each_index { |i| next_row << current_row[i..i+1].sum }
#         current_row = next_row.dup
#         next_row = [1]
#     end
#     current_row
# end

def get_row2(row_index)
    row = [1]
    (row_index).times do
        row.unshift(1)
        (1...row.length).each { |i| row[i] = row[i..i+1].sum }
    end
    row
end

# p get_row2(10)