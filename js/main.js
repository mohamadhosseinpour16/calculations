// select dom node
let primarySpan1 = document.getElementById("num1");
let primarySpan2 = document.getElementById("num2");
// select spans
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mult = document.getElementById("mult");
let devi = document.getElementById("devi");

// prompt Entrance
let num1 = +prompt("Enter Your Number1");
let num2 = +prompt("Enter Your Number2");

// functions
function placements(number1, number2) {
  primarySpan1.textContent = number1;
  primarySpan2.textContent = number2;
}
function addition(a, b) {
  let result = a + b;
  return (add.textContent = result);
}
function subtraction(a, b) {
  result = 0;
  if (a > b) {
    result = a - b;
  } else {
    result = b - a;
  }
  return (sub.textContent = result);
}
function multipication(a, b) {
  let result = a * b;
  return (mult.textContent = result);
}
function devision(a, b) {
  result = 0;
  if (a > b) {
    result = a / b;
  } else {
    result = b / a;
  }
  return (devi.textContent = result);
}

// call functions
placements(num1, num2);
addition(num1, num2);
subtraction(num1, num2);
multipication(num1, num2);
devision(num1, num2);
