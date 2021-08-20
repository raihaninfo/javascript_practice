// infinity loop

for (;;) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand == 9) {
    console.log("You have Win");
    break;
  } else {
    console.log("You have got " + rand);
  }
}
