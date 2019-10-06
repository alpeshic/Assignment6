var coinFlip;
var i;
for (i = 0; i < 10; i = i + 1) 
{
    coinFlip = Math.floor(Math.random() * 2);
    if(coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
} 