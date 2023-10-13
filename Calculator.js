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
    numbArray[numbArray.length - 1] = String(numbArray[numbArray.length - 1]) + String(x.innerHTML);
    console.log(numbArray);
    }

  updateDisplay(numbArray.join(" "));
}


function addSymbol(x) {
  flag = 0;
  numbArray.push(x.innerHTML);
  updateDisplay(numbArray.join(" "));
}


// Calculates the result of the numbArray and returns it
function calculateResult() {
  let result = 0;
  let currentOperator = "";
  flag = 1

  for (let i = 0; i < numbArray.length; i++) { // Does multiplication and division
    let currentElement = numbArray[i];

    if ((!isNaN(currentElement)) && ((currentOperator == "*") || (currentOperator == "/"))) 
    {
      // If the current element is a number
      if (currentOperator === "*") 
      {
        //console.log("Spliced:", numbArray, i, numbArray[i - 2], numbArray[i - 1], numbArray[i])
        numbArray.splice(i - 2, 3, (numbArray[i - 2] * numbArray[i]))
        console.log(numbArray)
        i -= 2
      } 
      
      else if (currentOperator === "/") 
      {
        //console.log("Spliced:", numbArray[i - 2], numbArray[i - 1], numbArray[i])
        numbArray.splice(i - 2, 3, (numbArray[i - 2] / numbArray[i]))
        i -= 2
      }
    } 
    
    else 
    {
      // If the current element is an operator
      currentOperator = currentElement;
    }
  }

  for (let v = 0; v < numbArray.length; v++) { // Does addition and subtraction
    let currentElement = numbArray[v];

    if (!isNaN(currentElement) && ((currentOperator == "+") || (currentOperator == "-")))
    {
      // If the current element is a number
      if (currentOperator === "+") 
      {
        console.log("Spliced:", numbArray[v - 2], numbArray[v - 1], numbArray[v])
        numbArray.splice(v - 2, 3, (Number(numbArray[v - 2]) + Number(numbArray[v])))
        v -= 2
      }
      
      else if (currentOperator === "-") 
      {
        console.log("Spliced:", numbArray[v - 2], numbArray[v - 1], numbArray[v])
        numbArray.splice(v - 2, 3, (Number(numbArray[v - 2]) - Number(numbArray[v])))
        v -= 2
      }
    } 
    
    else 
    {
      // If the current element is an operator
      currentOperator = currentElement;
    }
  }

  updateDisplay(numbArray.join(" "));
}
// Shows input on display within the html
function updateDisplay() {
  document.getElementById("display").innerHTML = numbArray.join(" ");
}
// clears the display within the html and calls updateDisplay to show this change
function clearDisplay() {
  document.getElementById("display").innerHTML = "0";
  numbArray = [];
  flag = 0;
  updateDisplay();
  console.log(numbArray);
}