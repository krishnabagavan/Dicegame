var randomnumber1=Math.floor(Math.random() * 6) + 1;

var randomdiceimage="dice" + randomnumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage);



var randomnumber2=Math.floor(Math.random( ) * 6)+1;
var randomsourceimage2="dice"+randomnumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomsourceimage2);


//who wins
if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="player1 Wins";
}
else if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="player2 Wins";
}
else {
    document.querySelector("h1").innerHTML="draw";
}


