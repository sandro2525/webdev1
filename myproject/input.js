const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const result = document.getElementById("result");
function plus() {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  result.innerHTML = num1 + num2;
}
