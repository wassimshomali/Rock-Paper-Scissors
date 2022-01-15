let userScore = 0
let cpuScore = 0
let gameOver = false

function resetGame() {
    document.getElementById("userScore").innerHTML = "0"
    document.getElementById("cpuScore").innerHTML = "0"
    document.getElementById("prompt").innerHTML = "pick one"
    console.log("\n      ~~~~~~~~~~~ \nthe game has been reset \n      ~~~~~~~~~~~ \n \n")
    userScore = 0
    cpuScore = 0
    gameOver = false
}

function rockClick() {
    if (gameOver == true) {
        resetGame()
    } else 
    userPick = "Rock"
    console.log("User has selected Rock")
    document.getElementById("displayUser").innerHTML = "Rock"

    cpuCheck(userPick)
    checkScore()
}
function paperClick() {
    if (gameOver == true) {
        resetGame()
    } else 
    userPick = "Paper"
    console.log("User has selected Paper")
    document.getElementById("displayUser").innerHTML = "Paper"
    cpuCheck(userPick)
    checkScore()
}
function scissorsClick() {
    if (gameOver == true) {
        resetGame()
    } else 
    userPick = "Scissors"
    console.log("User has selected Scissors")
    document.getElementById("displayUser").innerHTML = "Scissors"
    cpuCheck(userPick)
    checkScore()
}

function cpuCheck(userPick) {
    let cpuArray = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * cpuArray.length)
    let cpuPick = cpuArray[random]
    console.log("CPU has selected " + cpuPick)
    document.getElementById("displayCpu").innerHTML = cpuPick

    if (cpuPick == userPick) {
        console.log("tie game")
        promptTie()
        addCpu()
        addUser()
    } else if (userPick == "Rock" && cpuPick == "Paper"){
        console.log("Computer wins")
        promptLoss()
        addCpu()
    } else if (userPick == "Rock" && cpuPick == "Scissors"){
        console.log("User wins")
        promptWin()
        addUser()
    } else if (userPick == "Paper" && cpuPick == "Rock"){
        console.log("User wins")
        promptWin()
        addUser()
    } else if (userPick == "Paper" && cpuPick == "Scissors"){
        console.log("Computer wins")
        promptLoss()
        addCpu()
    } else if (userPick == "Scissors" && cpuPick == "Rock"){
        console.log("Computer wins")
        promptLoss()
        addCpu()
    } else if (userPick == "Scissors" && cpuPick == "Paper"){
        console.log("User wins")
        promptWin()
        addUser()
    }
}

function checkScore() {
    console.log("user: " + userScore)
    console.log("computer: " + cpuScore + "\n                -------------------")
    if (userScore == 5 && cpuScore == 5) {
        document.getElementById("prompt").innerHTML = "Game over, tie Game!"
        console.log("\ngame over. Tie game!\n ")
        gameOver = true
    } else if (userScore == 5) {
        document.getElementById("prompt").innerHTML = "Game over, you Win!"
        console.log("\ngame over. User wins!\n ")
        gameOver = true
    } else if (cpuScore == 5) {
        document.getElementById("prompt").innerHTML = "Game over, you lose!"
        console.log("\ngame over. Cpu wins!\n ")
        gameOver = true
    }
}

function addUser() {
    userScore++
    document.getElementById("userScore").innerHTML = userScore
}
function addCpu() {
    cpuScore++
    document.getElementById("cpuScore").innerHTML = cpuScore

}
function promptWin() {
    document.getElementById("prompt").innerHTML = "You won this round!"
    
}
function promptLoss() {
    document.getElementById("prompt").innerHTML = "You lost this round!"
    
}
function promptTie() {
    document.getElementById("prompt").innerHTML = "Tie Round!"
    
}