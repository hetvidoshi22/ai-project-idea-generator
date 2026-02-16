let historyList = [];

document.getElementById("calculateBtn").addEventListener("click", calculate);

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;

  if (isNaN(num1) || isNaN(num2)) {
    showResult("Please enter valid numbers.");
    return;
  }

  let result;
  let symbol;

  switch (operation) {
    case "add":
      result = num1 + num2;
      symbol = "+";
      break;

    case "subtract":
      result = num1 - num2;
      symbol = "-";
      break;

    case "multiply":
      result = num1 * num2;
      symbol = "×";
      break;

    case "divide":
      if (num2 === 0) {
        showResult("Cannot divide by zero!");
        return;
      }
      result = num1 / num2;
      symbol = "÷";
      break;
  }

  result = Number(result.toFixed(2));
  showResult(result);

  const calculation = `${num1} ${symbol} ${num2} = ${result}`;

  historyList.unshift(calculation);

  if (historyList.length > 5) {
    historyList.pop();
  }

  updateHistory();
}

function showResult(message) {
  document.getElementById("result").innerText = "Result: " + message;
}

function updateHistory() {
  const historyElement = document.getElementById("history");
  historyElement.innerHTML = "";

  historyList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyElement.appendChild(li);
  });
}
