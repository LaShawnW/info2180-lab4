"use strict";

let gameState= []; //keeps track of what has been played
let plays=["X","O"];//options person has to play


window.onload= function() {
    var bod= document.getElementsByTagName("body");
    console.log(bod);

    
    var game = document.getElementById("board").querySelectorAll("div");

    for(let square of game){
        square.className='square';// add class to square
        square.onclick= () => {clickSquare(square)};
        square.onmouseover= () =>{squareHover(square)};
        square.onmouseout= () =>{noHover(square)};
    }          
}


function clickSquare(square){
//want to place either a X or a O into the square 
    var val= gameState[gameState.length-1];
    if (gameState==[]){
        playX(square);
    }//checking if array is empty before action         
    else if(val==="X"){
        play0(square);//next click will result in a O
    }
    else{
        playX(square);//next click will result in a X
    }    
        
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
