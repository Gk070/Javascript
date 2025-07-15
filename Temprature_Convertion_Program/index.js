const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;



function convert(){

    if(toFarenheit.checked){
        temp = Number(textBox.value);
        temp = ((9 / 5) * temp) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (5 / 9) * (temp - 32);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = `Enter a unit`;
    }

}