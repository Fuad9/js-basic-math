function getPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return ("Your number is not prime");
        } else {
            return ("Your number is prime");
        }
    }
}
let result = getPrime(7);
console.log(result);
result = getPrime(8);
console.log(result);