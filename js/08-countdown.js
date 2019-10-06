var userEnteredNumber;
var isInputValid = false;
//console.log(parseInt(window.prompt("Enter number to countdown from").trim()));
while(!isInputValid)
{
    userEnteredNumber = parseInt(window.prompt("Enter number to countdown from").trim());
    console.log(userEnteredNumber);
    if(!Number.isInteger(userEnteredNumber))
    {
        window.alert("Please enter valid number");
    } else{
         isInputValid = true;   
    }
}
for( var i = userEnteredNumber; i > 0; i = i - 1)
{
   console.log(i);
}