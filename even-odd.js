//Even or Odd number
function evenOrOdd(numbers) {
    const remainder = numbers % 2;
    if (remainder === 0) {
        console.log("THis is the even number");
    } else {
        console.log("This is the odd number");
    }
}
const myNumber = evenOrOdd(3458);