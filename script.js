const body = document.getElementById("body");
const kcode = document.getElementById("kcode");
const main = document.getElementById("main");
const second = document.getElementById("second");
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
let userArray = [];

document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key === konamiCode[userArray.length]) {
        userArray.push(event.key)
    } else {
        userArray = []
        console.log("Wrong input try again!")
    }

    if (userArray.length === konamiCode.length && userArray.every((value, index) => value === konamiCode[index])) {
        console.log("finish")
        kcode.style.display="none"
        main.style.display="none"
        second.style.visibility="visible"
        body.style.background="#ffcba4"
    }
});