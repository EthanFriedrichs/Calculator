var numbArray = []
var flag = 0

function addThing(x)
{
    if (flag == 0) // Decides whether to make a number bigger or to add a new number
    {
    console.log(x.innerHTML, "Added numb to array", )
    numbArray.push(x.innerHTML)
    console.log(numbArray)
    flag = 1
    }

    else
    {
        console.log(numbArray.length - 1, "Merging numbers", x.innerHTML)
        numbArray[numbArray.length - 1] = String(numbArray[numbArray.length - 1]) + String(x.innerHTML)
        console.log(numbArray)
    }
}

function addSymbol(x) // Gets a symbol buttons symbol and adds it to the array (sets flag to 1)
{
    flag = 1
    numbArray.push(x.innerHTML)
    
}
