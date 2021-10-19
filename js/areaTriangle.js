var baseAndHeight = document.querySelectorAll(".bh");
var radius = document.querySelectorAll(".radius");
var submitButtonTriangle = document.querySelector("#submit-btn");
var submitButtonCircle = document.querySelector("#submit-btn-circle");
var outputText = document.querySelector("#output");

function calculateTriangleArea(base, height) {
    return ( base * height ) / 2;
}

function doTriangleOperation() {
    if(baseAndHeight[0].value > 0 && baseAndHeight[1].value > 0) {
        var area = calculateTriangleArea(Number(baseAndHeight[0].value), Number(baseAndHeight[1].value));
        outputText.style.color = "green";
        outputText.innerHTML = `<h2> Area: ${area.toFixed(2)} </h2>`;
    }
    else {
        alert("Only values greator than 0 accepted");
    }
}

function calculateCircleArea(radius) {
    return ( Math.PI * (radius * radius) );
}

function doCircleOperation() {
    if(radius.value > 0) {
        var area = calculateCircleArea(Number(radius.value));
        outputText.style.color = "green";
        outputText.innerHTML = `<h2> Area: ${area.toFixed(2)} </h2>`;
    }
    else {
        alert("Only values greator than 0 accepted");
    }
}

submitButtonTriangle.addEventListener("click", doTriangleOperation);
submitButtonCircle.addEventListener("click", doCircleOperation);