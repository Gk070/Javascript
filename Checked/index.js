const subscribe = document.getElementById("subscribe");
const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const paybtn = document.getElementById("paybtn");
const submitbtn = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

submitbtn.onclick = function () {
    if(subscribe.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }

    if(visabtn.checked){
        payResult.textContent = `You are paying with VISA`;
    }
    else if(masterbtn.checked){
        payResult.textContent = `You are paying with Master Card`;
    }
    else if(paybtn.checked){
        payResult.textContent = `You are paying with PayPal`;
    }
    else{
        payResult.textContent = `Payment option not selected`;
    }
}