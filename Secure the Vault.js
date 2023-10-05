/* 1.Create a string displaying a message for the user
   2.Set constant variables for the 3 digits of the combination
   3.Use different arithmetic operators for each digit
   4.Make an alert message displaying the combination */

//Making the message string

let popup = "You have received this message because you have been chosen to open an important vault.  Here is the secret combination:"

//Assigning the combination to variables

const comboOne = 5+5
const comboTwo = 80/2
const comboThree = 3*13
const comboComplete = `${comboOne}-${comboTwo}-${comboThree}`

//Create a dialog box with the vault combo and message

alert(popup + comboComplete)

