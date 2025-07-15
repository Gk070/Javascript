function rollDice(){

    const num = document.getElementById("num").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < num; i ++){
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="images/${value}.svg" height="70px" width="70px" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');
}