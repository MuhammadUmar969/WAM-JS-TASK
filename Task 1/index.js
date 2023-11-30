var names = prompt("Enter your name: ");
var number = prompt("Enter your number: ");
var email = prompt("Enter your email: ");
var password = prompt("Enter your password: ");
var passwordConfirmation = prompt("Enter your confirm password: ");

if (names === null || names.trim() === "") {
  alert("Please fill in the name input");
} else if (number === null || number.trim() === "") {
  alert("Please fill in the number input");
} else if (email === null || email.trim() === "") {
  alert("Please fill in the email input");
} else if (password === null || password.trim() === "") {
  alert("Please fill in the password input");
} else if (
  passwordConfirmation === null ||
  passwordConfirmation.trim() === ""
) {
  alert("Please fill in the password confirmation input");
}

if (password === passwordConfirmation) {
  alert("Successfully entered the password");
} else {
  alert("Invalid password");
}
