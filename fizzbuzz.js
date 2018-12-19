function fizzBuzz(n) {
    return 1;
}

function test(input, expectedOutput) {
    let actualOutput = fizzBuzz(input);
    if (!actualOutput === expectedOutput) {
        console.log("FAIL!", actualOutput, " is not ");
    }
}

test(1, 1);
