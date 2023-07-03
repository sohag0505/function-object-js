function getSumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[i];
        sum = sum + elements;
        console.log(index, elements, sum);
    }
    return sum;
}
const myNumber = [23, 45, 65, 89, 71, 29, 63, 100];
getSumOfArray(myNumber);