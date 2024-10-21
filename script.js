let count = 0;
let countMaxLimit = 11;

const counterDisplay = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.querySelector(".reset");

function updateCounterDisplay() {
  counterDisplay.textContent = count;
}

// Event Listeners
increaseButton.addEventListener("click", () => {
  count++;
  if(count >= countMaxLimit){
    alert("You can't go any higher!")
    return 
 }
  updateCounterDisplay();
});

decreaseButton.addEventListener("click", () => {
  updateCounterDisplay();
  if(count > 0)
    {
       count--;
    }
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounterDisplay();
});