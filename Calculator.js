var numbArray = [];
var flag = 0;


function addThing(x) 
{
    if (numbArray.length == 1 && numbArray[numbArray.length - 1] === "-") 
    {
        // If previous element is - than append the number to it
        numbArray[numbArray.length - 1] = numbArray[numbArray.length - 1] + String(x.innerHTML);
        console.log(numbArray);
        flag = 1;
    }
  
    else if (flag == 0) 
    {
    // Decides whether to make a number bigger or to add a new number
    console.log(x.innerHTML, "Added numb to array");
    numbArray.push(x.innerHTML);
    console.log(numbArray);
    flag = 1;
    } 
  
    else 
    {
    console.log(numbArray.length - 1, "Merging numbers", x.innerHTML);
    numbArray[numbArray.length - 1] =
      String(numbArray[numbArray.length - 1]) + String(x.innerHTML);
    console.log(numbArray);
    }

  updateDisplay(numbArray.join(" "));
}


function addSymbol(x) {
  flag = 0;
  numbArray.push(x.innerHTML);


  // If the symbol is "=", calculate the result
  if (x.innerHTML === "=") {
    let result = calculateResult();
    console.log(result);
    numbArray.push(result);
    updateDisplay(numbArray.join(" "));
  } else {
    updateDisplay(numbArray.join(" "));
  }
}


// Calculates the result of the numbArray and returns it
function calculateResult() {
  let result = 0;
  let currentOperator = "";


  for (let i = 0; i < numbArray.length; i++) {
    let currentElement = numbArray[i];


    if (!isNaN(currentElement)) {
      // If the current element is a number
      if (currentOperator === "+") {
        result += Number(currentElement);
      } else if (currentOperator === "/") {
        result /= Number(currentElement);
      } else if (currentOperator === "-") {
        result -= Number(currentElement);
      } else if (currentOperator === "*") {
        result *= Number(currentElement);
      } else if (currentOperator === "") {
        result = Number(currentElement);
      }
    } else {
      // If the current element is an operator
      currentOperator = currentElement;
    }
  }

  return result;
}
// Shows input on display within the html
function updateDisplay() {
  document.getElementById("display").innerHTML = numbArray.join(" ");
  calculateResult();
}
// clears the display within the html and calls updateDisplay to show this change
function clearDisplay() {
  document.getElementById("display").innerHTML = "0";
  numbArray = [];
  flag = 0;
  updateDisplay();
  console.log(numbArray);
}