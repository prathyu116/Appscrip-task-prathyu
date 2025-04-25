function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums);
    let maxStreak = 1;
    console.log(set);
    for(const num of set){
        if(!set.has(num-1)){
            let currNum = num;
            let currStreak = 1;

            while(set.has(currNum + 1)){
                currNum++;
                currStreak++;
            }
            maxStreak = Math.max(maxStreak, currStreak);
        }
    }

    return maxStreak;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); 