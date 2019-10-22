"use strict";

let chance=0;
let setup;
let gameOver= false; //will be changed to true if there is a winner
let gameState= []; //keeps track of what has been played
let plays=["X","O"];//options person has to play

let status= null;


window.onload= function() {
    var bod= document.getElementsByTagName("body");
    console.log(bod);

    
    var game = document.getElementById("board").querySelectorAll("div");
    setup= game.children;

    for(let square of game){
        square.className='square';// add class to square
        square.onclick= () => {clickSquare(square)};
        square.onmouseover= () =>{squareHover(square)};
        square.onmouseout= () =>{noHover(square)};
    }    
    
    let restartGame= document.getElementsByClassName("btn");
    restartGame[0].addEventListener("click",()=>{this.location.reload();});
}


function clickSquare(square){
//want to place either a X or a O into the square 
    var val= gameState[gameState.length-1];
    //if(!this.innerText && !gameOver){
    
        if (gameState==[]){
            playX(square);
            chance++;
        }//checking if array is empty before action         
        else if(val==="X"){
            play0(square);//next click will result in a O
            chance++;
        }
        else{
            playX(square);//next click will result in a X
            chance++
        }
        if(chance>3){
            isWinner();
        }
    //}
    
}

function playX(square){
    //add classList X and push an X into the array
    square.classList.add("X");//apply the square.X css class to the square.
    square.innerHTML= "X";
    gameState.push(plays[0]);
}//insert an x into box

//adds a O to the array of plays and plays a O on the gameboard
function play0(square){
    square.classList.add("O");
    square.innerHTML= "O";
    gameState.push(plays[1]);
}

//adds hover style to class
function squareHover(square){
    square.classList.add("hover");
}

//removes the hover style from square
function noHover(square){
    square.classList.remove("hover");
}

//checks for a winner of the game
function isWinner(){
    const check= (s1,s2,s3) =>{
        if((setup[s1].innerHTML===setup[s2].innerHTML)&& (setup[s1].innerHTML===setup[s3].innerHTML)&& (setup[s2].innerHTML===setup[s3].innerHTML)){
            return true;
        }
        else{
            return false;
        }

    }
    //check for wins in vertical
    wonGame=check(0,3,6) || check(1,4,7) || check(2,5,8);
    
    //check for wins in horizontal
    wonGame= wonGame || check(0,1,2) || check(3,4,5) || check(6,7,8);

    //check for diagonal wins
    wonGame= wonGame || check(0,4,8) || check(2,4,6);

    if(wonGame){
        const msg= document.getElementById("status");
        youWon();
        gameWon=true;
    }
    else{
        if(chance==8){
            status.textContent= "DRAW"
        }
    }
      
}

function youWon(msg){
    status.textContent= "Congratulations!" + gameState[gameState.length-1]+ "is the Winner!";
    status.className= "you-won";
    console.log("PERSON WON");
}


