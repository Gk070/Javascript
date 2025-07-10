const text = document.getElementById("text");
const btn = document.getElementById("btn");
const para = document.getElementById("para");
let age;

btn.onclick = function () {
    age = text.value;
    age = Number(age);

    if(age > 100){
        para.textContent = "You are too old to visit this site";
    }
    else if(age < 0){
        para.textContent = "Your age can't be less than 0";
    }
    else if(age >= 18){
        para.textContent = "You are old enough to enter the site";
    }
    else{
        para.textContent = "You are not old enough";
    }
}