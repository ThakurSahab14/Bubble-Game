var circlenum = "";
function makebubble() {
    for (var i = 1; i <= 162; i++) {
        var rand = Math.floor(Math.random() * 10);
        circlenum += `<div class="bubble">${rand}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = circlenum;

}

var timer = 60;
function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            // document.querySelector("#pbtm").innerHTML = `  `;
            document.querySelector("#pbtm").innerHTML = ` <h1>Game Over</h1><h2> Your Highest Score : ${score} </h2>`;
        }
    }, 1000);
}

var hitrandom = 0;
function getnewhit() {
    hitrandom = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrandom;

}

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#hitscore").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickednumber = Number(details.target.textContent);
    if (clickednumber === hitrandom) {
        increaseScore();
        makebubble();
        getnewhit();
    }

});


runtimer();
getnewhit();
makebubble();

