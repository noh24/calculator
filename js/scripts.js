function add(num1, num2) {
  return num1 + num2; 
}
function subtract(num1, num2) {
  return num1 - num2; 
}
function multiply(num1, num2) {
  return num1 * num2; 
}
function divide(num1, num2) {
  return num1 / num2; 
}


//UI (User Interface)
const num1 = parseFloat(prompt("Enter a number:"));
const num2 = parseFloat(prompt("Enter another number:"));

const sum = ("The result of " + num1 + " + " + num2 + " = " + add(num1, num2) + ". ");
const sub = ("The result of " + num1 + " - " + num2 + " = " + subtract(num1, num2) + ". ");
const times = ("The result of " + num1 + " * " + num2 + " = " + multiply(num1, num2) + ". ");
const division = ("The result of " + num1 + " / " + num2 + " = " + divide(num1, num2) + ". ");

window.alert(sum + sub + times + division);