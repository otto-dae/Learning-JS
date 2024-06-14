const minValueBox = document.getElementById("minRange");
const maxValueBox = document.getElementById("maxRange");
const minValue = Number(minValueBox.value);
const maxValue = Number(maxValueBox.value);

let randomNum;
let range;

function GenerateRandom(){
    const minValue = Number(minValueBox.value);
    const maxValue = Number(maxValueBox.value);
    
    randomNum = Math.random() * (maxValue - minValue) + minValue;
    randomNum = Math.round(randomNum);

    Result.textContent = randomNum;
}