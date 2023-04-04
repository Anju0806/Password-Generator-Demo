
// assignment code
var generateBtn = document.querySelector("#generate");

//declaring variables
var charset = "";
var password = "";

//declaring an object for all userinput 
const userInput = {
  length: 0,
  lowercase: false,
  uppercase: false,
  symbols: false,
  numbers: false,
}


//define a function to generate a charset(from this charset we are generating the random password)
function define_charset(userInput) {
  charset = "";
  if (userInput.uppercase) {
    charset = charset.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
  if (userInput.lowercase) {
    charset = charset.concat('abcdefghijklmnopqrstuvwxyz');
  }
  if (userInput.numbers) {
    charset = charset.concat('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  }
  if (userInput.symbols) {
    //avoiding symbols in bracket password '(',')','{','}','[',']','|','/'
    charset = charset.concat(':', '!', '#', '$', '%', '&', '*', '+', '-', '/', '<', '=', '>', '?', '@', '^', '~', '_');
  }
  return charset;
}


//random password generator
function generatePassword(length, charset) {
  password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  alert("Your customized password is " + password);
  return password;
}


//define a function to validate length
function validateLength(length) {
  if (isNaN(length)) {
    alert("please select a valid number for password length");
    return false;
  }
  else if (length < 8 || length > 128) {
    alert("please select a valid length between 8 and 128");
    return false;
  }
  return true;
}


//define a function to validate if atleast one of the type are selected(uppercase,lowercase,numbers,symbols)
function validate_types_selected(userInput) {
  if (userInput.uppercase == false && userInput.lowercase == false && userInput.numbers == false && userInput.symbols == false) {
    alert("please select atleast one type from uppercase,lowercase,numbers or symbols for your password");
    return false;
  }
  return true;
}


//getInput function gets the input from user and if length validated and atleast one type selected.
function getInput() {
  alert("Customize your password with a few clicks!!");
  userInput.length = prompt("Enter the desired length of password (between 8 and 128):");
  if (!validateLength(userInput.length)) {
    return "Try again"
  }
  userInput.uppercase = confirm("Do you want your password to include uppercase characters?");
  userInput.lowercase = confirm("Do you want your password to include lowercase characters?");
  userInput.numbers = confirm("Do you want your password to include numbers?");
  userInput.symbols = confirm("Do you want your password to include symbols?");
  if (!validate_types_selected(userInput)) {
    return "Try again"
  }
  var charset1 = define_charset(userInput);
  return (generatePassword(userInput.length, charset1));

}


// write password to box after generation
function writePassword() {
  var password = getInput();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



