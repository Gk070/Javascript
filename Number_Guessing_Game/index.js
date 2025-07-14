const minNum = 1;
const maxNum = 100;
const answer = Math.round(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let isNum = true;

while(isNum){
    guess = window.prompt(`Enter number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess) || guess < 0 || guess > 100){
        window.alert("Enter a valid number");
    }
    else{
        if(guess > answer){
            window.alert("Guess Too High");
            attempts++;
        }
        else if(guess < answer){
            window.alert("Guess Too Low");
            attempts++;
        }
        else{
            window.alert(`Hurray ${answer} was correct. You got it in ${attempts} attempts.`);
            isNum = false;
        }
    }
}