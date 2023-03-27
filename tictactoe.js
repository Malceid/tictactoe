//Why did I have to install prompts for this???
const prompt = require('prompt-sync')({sigint: true});

//Why must nodejs make our work harder
const multiLinePrompt = ask => {                                                          
    const lines = ask.split(/\r?\n/)                                                   
    const promptLine = lines.pop()                                                   
    console.log(lines.join('\n'))                                                    
    return prompt(promptLine)                                                      
};      


//Create 2d array
var arr = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
    ]


//Declare every variable that will be used 
var ranX = 0
var ranY = 0
var turns = 0
var userx = 0
var usery = 0

//Boolean values that will serve as the game state
var gamerunning = true
var playerturn = false

//Get random matrix value
function getRanVector(x, y) {
    ranX = Math.floor(Math.random() * 3)
    ranY = Math.floor(Math.random() * 3)
}


cFlip = multiLinePrompt("press 0 for heads or 1 for tails\n")
flipRes = Math.floor(Math.random() * 2)
console.log(`The coin landed with a value of ${flipRes}`)
if (cFlip == flipRes) {
    playerturn = true
} 

console.log("The bot is very dumb so it is impossible for you to lose")
console.log("If you put a move on an already used vector, your move will not be counted and your turn will end.")
arr.forEach(result=>console.log(...result))


do {

    if (playerturn == true) {
        playermove()
        playerturn = false
        
    } else if (playerturn == false) {
        aiturn()
        playerturn = true
    }

    checkVt(arr)
    checkDiag(arr)
    checkHz(arr)

} while (gamerunning == true) 


if (gamerunning == false) {
    console.log("Thanks for playing! No retry input yet so u have to run the script again sorry")
}





//Functions----------------------------------------------------------------------------


/*A function to convert an integer from 1-9 to x-axis and y-axis coordinates 
and yes I figured this out on my own lol */
function calcVector(a) {
    userx = (a + 5) % 3
    if (a <= 3) {
    usery = (a - a) 
    } else if (a <= 6) {
    usery = (a - (a - 1)) 
    } else if (a <= 9){
        usery = (a - (a - 2))
    }
}

//Player turn
function playermove() {
    console.log("---------------------Your Turn--------------------------")
    var playerchoice = multiLinePrompt("Please enter a number from 1-9\n")
    calcVector(playerchoice)
    if (arr[usery][userx] == "O" || arr[usery][userx] == "X") {
        console.log("!!!!!!!!!!!!!!!!!!!!!You can't do that!!!!!!!!!!!!!!!!!!!!")
    } else if (arr[usery][userx] != "O" || arr[usery][userx] != "X") {
        arr[usery][userx] = "X"
    }  
    
    arr.forEach(result=>console.log(...result))
    console.log("---------------------Your Turn--------------------------")
}

//Dumb ai makes a move or something
function aiturn() {
    console.log("---------------------AI Turn--------------------------")

    if (arr[ranY][ranX] == "O" || arr[ranY][ranX] == "X") {
        while (arr[ranY][ranX] == "O" || arr[ranY][ranX] == "X") {
        getRanVector(ranX, ranY)
    }
       }  
       if (arr[ranY][ranX] != "O") { 
            arr[ranY][ranX] = "O"
            getRanVector(ranX, ranY)

    } 
    arr.forEach(result=>console.log(...result))
    console.log("---------------------AI Turn--------------------------")
}

//Check for horizontal symmetry for win condition
function checkHz(arr) {
let hr1 = '', hr2 ='', hr3 = ''
for (let x = 0; x <= 2; x++) {
        hr1 += arr[0][x]       
    }
for (let x = 0; x <= 2; x++) {
        hr2 += arr[1][x]       
     
    }
for (let x = 0; x <= 2; x++) {
        hr3 += arr[2][x]       
         
    }

hr1 = hr1.replaceAll(',','')
hr2 = hr2.replaceAll(',','')
hr3 = hr3.replaceAll(',','')

userWinner(hr1, hr2, hr3)
botWinner(hr1, hr2, hr3)
}


//Check for vertical symmetry for win condition
function checkVt(arr) {
let hr1 = '', hr2 ='', hr3 = ''
for (let x = 0; x <= 2; x++) {
        hr1 += arr[x][0]       
    }
for (let x = 0; x <= 2; x++) {
        hr2 += arr[x][1]       
     
    }
for (let x = 0; x <= 2; x++) {
        hr3 += arr[x][2]       
         
    }

hr1 = hr1.replaceAll(',','')
hr2 = hr2.replaceAll(',','')
hr3 = hr3.replaceAll(',','')

userWinner(hr1, hr2, hr3)
botWinner(hr1, hr2, hr3)
}



//Check diagonal symmetry for win condition
function checkDiag(arr) {
let hr1 = '', hr2 = ''
for (let x = 0; x <= 2; x++) {
        hr1 += arr[x][x]       
    }
for (let x = 0, y = 2; x <= 2; x++, y--) {
        hr2 += arr[y][x]
        }
hr1 = hr1.replaceAll(',','')
hr2 = hr2.replaceAll(',','')

userWinner(hr1, hr2)
botWinner(hr1, hr2)
}







//Win condition for user
function userWinner(a, b, c) {
        if (a == "XXX") {
                console.log("User wins!")
                gamerunning = false
        } else if (b == "XXX") {
                console.log("User wins!")
                gamerunning = false
        } else if (c == "XXX"){
                console.log("User wins!")
                gamerunning = false
        } else {
                return
        }
}

//Win condition for bot
function botWinner(a, b, c) {
        if (a == "OOO") {
                console.log("Bot wins!")
                gamerunning = false
        } else if (b == "OOO") {
                console.log("Bot wins!")
                gamerunning = false
        } else if (c == "OOO"){
                console.log("Bot wins!")
                gamerunning = false
        } else {
                return
        }
}
