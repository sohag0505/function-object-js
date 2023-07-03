// Leap Year or not
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}
const thisYear = isLeapYear(2023);
console.log(thisYear);