// Great work on saving elements as variables at the beginning of the script!
// Also, well done on appropriately using const and let!

let count = 0;
let countMaxLimit = 11;

// Nice job with the selectors!
// You could also use querySelector for all the elements below instead of getElementById, but it's entirely up to you!
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
  if (count >= countMaxLimit) {
    alert("You can't go any higher!");
    return;
  }
  updateCounterDisplay();
});

// You should move updateCounterDisplay() right after decrementing the count
// so the displayed number updates after it's reduced, not before.
decreaseButton.addEventListener("click", () => {
  updateCounterDisplay();
  if (count > 0) {
    count--;
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounterDisplay();
});
