var inputPrompt = prompt("Enter a word:");
var word = "";

for (var i = inputPrompt.length - 1; i >= 0; i--) {
  word += inputPrompt[i];
}

if (word === inputPrompt) {
  alert("The word is palindrome");
} else {
  alert("The word is not palindrome");
}
