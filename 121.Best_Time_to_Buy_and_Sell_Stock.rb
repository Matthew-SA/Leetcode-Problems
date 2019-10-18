# Say you have an array for which the ith element is the price of a given stock 
# on day i.

# If you were only permitted to complete at most one transaction (i.e., buy one 
# and sell one share of the stock), design an algorithm to find the maximum profit.

# Note that you cannot sell a stock before you buy one.

# Example 1:

# Input: [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
#              Not 7-1 = 6, as selling price needs to be larger than buying price.
# Example 2:

# Input: [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transaction is done, i.e. max profit = 0.

# @param {Integer[]} prices
# @return {Integer}
# def max_profit(prices)
#     top_profit = 0
#     prices.each_index do |i1|
#         prices.each_index do |i2|
#             if i2 > i1
#                 profit = prices[i2] - prices[i1]
#                 top_profit = profit if profit > top_profit
#             end
#         end
#     end
#     top_profit
# end


# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    tail = prices[0]
    max_profit = 0
    prices.each_index do |i|
        tail = prices[i] if prices[i] < tail
        potential_profit = prices[i] - tail
        max_profit = potential_profit if potential_profit > max_profit
    end
    max_profit
end