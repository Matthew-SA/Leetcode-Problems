def two_sum(nums, target)
    seen = Hash.new
    nums.each_with_index { |num, i| seen[num] = i }
    nums.each_with_index do |num, i|
        req_num = target - num
        if seen.has_key?(req_num) && i != seen[req_num]
            return [i, seen[req_num]]
        end
    end
end