function fizzBuzz(n) {
    return 1;
}

function test(input, expectedOutput) {
    let actualOutput = fizzBuzz(input);
    if (!(actualOutput === expectedOutput)) {
        console.log("FAIL!", input, actualOutput, "is not", expectedOutput);
        process.exit(1);
    }
}

test(1, 1);
test(2, 2);
