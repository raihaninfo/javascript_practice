// js code
let screen = document.getElementById("screen");
button = document.querySelectorAll("button");
let screenText = "";
for (items of button) {
  items.addEventListener("click", function (e) {
    let buttonText = e.target.innerHTML;
    if (buttonText == "X") {
      screenText = "*";
      screenText += buttonText = "";
      screen.value = screenText;
    } else if (buttonText == "C") {
      screenText = "";
      screenText += buttonText = "";
      screen.value = screenText;
    } else if (buttonText == "=") {
      screen.value = eval(screenText);
    } else {
      screenText += buttonText;
      screen.value = screenText;
    }
  });
}
