function getOddNumberOfArray(nums) {
    const oddNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        const index = i;
        const elements = nums[index];
        if (elements % 2 === 1) {
            console.log(index, elements);
            oddNumbers.push(elements);
        }

    }
    return oddNumbers;
}
const oddNumberArray = [18, 26, 31, 46, 57, 63, 74, 86, 83];
getOddNumberOfArray(oddNumberArray);

console.log(oddNumbers);

// const oddNumberSum = getSumOfArray(oddNumberSum);
// console.log(oddNumberSum);