"use strict";
let gamer = 1;
let board = [[0,0,0],[0,0,0],[0,0,0]];

let letter = document.getElementsByClassName("square_divs");

for(let i = 0 ; i < letter.length ; i++) {
    letter[i].addEventListener("click",addLetters);
    function addLetters() {
        let ids = this.id;
        let idArr = ids.split("_");
        let row , col , check;
        row = +idArr[0];
        col = +idArr[1];
        if (gamer == 1) {
            if (board[row][col] == 0) {
                letter[i].innerHTML = "X";
                board[row][col] = "X";
                check = checkAll();
                if (check) {
                    window.alert("The winner is X !");
                    return;
                }
                gamer = 2;
            }
        } 
        else {
            if (board[row][col] == 0) {
                letter[i].innerHTML = "O";
                board[row][col] = "O";
                check = checkAll();
                if (check) {
                    window.alert("The winner is O !");
                    return;
                }
                gamer = 1;
            }
        }  
    }
};

function checkBoard(arr) {
    if(arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != 0) {
        return true;
    }
    return false;
}

function checkAll() {
    if(checkBoard(board[0]) || checkBoard(board[1]) || checkBoard(board[2]) || 
        checkBoard([board[0][0],board[1][0],board[2][0]]) ||  checkBoard([board[0][1],board[1][1],board[2][1]])
        || checkBoard([board[0][2],board[1][2],board[2][2]]) || checkBoard([board[0][0],board[1][1],board[2][2]])
        || checkBoard([board[0][2],board[1][1],board[2][0]])) {
            return true;
    }
    return false;
}