// Function to edit the player name

const edit = () => {
    let x = prompt("Enter Player1's Name: ");
    let y = prompt("Enter Player2's Name: ");

    document.getElementsByClassName("name")[0].innerHTML = x;
    document.getElementsByClassName("name")[1].innerHTML = y;
}

// Function to play or roll the dice

const play = () => {
    let ii = (Math.floor(Math.random() * 6) + 1);
    let jj = (Math.floor(Math.random() * 6) + 1);
    let diceImages = [];
    diceImages[1] = "<i class='fa-solid fa-dice-one fa-4x'></i>";
    diceImages[2] = "<i class='fa-solid fa-dice-two fa-4x'></i>";
    diceImages[3] = "<i class='fa-solid fa-dice-three fa-4x'></i>";
    diceImages[4] = "<i class='fa-solid fa-dice-four fa-4x'></i>";
    diceImages[5] = "<i class='fa-solid fa-dice-five fa-4x'></i>";
    diceImages[6] = "<i class='fa-solid fa-dice-six fa-4x'></i>";

    if(ii == jj){
        document.getElementById("dice1").innerHTML = diceImages[ii];
        document.getElementById("dice2").innerHTML = diceImages[jj];
        document.getElementById("result").innerHTML = "IT'S A DRAW!";
        document.getElementById("result").style.color = "lightcoral";
    }else if(ii > jj){
        document.getElementById("dice1").innerHTML = diceImages[ii];
        document.getElementById("dice2").innerHTML = diceImages[jj];
        document.getElementById("result").innerHTML = document.getElementsByClassName("name")[0].innerHTML + " WINS!";
        document.getElementById("result").style.color = "lightcoral";
    }else if(ii < jj){
        document.getElementById("dice1").innerHTML = diceImages[ii];
        document.getElementById("dice2").innerHTML = diceImages[jj];
        document.getElementById("result").innerHTML = document.getElementsByClassName("name")[1].innerHTML + " WINS!";
        document.getElementById("result").style.color = "lightcoral";
    }
}