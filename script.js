function buttonClick() {}

let display = document.querySelector("#screen");
let numButtons = document.getElementsByClassName("button");

Array.from(numButtons).forEach((element) => {
  element.addEventListener("click", function (event) {
    switch (event.target.innerHTML) {
      case "RESET":
        display.innerHTML = "";
        break;
      case "DEL":
        display.innerHTML = display.innerHTML.slice(0, -1);
        break;
      case "=":
        if (display.innerHTML == "") {
          return;
        } else {
          try {
            display.innerHTML = eval(display.innerHTML);
          } catch {
            display.innerHTML = "Please Enter A valid Calculation";
          }
        }
        break;
      case "-":
        if (display.innerHTML.includes("-") || display.innerHTML == "") {
          return;
        } else if (display.innerHTML.includes("+")) {
          display.innerHTML = display.innerHTML.replace("+", "-");
        } else if (display.innerHTML.includes("/")) {
          display.innerHTML = display.innerHTML.replace("/", "-");
        } else if (display.innerHTML.includes("*")) {
          display.innerHTML = display.innerHTML.replace("*", "-");
        } else {
          display.innerHTML = display.innerHTML + "-";
        }
        break;
      case "+":
        if (display.innerHTML.includes("+") || display.innerHTML == "") {
          return;
        } else if (display.innerHTML.includes("/")) {
          display.innerHTML = display.innerHTML.replace("/", "+");
        } else if (display.innerHTML.includes("-")) {
          display.innerHTML = display.innerHTML.replace("-", "+");
        } else if (display.innerHTML.includes("*")) {
          display.innerHTML = display.innerHTML.replace("*", "+");
        } else {
          display.innerHTML = display.innerHTML + "+";
        }
        break;
      case "*":
        if (display.innerHTML.includes("*") || display.innerHTML == "") {
          return;
        } else if (display.innerHTML.includes("+")) {
          display.innerHTML = display.innerHTML.replace("+", "*");
        } else if (display.innerHTML.includes("-")) {
          display.innerHTML = display.innerHTML.replace("-", "*");
        } else if (display.innerHTML.includes("/")) {
          display.innerHTML = display.innerHTML.replace("/", "*");
        } else {
          display.innerHTML = display.innerHTML + "*";
        }
        break;
      case "/":
        if (display.innerHTML.includes("/") || display.innerHTML == "") {
          return;
        } else if (display.innerHTML.includes("+")) {
          display.innerHTML = display.innerHTML.replace("+", "/");
        } else if (display.innerHTML.includes("-")) {
          display.innerHTML = display.innerHTML.replace("-", "/");
        } else if (display.innerHTML.includes("*")) {
          display.innerHTML = display.innerHTML.replace("*", "/");
        } else {
          display.innerHTML = display.innerHTML + "/";
        }
        break;
      case ".":
        // if (
        //   display.innerHTML.includes(".") &&
        //   display.innerHTML.includes("-")
        // ) {
        //   display.innerHTML = displnerHTML + ".";
        // }
        if (display.innerHTML.includes(".") || display.innerHTML == "") {
          return;
        } else {
          display.innerHTML = display.innerHTML + ".";
        }
        break;
      default:
        display.innerHTML += event.target.innerHTML;
    }
  });
});
