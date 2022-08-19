//
function sqr(n = 2) {
  return n * n;
}

console.log(sqr());

function greet(name = "your name", msg = "hello") {
  console.log(`${msg} ! ${name}`);
}

greet();
