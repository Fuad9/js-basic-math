function isLeapYear(year) {
    let remainder = year % 4;
    if (remainder == 0) {
        return ("The year is a leap year");
    } else {
        return ("The year is not a leap year");
    }
}
const check2024 = isLeapYear(2024);
console.log(check2024);
const check2025 = isLeapYear(2025);
console.log(check2025);

// More codes to check a year is leap year or not 
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return ("leap year");
    } else {
        return ("not leap year");
    }
}
var result = isLeapYear(2021);
console.log(result);

// third way to check if a year is a leap year or not
var year = 2020;
switch (year) {
    case year:
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            console.log("leap year");
        } else {
            console.log("not leap year");
        }
        break;
    default:
        console.log("invalid year");
}