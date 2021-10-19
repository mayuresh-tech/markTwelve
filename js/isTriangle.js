var angleInputs = document.querySelectorAll(".angle-input");
var submitButton = document.querySelector("#submit-btn");
var outputText = document.querySelector("#output");

function sumOfAngles(a, b, c) {
    return  a + b + c;
}

function checkTraingle() {
    if(angleInputs[0].value > 0 && angleInputs[1].value > 0 && angleInputs[2].value > 0) {
        let sum = sumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
        if(sum == 180) {
            outputText.style.color = "green";
            outputText.innerHTML = "<h2> Yay! The angles form a Traingle!! 😊 </h2>";
        }
        else {
            outputText.style.color = "red";
            outputText.innerHTML = "<h2> Uh oh, these angles don't form a Triangle. 😢 <h2>";
        }
    }
    else {
        alert("Only values greator than 0 accepted");
    }
}

submitButton.addEventListener("click", checkTraingle);