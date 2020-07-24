// Calculating Factorial using for loop
function fact(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var result = fact(5);
console.log(result);

// Calculating factiorial using while loop
function fact(n) {
    var factorial = 1;
    var i = 1;
    while (i <= n) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var result = fact(5);
console.log(result);

// Calculating factorial using recursive method
function fact(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}
var result = fact(5);
console.log(result);