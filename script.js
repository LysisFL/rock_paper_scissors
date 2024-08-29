console.log("Hello World!")

let computerScore = 0
let humanScore = 0

function playGame() {
    for(let i=0;i<5;i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    if(computerScore>=humanScore)
        console.log("The computer wins! ")
    else if (computerScore===humanScore)
        console.log("Draw! ")
    else 
        console.log("The player wins! ")
    console.log("Player: " + humanScore + ", Computer: " + computerScore)
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        console.log("Draw! Both players played " + humanChoice + "!")
    else if (humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        console.log("You lose, " + computerChoice + " beats " + humanChoice + "!")
        computerScore++
    }
    else {
        console.log("You win, " + humanChoice + " beats " + computerChoice + "!")
        humanScore++
    }
}

function getComputerChoice() {
    let computerChoice = Math.random() * 100
    if (computerChoice<=100/3)
        return "rock"
    else if (computerChoice<=200/3)
        return "paper"
    else 
        return "scissors"
}

function getHumanChoice() {
    let humanChoice
    while(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = prompt("Choose rock, paper or scissors:")
        if (typeof humanChoice === null) humanChoice = ""
        console.log("The human typed: " + humanChoice)
        return humanChoice.toLowerCase()
    }
}

playGame()