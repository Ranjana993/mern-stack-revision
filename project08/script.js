const range = document.getElementById("range");
const rangeValue = document.getElementById("rangeValue");
const btn = document.getElementById("btn");
const res = document.getElementById("res");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById("cpybtn")

range.addEventListener("input", (e) => {
  rangeValue.innerHTML = e.target.value;
});

let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let smallLetter = 'abcdefghijklmnopqrstuvwxyz';
let symbols = '@#$%^&*()!~{}><?';
let number = '1234567890';

btn.addEventListener("click", () => {
  let result = ""; // Reset result string for new generation
  if (uppercase.checked) {
    result += capitalLetter;
  }
  if (lowercase.checked) {
    result += smallLetter;
  }
  if (numbers.checked) {
    result += number;
  }
  if (symbol.checked) {
    result += symbols;
  }

  // If no options are selected, show an error or return
  if (result === "") {
    res.innerHTML = "Please select at least one character type.";
    return;
  }

  let ans = ""; // Reset password output for new generation
  for (let i = 0; i < range.value; i++) {
    let randNum = Math.floor(Math.random() * result.length);
    ans += result.charAt(randNum);
  }

  res.innerHTML = ans; // Display generated password
});

copyBtn.addEventListener("click", () => {
  window.navigator.clipboard.writeText(res.innerHTML)
  alert("Password Copied");
})