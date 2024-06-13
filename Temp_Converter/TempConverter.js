const textBox = document.getElementById("tempTextBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
let temp;

function Convert(){
if(toFahrenheit.checked){
    temp = Number(textBox.value)
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
}
else if(toCelsius.checked){
    temp = Number(textBox.value)
    temp = (temp -32) * (5/9);
    result.textContent = temp.toPrecision(3) + "°C"
}
else{
    result.textContent = "Select a unit"
}
}