// const h2 = document.createElement("h2");
// h2.textContent = "This content was added by Javascript";
// document.querySelector("body").appendChild(h2);
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]
let userArray = []
const loaded = false

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
        document.body.innerHTML = "<h1>This is the real website</h1>"
    }
});