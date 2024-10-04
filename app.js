"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bmi = bmi;
function bmi() {
    var heightElement = document.getElementById("height");
    var weightElement = document.getElementById("weight");
    
    var height = parseFloat(heightElement.value);
    var weight = parseFloat(weightElement.value);

    if (height === 0) {
        alert("Height cannot be zero.");
        return;
    }
    var value = weight / (height * height);
    alert(value.toFixed(2));
}
