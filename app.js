var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

var dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

//document.querySelector('#score-1').innerHTML = '';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//console.log("шоо : " + dice);

document.querySelector(".btn-roll").addEventListener("click", shooShid);

function shooShid() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    document
      .querySelector(".player-" + 0 + "-panel")
      .classList.toggle("active");
    document
      .querySelector(".player-" + 1 + "-panel")
      .classList.toggle("active");
    diceDom.style.display = "none";
  }
}
