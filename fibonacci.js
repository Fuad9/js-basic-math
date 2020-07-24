// Calulating fibonacci series using for loop
function fibonacci1(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return (fibo);
}
var result = fibonacci1(7);
console.log(result)

// calculating fibonacci series using while loop
function fibonacci2(n) {
    var fibo = [0, 1];
    var i = 2;
    while (i <= n) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        i++;
    }
    return fibo;
}
var result = fibonacci2(7);
console.log(result);

// Calculating fibonacci series in a recursive way
function fibonacci3(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    } else {
        return fibonacci3(n - 1) + fibonacci3(n - 2);
    }
}
var result = fibonacci3(7);
console.log(result);