const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

checkBtn.addEventListener("click", function() {
  const userInput = textInput.value.trim(); 

  if (!userInput) {
    alert("Please input a value");
    return; 
  }

if (isPalindrome(userInput)) {
    result.textContent = `${userInput} is a palindrome`;
  } else {
    result.textContent = `${userInput} is not a palindrome`;
  }

});