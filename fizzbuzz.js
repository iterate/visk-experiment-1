const assert = require('assert');

function fizzbuzz(number) {
    return number;
    if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    }
}

assert(fizzbuzz(1) === 1);
assert(fizzbuzz(3) === "Fizz");
