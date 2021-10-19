var sides = document.querySelectorAll(".sides");
var submitButton = document.querySelector("#submit-btn");
var outputText = document.querySelector("#output");

function calculateHypo(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

function doOperation() {
    if(sides[0].value > 0 && sides[1].value > 0) {
        var hypoLength = calculateHypo(Number(sides[0].value), Number(sides[1].value));
        outputText.style.color = "green";
        outputText.innerHTML = `<h2> Hypotenuse: ${hypoLength.toFixed(2)} </h2>`;
    }
    else {
        alert("Only values greator than 0 accepted");
    }
}

submitButton.addEventListener("click", doOperation);