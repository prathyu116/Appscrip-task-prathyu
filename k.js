/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
    
    const n = heights.length;
    const nge = new Array(n).fill(-1);
    const st = [];

    // Compute Next Greater Element (NGE) for each index
    for (let i = n - 1; i >= 0; i--) {
        while (st.length > 0 && heights[st[st.length - 1]] <= heights[i]) {
            st.pop();
        }
        if (st.length > 0) {
            nge[i] = st[st.length - 1];
        }
        st.push(i);
    }
    return nge
};
let heights = [6,4 ,8,5,2,7]
let queries = [[0, 7], [3, 5], [5, 2], [3, 0], [1, 6]]
console.log(leftmostBuildingQueries(heights, queries)); 
