$(document).ready(function() {
    let about = $(".about");
    let aboutPage = $("#about");
    about.click(() => {
        aboutPage.css({"display":"block"});
    });
    let skills = $(".skills");
    let skillsPage = $("#skills");
    skills.click(() => {
        skillsPage.css({"display":"block"});
    });
    let experience = $(".experience");
    let experiencePage = $("#experience");
    experience.click(() => {
        experiencePage.css({"display":"block"});
    });
    let portfolio = $(".portfolio");
    let portfolioPage = $("#portfolio");
    portfolio.click(() => {
        portfolioPage.css({"display":"block"});
    });

    let time = $("#clock");
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
        time.html(hours + " : " + minutes + " : " + seconds);
    },0);
});

"use strict";
let direct = document.getElementById("top");
function scroll()  {
    if (document.documentElement.scrollTop > 300) {
        direct.style.display = "block";
    }
    else {
        direct.style.display = "none";
    }
}
window.onscroll = () => {
    scroll();
}
direct.addEventListener("click",() => {
    document.documentElement.scrollTop = 0;
});

let modalPhoto = document.getElementById("modalDiv");
let photo = document.getElementsByClassName("photo-1")[0];
let photo2 = document.getElementsByClassName("photo-2")[0];
let remove = document.getElementsByClassName("close")[0];
photo.addEventListener("click",() => {
    modalPhoto.style.display="flex";
    photo2.style.display="flex";
});
remove.addEventListener("click",() => {
    modalPhoto.style.display="none";
    photo2.style.display="none";
});
window.onclick = function(event) {
    if (event.target == modalPhoto) {
        modalPhoto.style.display="none";
        photo2.style.display="none";
    }
};
 