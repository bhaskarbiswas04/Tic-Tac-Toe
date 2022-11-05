console.log("Welcome to Tic Tac Toe")

let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let playTurn = "X"
let isgameover = false

// Function to change the turn
const changeTurn = ()=>{
    return playTurn === "X"? "0" : "X"
}

// Function to check for a win.
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== "")
        {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px"
        }

    })  
}

//Game Logic
// music.play()
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText')
    
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = playTurn
            playTurn = changeTurn();
            turn.play();
            checkWin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + playTurn;
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    playTurn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + playTurn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px"
    
})

