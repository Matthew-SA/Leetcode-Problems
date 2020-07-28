
// You've created a new programming language, and now you've decided to add hashmap support to it. Actually you are quite disappointed that in common programming languages it's impossible to add a number to all hashmap keys, or all its values. So you've decided to take matters into your own hands and implement your own hashmap in your new language that has the following operations:

// insert x y - insert an object with key x and value y.
// get x - return the value of an object with key x.
// addToKey x - add x to all keys in map.
// addToValue y - add y to all values in map.
// To test out your new hashmap, you have a list of queries in the form of two arrays: queryTypes contains the names of the methods to be called (eg: insert, get, etc), and queries contains the arguments for those methods (the x and y values).

// Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.

// Example

// For queryType = ["insert", "insert", "addToValue", "addToKey", "get"] and query = [[1, 2], [2, 3], [2], [1], [3]], the output should be hashMap(queryType, query) = 5.

// The hashmap looks like this after each query:

// 1 query: {1: 2}
// 2 query: {1: 2, 2: 3}
// 3 query: {1: 4, 2: 5}
// 4 query: {2: 4, 3: 5}
// 5 query: answer is 5
// The result of the last get query for 3 is 5 in the resulting hashmap.



// For queryType = ["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"] and query = [[1, 2], [2], [1], [2, 3], [1], [-1], [3]], the output should be hashMap(queryType, query) = 6.

// The hashmap looks like this after each query:

// 1 query: {1: 2}
// 2 query: {1: 4}
// 3 query: answer is 4
// 4 query: {1: 4, 2: 3}
// 5 query: {2: 4, 3: 3}
// 6 query: {2: 3, 3: 2}
// 7 query: answer is 2
// The sum of the results for all the get queries is equal to 4 + 2 = 6.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string queryType

// Array of query types. It is guaranteed that each queryType[i] is either "addToKey", "addToValue", "get", or "insert".

// Guaranteed constraints:
// 1 ≤ queryType.length ≤ 105.

// [input] array.array.integer query

// Array of queries, where each query is represented either by two numbers for insert query or by one number for other queries. It is guaranteed that during all queries all keys and values are in the range [-109, 109].

// Guaranteed constraints:
// query.length = queryType.length,
// 1 ≤ query[i].length ≤ 2.

// [output] integer64

// The sum of the results for all get queries.
// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }


function hashMap(queryType, query) {
    let hash = {},
        keyOffset = 0,
        valueOffset = 0,
        sum = 0;
        
    while (query.length) {
        let action = queryType.shift();
        let data = query.shift();
        
        if (action === "insert") {
            hash[data[0] - keyOffset] = data[1] - valueOffset;
        } else if (action === "get") {
            sum += hash[data[0] - keyOffset] + valueOffset;
        } else if (action === "addToKey") {
            keyOffset += data[0];
        } else if (action === "addToValue") {
            valueOffset += data[0];
        };
    }

    return sum;
}

queryType:
["insert", 
 "addToValue", 
 "get", 
 "insert", 
 "addToKey", 
 "addToValue", 
 "get"]
query:
[[1,2], 
 [2], 
 [1], 
 [2,3], 
 [1], 
 [-1], 
 [3]]

// hashMap(["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"], [[1,2], [2], [1], [2,3], [1], [-1], [3]])
//6

// insert 1: 2
// { 1: 2 }

// addtoValue 2
// { 1: 4 }      (true hash { 1: 2 }, valueOffset = 2)

// get 1
// { 1: 4 }          sum = 4

// insert 2: 3
// { 1: 4, 2: 3 }      (true hash { 1: 2, 2: 3 }, valueOffset = 2)

// addToKey 1
// { 2: 4, 3: 2 }      (true hash { 1: 2, 2: 3 }, keyOffset = 1, valueOffset = 2)

// addToValue -1
// { 2: 3, 3: 2 }      (true hash { 1: 2, 2: 3 }, keyOffset = 1, valueOffset = 1)

// get 3
// { 2: 3, 3: 2 }      sum = 6
