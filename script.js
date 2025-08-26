
var player1 = "player1"
var player2 = "player2"

function editNames(){
    player1 = prompt ("enter player 1 name")
    player2 = prompt ("enter player 2 name")

    if(player1.length<1 || player2.length <1){
        alert("please enter valid name");
        return;

    }
    document.querySelector("p.player1")
    .innerHTML = player1;

    document.querySelector("p.player2")
    .innerHTML = player2;
}

function rollTheDice(){
    var diceNum1 = document.querySelector(".img1");
    var diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src","dice.gif")
    diceNum2.setAttribute("src","dice.gif")

    var result =document.querySelector("h1")
    setTimeout(() =>{
        var randomNumber1 = (Math.random()*6)+1;
        var randomNumber2 = (Math.random()*6)+1;



        diceNum1.setAttribute("src","dice"+randomNumber1+ ".png");
        diceNum1.setAttribute("src","dice"+randomNumber2+ ".png");

if(randomNumber1 === randomNumber2){
    result.innerHTML = "Draw!";
}
else if(randomNumber1<randomNumber2){
result.innerHTML = (player2+"WINS!");
}
else(
  result.innerHTML = (player1+"WINS!")  
)

    }, 2500);

    
}