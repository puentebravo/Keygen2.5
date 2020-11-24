var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Defines array
  var array = new Uint32Array(30);
  //sets password string
  var password = "";
  //converts the array into a cryptographic set
  window.crypto.getRandomValues(array);

  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    password += array[i];
    console.log(password);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
