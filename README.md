# Password Generator: Challenge 03

## Description

Create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a green button to "Generate Password".](/assets/img/password-generator.png)

## Usage

1. Click the green button with the label Generate Password
2. The app will ask you if you want to start the process, click OK to continue.
3. Then, the app will ask you to input the number of character you want for you password. (It must be a nmber between 8 and 128). Once you input the number, click OK to continue.
4. If the input is a valid number, the app will continue with the process, otherwhise will display a message with : "[input number] is no valid . Please try again" and the will show the input again to type the correct number.
5. After the character lenght is validated, the app will continue to ask you if you wish to add characters to your password. If you do click OK to continue, if not just click Cancel and the app will close.
6. The different characters are 
'''
lower case Characters = "abcdefghijklmnopqrstuvwxyz";
upper case Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numbers = "0123456789";
special characters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
'''
7. The app will ask you for each type of character, click Ok to choose which character type you want and click Cancel if you dont want that type of character. You must choose at least one type of character to generate the password.
8. Once you chose the type of characters yo want the app will display a messa "Excellent! Here is your generated password" and it will show your password with your selected criteria inside the box of your secure password. Click on the password then right click to copy it.
9. If you wish to create a new password, just click again in the Generate password button.
10. Thank you for using Passsowrd Generator app! 