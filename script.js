let display = "";

function press(value) {
    display += value;
    document.getElementById("screen").value = display;
}

function calculate() {
    try {
        display = eval(display);
        document.getElementById("screen").value = display;
    } catch {
        document.getElementById("screen").value = "Error";
        display = "";
    }
}

function clearScreen() {
    display = "";
    document.getElementById("screen").value = "";
}

function backspace() {
    display = display.slice(0, -1);
    document.getElementById("screen").value = display;
}