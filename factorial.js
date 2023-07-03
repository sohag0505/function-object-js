function factorial(nums) {
    let result = 1;
    for (let i = nums; i >= 1; i--) {
        result = result * i;
        console.log(i);
    }
    return result;
}
const nums = 6;
const fact = factorial(nums);
console.log(nums, fact)