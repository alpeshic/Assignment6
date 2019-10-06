var coinFlip = Math.floor(Math.random() * 100);

var choice;
var isChoiceValid = false;
while(!isChoiceValid)
{
    choice = window.prompt("Enter Heads or Tails").trim();
    switch(choice)
    {
        case "Heads":
            isChoiceValid = true;
            break;
        case "Tails":
            isChoiceValid = true;
            break;
        default:
            alert("Please enter Heads or Tails");
    }
}

if (coinFlip > 50) // If coinFlip > 50 than it is tails
{
    if (choice === "Tails")
    {
        window.alert("The flip was tails and you chose tails...you win!");
    } else {
        window.alert("The flip was tails but you chose heads...you lose!");
    }
} else {
    if (choice === "Heads")
    {
        window.alert("The flip was heads and you chose heads...you win!");
    } else {
        window.alert("The flip was heads but you chose tails...you lose!");
    }
}