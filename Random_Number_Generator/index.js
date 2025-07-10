const mybtn = document.getElementById("roll");
const lab = document.getElementById("label");
const min = 1;
const max = 6;
let randomNum;

mybtn.onclick = function() {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    lab.textContent = randomNum;
}