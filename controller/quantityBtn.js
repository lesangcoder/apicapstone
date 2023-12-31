let amountElement = document.getElementById("amount");
let amount = amountElement.value;

let render = (amount) => {
amountElement.value = amount;
};

// handle plus
let handlePlus = () => {
  amount++;
  render(amount);
};

// handle minus
let handleMinus = () => {
  if (amount > 1) {
    amount--;
    render(amount);
  }
};
window.hand;

amountElement.addEventListener("input", () => {
  amount = amountElement.value;
  amount = parseInt(amount);
  amount = isNaN(amount) || amount == 0 ? 1 : amount;
  render(amount);
});
