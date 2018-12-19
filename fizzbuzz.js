const assert = require('assert');

function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {

    }
    if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    }
    return number;
}

assert(fizzbuzz(1) === 1);
assert(fizzbuzz(3) === "Fizz");
