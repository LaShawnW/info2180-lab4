"use strict";




window.onload= function() {
    var bod= document.getElementsByTagName("body");
    console.log(bod);

    var game = document.getElementById("board").querySelectorAll("div");
    game.forEach(s=>{s.className="square";});
}
