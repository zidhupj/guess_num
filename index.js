const num = Math.floor(Math.random() * 100) + 1;

const check = () => {
    const guess = parseInt(document.getElementById("guess").value);
    if (guess === undefined) {
        document.getElementById('hint').innerHTML = "Please enter a number";
    } else if (guess > num) {
        document.getElementById('hint').innerHTML = "Too high! Guess a smaller number";
    } else if (guess < num) {
        document.getElementById('hint').innerHTML = "Too low! Guess a larger number";
    } else {
        document.getElementById('hint').innerHTML = ""
        document.getElementById('result').innerHTML = "You got it!";
    }
}