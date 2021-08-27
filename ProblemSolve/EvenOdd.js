// even and odd number

function showNumber(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i + " " + "EVEN");
    } else {
      console.log(i + " " + "ODD");
    }
  }
}

showNumber(10);
