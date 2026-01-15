const messages = ["Are you sure?", "Think again…", "Come on 😭", "Ibaze unkanze nanone"];
let index = 0;

const bgMusic = document.getElementById("bgMusic");
const yesMusic = document.getElementById("yesMusic");
const askScreen = document.getElementById("askScreen");
const yesScreen = document.getElementById("yesScreen");

function handleNo() {
    const no = document.querySelector(".no-button");
    const yes = document.querySelector(".yes-button");

    no.textContent = messages[index];
    index = (index + 1) % messages.length;

    yes.style.fontSize =
        parseFloat(getComputedStyle(yes).fontSize) * 1.4 + "px";
}

function handleYes() {
    askScreen.classList.add("hidden");
    fadeOut(bgMusic);

    setTimeout(() => {
        yesScreen.classList.remove("hidden");

        yesMusic.volume = 0;
        yesMusic.play();
        fadeIn(yesMusic);

        startHeartRain();
    }, 1200);
}

function fadeOut(audio) {
    let v = audio.volume;
    const i = setInterval(() => {
        if (v > 0.05) {
            v -= 0.05;
            audio.volume = v;
        } else {
            audio.pause();
            clearInterval(i);
        }
    }, 60);
}

function fadeIn(audio) {
    let v = 0;
    const i = setInterval(() => {
        if (v < 1) {
            v += 0.05;
            audio.volume = v;
        } else {
            clearInterval(i);
        }
    }, 60);
}

setInterval(() => {
    const f = document.createElement("div");
    f.className = "floating";

    f.innerHTML = "🌸";
    f.style.left = Math.random() * 100 + "vw";

    const depth = Math.random();
    let duration;

    if (depth < 0.33) {
        f.classList.add("flower-far");
        duration = 12;
    } else if (depth < 0.66) {
        f.classList.add("flower-mid");
        duration = 6;
    } else {
        f.classList.add("flower-close");
        duration = 3;
    }

    f.style.animationDuration = duration + "s";
    document.getElementById("flowerLayer").appendChild(f);

    setTimeout(() => f.remove(), duration * 1000);
}, 100);

