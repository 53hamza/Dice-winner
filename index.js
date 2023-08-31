
var randomGenerator =Math.floor(Math.random()*6+1);
var imgGenerator = "images/dice"+randomGenerator+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imgGenerator);

var randomGenerator2 =Math.floor(Math.random()*6+1);
var imgGenerator2 = "images/dice"+randomGenerator2+".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",imgGenerator2);


if (randomGenerator>randomGenerator2) {

    document.querySelector("h1").textContent="Player 1 Wins";
}
else if (randomGenerator===randomGenerator2){
    document.querySelector("h1").textContent="DRAW";
}
else {
    document.querySelector("h1").textContent="Player 2 Wins";
}