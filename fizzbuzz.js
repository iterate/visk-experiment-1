function fizzBuzz(n) {
    return n;
}

function test(input, expectedOutput) {
    let actualOutput = fizzBuzz(input);
    if (!(actualOutput === expectedOutput)) {
        console.log(
            "FAIL!",
            input,
            "is",
            actualOutput,
            "is not",
            expectedOutput
        );
        process.exit(1);
    }
}

test(1, 1);
test(2, 2);
test(2, 2);
