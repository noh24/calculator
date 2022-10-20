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
function calculate(num1, num2, operatorParam) {
  if (operatorParam === "add") {
    return add(num1, num2);
  } else if (operatorParam === "subtract") {
    return subtract(num1, num2);
  } else if (operatorParam === "multiply") {
    return multiply(num1, num2);
  } else if (operatorParam === "divide") {
    return divide(num1, num2);
  }
}

//UI (User Interface)
function handleSubmission(e) {
  e.preventDefault();
  //code to get user input value and process form values will go here!
  const num1 = parseFloat(document.getElementById("input1").value);
  console.log("num1:", num1);
  const num2 = parseFloat(document.getElementById("input2").value);
  console.log("num2:", num2);
  const operator = document.querySelector("input[name='operator']:checked").value;
  console.log("checked value:", operator)

  //if statement to start calculating
  let result = calculate(num1, num2, operator);

  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleSubmission);
});
















// const num1 = parseFloat(prompt("Enter a number:"));
// const num2 = parseFloat(prompt("Enter another number:"));

// const sum = ("The result of " + num1 + " + " + num2 + " = " + add(num1, num2) + ". ");
// const sub = ("The result of " + num1 + " - " + num2 + " = " + subtract(num1, num2) + ". ");
// const times = ("The result of " + num1 + " * " + num2 + " = " + multiply(num1, num2) + ". ");
// const division = ("The result of " + num1 + " / " + num2 + " = " + divide(num1, num2) + ". ");

// window.alert(sum + sub + times + division);