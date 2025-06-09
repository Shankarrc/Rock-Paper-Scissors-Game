const choices = ["rock", "paper", "scissors"];
const playerdis = document.getElementById("player");
const computerdis = document.getElementById("computer");
const res = document.getElementById("res");

const playscore = document.getElementById("playscore");
const comscore = document.getElementById("comscore");
const reset = document.getElementById("reset");

let playersum = 0;
let comsum = 0;
function shan() {
    comscore.innerText = 0;
    playscore.innerText = 0;
    playersum = 0;
    comsum = 0;
}
function play(player) {
    const com = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (player === com) {
        result = "IT A TIE";
    } else {
        switch (player) {
            case "rock":
                result = com === "scissors" ? "YOU WIN" : "YOU LOSE!";
                break;
            case "paper":
                result = com === "rock" ? "YOU WIN" : "YOU LOSE!";
                break;
            case "scissors":
                result = com === "paper" ? "YOU WIN" : "YOU LOSE!";
                break;
        }
    }
    playerdis.textContent = `you:${player}`;
    computerdis.textContent = `COMPUTER:${com}`;
    res.textContent = result;
    res.classList.remove("greentext", "redtext");
    switch (result) {
        case "YOU WIN":
            res.classList.add("greentext");
            playersum++;
            playscore.textContent = playersum;
            break;
        case "YOU LOSE!":
            res.classList.add("redtext");
            comsum++;
            comscore.textContent = comsum;
            break;
    }
}
