### big-O notation

# O(n)

def bsearch(arr, target) 
    return -1 if arr.empty?
end

10000
5000
2500
1250

test = [3,5,5,8,10,15,20,23,33, 35,38, 41, 45, 95, 115 ]

# O(1)   
def constant(test)
    test[0]
end
# O(logn)
def log_n(test)
    while test.empty?
        test = test.drop(test.length / 2)
    end
end
# O(n)
def n(test)
    test.sum
    test.each {|el| el }
    test.map { |el| el }
end
# O(nlogn)
def n_log_n(test)
    test.each do |el|
        log_n(test)
    end
end


# O(n^2)
def n_sqr(test)
    test.each do |el|
        test.each do |el2|
            el2
        end
    end
end

2^5
# O(2^n)






# p search_insert([1,3,5,6], 4)
