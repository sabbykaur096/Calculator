var screen = document.getElementById("screen");
console.log(screen.value)
var buttons = document.querySelectorAll("button");
var screenValue = "";
const hist = [];
var history = "";

var histo = document.getElementById("tarea")

for (items of buttons) {
    items.addEventListener("click", (e) => {

        buttonText = e.target.innerText;
        console.log("button text is", buttonText);
        if (buttonText == "*") {
            screenValue += buttonText;
            screen.value = screenValue;
            hist.push(buttonText);
        } else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
            //hist.push(buttonText);
        } else if (buttonText == "Bspc") {
            var str = screen.value;
            screenValue = str.substr(0, str.length - 1);
            screen.value = screenValue;
        } else if (buttonText == "=") {
            screen.value = eval(screenValue);
            hist.push(buttonText);
            console.log(hist.push(screen.value));

        } else if (buttonText == "history") {
            for (var i = 0; i < hist.length; i++) {
                histo.value = hist[i];
                screen.value = histo.value;
            }
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
            hist.push(buttonText);
        }
    })
}
console.log(hist);
var input = document.getElementById("bac");

input.addEventListener("click", back);

function back() {

    var value = document.getElementById("bac").value;
    document.getElementById("bac").value = value.substr(0, value.length - 1);
}
