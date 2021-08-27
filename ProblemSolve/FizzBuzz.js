// FizzBuzz Algorithm

// Print integers 1 to N, but print “Fizz” if an integer is divisible by 3,
//“Buzz” if an integer is divisible by 5,
//and “FizzBuzz” if an integer is divisible by both 3 and 5.

function FizzBuzz(input) {
  if (typeof input !== "number") {
    console.log("Not A Number");
  } else if (input % 3 === 0 && input % 5 === 0) {
    console.log("FizzBuzz");
  } else if (input % 3 === 0) {
    console.log("Fizz");
  } else if (input % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(input);
  }
}

FizzBuzz(2);
