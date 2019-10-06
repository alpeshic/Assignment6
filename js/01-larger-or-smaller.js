var firstInteger = getInput("Enter first integer to compare");
var secondInteger = getInput("Enter second intefer to compare");
if(firstInteger > secondInteger)
{
    document.write(firstInteger + " is greater than " + secondInteger);
}
else if(firstInteger < secondInteger)
{
    document.write(secondInteger + " is greater than " + firstInteger);
}
else{
    document.write(firstInteger + " and " + secondInteger +" both are equal.");
}

function getInput(msg)
{
    var userEnteredNumber;
    var isInputValid = false;
    //console.log(parseInt(window.prompt("Enter number to countdown from").trim()));
    while(!isInputValid)
    {
        userEnteredNumber = parseInt(window.prompt(msg).trim());
        console.log(userEnteredNumber);
        if(!Number.isInteger(userEnteredNumber))
        {
            window.alert("Please enter valid number");
        } else{
            isInputValid = true;   
        }
    }
    return userEnteredNumber;
}