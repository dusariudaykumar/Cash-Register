const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextBtn = document.querySelector("#btn-next");
const btnCheck = document.querySelector("#btn-check");
const errorMsg = document.querySelector("#error-msg");
const displayBox = document.querySelector(".display-box");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextContent = document.querySelector(".next-content");

const totalNotes = [2000, 500, 100, 20, 10, 5, 1];

displayBox.style.display = "none";
nextContent.style.display = "none";

nextBtn.addEventListener("click", checkBillAmount);

btnCheck.addEventListener("click", calculate);

function checkBillAmount() {
  if (billAmount.value > 0) {
    nextContent.style.display = "flex";
    hideMessage();
  } else {
    showMessage("bill amount is not valid");
  }
}
function calculate() {
  if (cashGiven.value >= billAmount.value) {
    const amoutToBeReturn = cashGiven.value - billAmount.value;
    returnChange(amoutToBeReturn);
    hideMessage();
  } else {
    showMessage("Cash should be great than Bill amount");
  }
}

function showMessage(message) {
  errorMsg.style.display = "block";
  errorMsg.innerText = message;
}

function returnChange(amoutToBeReturn) {
  displayBox.style.display = "flex";
  var amount = amoutToBeReturn;
  for (var i = 0; i < totalNotes.length; i++) {
    const numberOfNotes = Math.trunc(amount / totalNotes[i]);
    amount = amount % totalNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
function hideMessage() {
  errorMsg.style.display = "none";
}
