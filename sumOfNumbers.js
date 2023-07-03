function samOfNumbers(nums) {
    let sum = 0;
    for (let i = 1; i <= nums; i++) {
        sum = sum + i;

    }
    return sum;
}
const sum = samOfNumbers(9);
console.log("The total numbers of: " +
    sum);