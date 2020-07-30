// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
// After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
// Example:

// Input: [1,2,3,0,2]
// Output: 3 
// Explanation: transactions = [buy, sell, cooldown, buy, sell]


// ***************** Borrowed solution - redo this problem! ****************

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    const n = prices.length;
    
    if (!prices.length) return 0;
    
    const sold = new Array().fill(0);
    const held = new Array(n).fill(0);
    const reset = new Array(n).fill(0);
    
    sold[0] = 0;
    held[0] = -prices[0];
    reset[0] = 0;
    
    for (let i = 1; i < prices.length; i++) {
        sold[i] = held[i - 1] + prices[i];
        held[i] = Math.max(held[i - 1], reset[i - 1] - prices[i]);
        reset[i] = Math.max(reset[i - 1], sold[i - 1]);
    }

    return Math.max(sold[n - 1], reset[n - 1]);
};