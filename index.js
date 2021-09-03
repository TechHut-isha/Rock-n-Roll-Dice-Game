var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6);
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomimage = "dice" + randomNumber1 + ".png";

var randomimgsrc = "images/" + randomimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimgsrc);


var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6);
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomimage1 = "dice" + randomNumber2 + ".png";

var randomimgsrc1 = "images/" + randomimage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimgsrc1);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!🚩";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
