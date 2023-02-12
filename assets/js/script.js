// Assignment Code
//Declare variables

//declares variable generateBtn with value of html document element with and ID named generate
var generateBtn = document.querySelector("#generate");
//variables with all the different type of characters
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Add event listener to generate button
//When clicked, calls the function writePassword
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //declaration of variable with a call function as value
  var password = generatePassword(); //Equals to the generated password
  //declare variable passwordText with the value of the ID password element in the html document
  var passwordText = document.querySelector("#password");
  //gives the value of password to the ID element at the html document
  passwordText.value = password;
}

//function generates password

function generatePassword() {
  let result = "";
//If that confirms if we want to begin with the password genarator process
  if (confirm("Let's begin with the Password Generator Process")) {
    //declaration of the variable lengthPassword with the value of the user prompt input
    var lengthPassword = prompt(
      "First, please input a length of at least 8 characters and no more than 128 characters"
    );
    //if conditional that valids lenght of password between 8 and 128 characters
    if (lengthPassword >= 8 && lengthPassword <= 128) {
      //console.log(lenghtPassword);
      //if truthy
      //calls the characterType function to ask the user between what types of character to choose
      result = characterType();
      //result equals to string with generated password from function characterType
    } else {
      //if falsy
      //Displays message lenght of password is not valid and calls the function to start over
      alert(
        lengthPassword +
          " is not valid. \nMust be a number between 8 and 128 characters. Please try again"
      );
      generatePassword();
    }
  } else {
  }
  // //function that will ask if we want special characters ad wich character types in order to generate the String fro the password
  //Declaresa a variable characterType with a value of a function
  function characterType() {
    let result = "";

    //confirm promt that ask us if we want characters
    if (
      confirm(
        "Now, what character types do you want to be included in the password?"
      )
    ) {
      //if truthy then

      // if conditionals in one single line or ternary operator
      //declares variable with a ternary operator as a value that will be equal to true or false depending on the user choice at the confirmation prompt
      var lowerCase = confirm("Do you want to include Lowercase characters?")
        ? true
        : false; //lowerCase = true || false
      var upperCase = confirm("Do you want to include Uppercase characters?")
        ? true
        : false; //upperCase = true || false
      var numeric = confirm("Do you want to include numbers characters?")
        ? true
        : false; //numeric = true || false
      var specialChar = confirm("Do you want to include special characters?")
        ? true
        : false; //specialChar = true || false
      // console.log(lowerCase);
      // console.log(upperCase);
      // console.log(numeric);
      // console.log(specialChar);
      // console.log(
      //   !lowerCase && !upperCase && !numeric && !specialChar
      //     ? "Must choose one"
      //     : "Continue"
      // );

      //if conditional that states if no character option was selected (all variables are false), displays a message that the user
      // must at least choose one type and then the characterType function is called again to repeat the characterc choices
      if (!lowerCase && !upperCase && !numeric && !specialChar) {
        alert(
          "Sorry, you must choose at least one character type\nPlease try again"
        );
        characterType();
      } else {
        //if at least one conditional is true, then call the generateString function with the 4 boolean variables as parameters
        // and return its value to result variable
        alert("Excellent! Click OK to see your generated password");
        result = generateString(lowerCase, upperCase, numeric, specialChar);
        // console.log("generatePassword");
        // console.log(generateString(lowerCase, upperCase, numeric, specialChar));
      }
    }
    //Returns string with generated password from function generateString
    return result;
  }

  //function that will concatenate the string with the different selected character types
  //Declaresa a variable generateString with a value of a function with 4 boolean values as arguments
  function generateString(lowerCase, upperCase, numeric, specialChar) {
    // console.log("Generate string: " + lowerCase);
    // console.log("Generate string: " + upperCase);
    // console.log("Generate string: " + numeric);
    // console.log("Generate string: " + specialChar);

    // declare local variables with the lenght of variables with characters as a value
    const lowerCaseLength = lowerCaseCharacters.length;
    const upperCaseLength = upperCaseCharacters.length;
    const numericLength = numericCharacters.length;
    const specialLength = specialCharacters.length;

    var result = " ";

    //while that runs as long as iteration counter is less than lenghtPassword
    let i = 0;
    while (i < lengthPassword) {
      //if statements with a boolean condition and greater than conditional where
      //as long as iteration counter value is less than length password and lowerCase is true add one of this type of character
      //using method charAt of the lowerCasecharacters variable to concatenate one of its character values
      //to the result variable each iteration
      if (lowerCase && i < lengthPassword) {
        //Also uses floor and random methods of Math object to get a random position number of
        //each characters variable. Random result is multiply by the length of each character variable
        //to get a number between the variable length range
        //Depending the result number is going to be the position of the character that will concatenate in to the variable result.

        result += lowerCaseCharacters.charAt(
          Math.floor(Math.random() * lowerCaseLength)
        );
        // Increase iteration counter by new. Each time a character is concatenated
        i++;
        //Logs the concatenated password and the iteration counter
        console.log(result);
        console.log(i);
      }
      //Same as above but now with the upperCase variable
      if (upperCase && i < lengthPassword) {
        result += upperCaseCharacters.charAt(
          Math.floor(Math.random() * upperCaseLength)
        );
        i++;
        console.log(result);
        console.log(i);
      }
      //Same as above but now with the numeric variable
      if (numeric && i < lengthPassword) {
        result += numericCharacters.charAt(
          Math.floor(Math.random() * numericLength)
        );
        i++;
        console.log(result);
        console.log(i);
      }
      //Same as above but now with the specialChar variable
      if (specialChar && i < lengthPassword) {
        result += specialCharacters.charAt(
          Math.floor(Math.random() * specialLength)
        );
        i++;
        console.log(result);
        console.log(i);
      }
    }
    //Returns string with concatenated characters to result variable in characterType function from generateString function
    return result;
  }
  //Returns generated password from generatePassword function
  return result;
}
