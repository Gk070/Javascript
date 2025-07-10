const decbtn = document.getElementById("dec");
const resbtn = document.getElementById("res");
const incbtn = document.getElementById("inc");
const counter = document.getElementById("counter");

let count = 0

decbtn.onclick = function () {
    count--;
    counter.textContent = count;
}

resbtn.onclick = function () {
    count = 0;
    counter.textContent = count;
}

incbtn.onclick = function () {
    count++;
    counter.textContent = count;
}