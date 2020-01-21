"use strict";
let body = document.getElementsByTagName("body")[0];
let loginPage = document.getElementById("screen");
let form1  = document.getElementById("form1");
let form2 = document.getElementById("form2");
form2.style.display = "none";
let homePage = document.getElementById("home_page");
homePage.style.display = "none";

let but1 = document.getElementsByClassName("button")[0];
function signIn() {
    let user = {
        login : "",
        password : ""
    };
    let items = form1.children;
    user.login = items[0].value;
    user.password = items[1].value;
    if (user.login == "") {
        items[0].style.border = "3px solid #db0c2f";
    }
    else if (user.password == "") {
        items[1].style.border = "3px solid #db0c2f";
    }
    else if (user.login.length < 5) {
        items[0].style.border = "3px solid #db0c2f";
        items[0].style.color = "#db0c2f"; 
        items[0].style.fontSize = "16px";
        items[0].value = "The length of input value musn't be short from 5.";
        function clearBorders() {
            items[0].style.border = "none";
            items[0].style.color = "#000";
            items[0].style.fontSize = "22px";
            items[0].value = "";
        }
        items[0].addEventListener("click",clearBorders);
    }
    else if (user.password.length < 5) {
        items[1].type = "text";
        items[1].style.border = "3px solid #db0c2f";
        items[1].style.color = "#db0c2f"; 
        items[1].style.fontSize = "16px";
        items[1].value = "The length of input value musn't be short from 5.";
        function clearBorders() {
            items[1].style.border = "none";
            items[1].type = "password";
            items[1].style.color = "#000";
            items[1].style.fontSize = "22px";
            items[1].value = "";
        }
        items[1].addEventListener("click",clearBorders);
    }
    else {
        console.log(user);
        loginPage.style.display = "none";
        homePage.style.display = "block";
    }
    for(let i = 0 ; i < form1.children.length-3 ; i++) {
        if (user.login == "" && user.password == "") {
            items[i].style.border = "3px solid #db0c2f";
            for(let i = 0 ; i < items.length-3 ; i++) {
                function clearBorders() {
                    items[i].style.border = "none";
                }
                function bordersAgain() {
                    this.style.border = "3px solid #db0c2f";
                }
                items[i].addEventListener("click",clearBorders);
                items[i].addEventListener("click",bordersAgain);
            }
        }
    };
}
but1.addEventListener("click",signIn);

function pushEnter(event) {
    let user = {
        login : "",
        password : ""
    };
    let items = form1.children;
    user.login = items[0].value;
    user.password = items[1].value;
    if (event.keyCode === 13 && user.login != "" && user.password != "") {
        loginPage.style.display = "none";
        homePage.style.display = "block";
    }
}
document.addEventListener("keypress",pushEnter);


let show = document.getElementById("icon1");
let hide = document.getElementById("icon2");
show.addEventListener("click",function changeType() {
    show.style.display="none";
    hide.style.display="block";
    let pas = document.getElementsByClassName("text")[1];
    pas.type="text";
});
hide.addEventListener("click",function changeType() {
    hide.style.display="none";
    show.style.display="block";
    let pas = document.getElementsByClassName("text")[1];
    pas.type="password";
});

let but2 = document.getElementsByClassName("button3")[0];
function signUp() {
    form1.style.display = "none";
    show.style.display = "none";
    form2.style.display = "block";
    let items = form2.children;
    for(let i = 0 ; i < items.length ; i++) {
        items[i].value = ""; 
        items[i].style.border = "none"; 
        items[i].value = "";
    }
}
but2.addEventListener("click",signUp); 

let but3 = document.getElementById("send");
function send() {
    let newUser = {
        userName : "",
        password : "",
        passwordAgain : ""
    };
    let items = form2.children;
    newUser.userName = items[0].value;
    newUser.password = items[1].value;
    newUser.passwordAgain = items[2].value;
    if (newUser.userName == "") {
        items[0].style.border = "3px solid #db0c2f";
    }
    else if (newUser.password == "") {
        items[1].style.border = "3px solid #db0c2f";
    }
    else if (newUser.passwordAgain == "") {
        items[2].style.border = "3px solid #db0c2f";
    }
    else if (newUser.userName.length < 5) {
        items[0].style.border = "3px solid #db0c2f";
        items[0].style.color = "#db0c2f"; 
        items[0].style.fontSize = "16px";
        items[0].value = "The length of input value musn't be short from 5.";
        function clearBorders() {
            items[0].style.border = "none";
            items[0].style.color = "#000";
            items[0].style.fontSize = "22px";
            items[0].value = "";
        }
        items[0].addEventListener("click",clearBorders);
    }
    else if (newUser.password.length < 5) {
        items[1].type = "text";
        items[1].style.border = "3px solid #db0c2f";
        items[1].style.color = "#db0c2f"; 
        items[1].style.fontSize = "16px";
        items[1].value = "The length of input value musn't be short from 5.";
        function clearBorders() {
            items[1].style.border = "none";
            items[1].type = "password";
            items[1].style.color = "#000";
            items[1].style.fontSize = "22px";
            items[1].value = "";
        }
        items[1].addEventListener("click",clearBorders);
    }
    else {
        if (newUser.password === newUser.passwordAgain) {
            console.log(newUser);
            form2.style.display = "none";
            window.alert("Your dates are confirmed dear user!");
            form1.style.display = "block";
            show.style.display = "block";
        }
    }
    if (newUser.userName == "" && newUser.password == "" && newUser.passwordAgain == "") {
        for(let i = 0 ; i < items.length-2 ; i++) {
            items[i].style.border = "3px solid #db0c2f";
            function clearBorders() {
                items[i].style.border = "none";
            }
            function bordersAgain() {
                this.style.border = "3px solid #db0c2f";
            }
            items[i].addEventListener("click",clearBorders);
            items[i].addEventListener("click",bordersAgain);
        }
    }
    else if (newUser.userName != "" && newUser.password == "" && newUser.passwordAgain == "") {
        items[1].style.border = "3px solid #db0c2f";
        items[2].style.border = "3px solid #db0c2f";
    }
    else if (newUser.password != "" && newUser.userName == "" && newUser.passwordAgain == "") {
        items[0].style.border = "3px solid #db0c2f";
        items[2].style.border = "3px solid #db0c2f";
    }
    else if (newUser.passwordAgain != "" && newUser.password == "" && newUser.userName == "") {
        items[0].style.border = "3px solid #db0c2f";
        items[1].style.border = "3px solid #db0c2f";
    }
    else if (newUser.password !== newUser.passwordAgain && newUser.passwordAgain != "" && newUser.password != "") {
        try{
            throw new SyntaxError("Your passwords are not same.");
        }
        catch(error) {
            items[0].style.color = "#db0c2f";
            items[0].value = error.message;
            items[1].style.border = "3px solid #db0c2f";
            items[2].style.border = "3px solid #db0c2f";
            console.log(error.name + " : " + error.message);
            for(let i = 0 ; i < items.length-2 ; i++) {
                function clearText() {
                    items[i].value = "";
                    items[i].style.border = "none";
                    items[i].style.color = "#000";
                }
                items[i].addEventListener("click",clearText);
            }
        }
    }
}
but3.addEventListener("click",send);

function pressEnter(event) {
    let newUser = {
        userName : "",
        password : "",
        passwordAgain : ""
    };
    let items = form2.children;
    newUser.userName = items[0].value;
    newUser.password = items[1].value;
    newUser.passwordAgain = items[2].value;
    if (event.keyCode === 13 && newUser.name != "" && newUser.password != "" && newUser.passwordAgain != "" && 
        newUser.password !== newUser.passwordAgain) {
        form2.style.display = "none";
        if (form2.style.display == "none") {
            form1.style.display = "block";
        }
        
    }
}
document.addEventListener("keypress",pressEnter);

let but4 = document.getElementsByClassName("button5")[0];
function signInPage() {
    form2.style.display = "none";
    form1.style.display = "block";
    show.style.display = "block";
    let items = form1.children;
    for(let i = 0 ; i < items.length ; i++) {
        items[i].value = ""; 
        items[i].style.border = "none"; 
        items[i].value = "";
    }
}
but4.addEventListener("click",signInPage); 

let text = document.getElementsByClassName("text");
for(let i = 0 ; i < text.length ; i++) {
    text[i].addEventListener("focus",function() {
        text[i].style.border = "3px solid #db0c2f";
    });
    text[i].addEventListener("blur",function() {
        text[i].style.border = "none";
    });
}

let time = document.getElementById("clock");
let timer = setInterval(() => {
    let clock = new Date();
    let hours = String(clock.getHours());
    if (hours.length < 2) {
        hours = "0" + hours;
    }
    let minutes = String(clock.getMinutes());
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }
    let seconds = String(clock.getSeconds());
    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }
    time.innerHTML = hours + " : " + minutes + " : " + seconds; 
},0);










