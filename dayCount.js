// switch method to count day of each month of a year
var year = 2020;
var daycount;
var month = 2;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daycount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daycount = 30;
        break;
    case 2:
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            console.log("29");
        } else {
            console.log("28");
        }
        break;
    default:
        console.log("invalid month");

}