const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




// Empty Password Variables
// These variables will store the generated passwords.

let firstPass = document.getElementById("password1")
let secondPass = document.getElementById("password2")


// Selecting HTML Elements
// These lines assume there are two HTML elements with IDs password1 and password2.
// The code uses document.getElementById to connect JavaScript to these HTML elements, where the passwords will eventually appear.

function getRandomChar() {
    let randomChar = Math.floor( Math.random() * characters.length )
    return characters[randomChar]
}


// Generating a Random Character
// getRandomChar is a function that selects a random character from the characters array.
// Math.random() generates a random number between 0 and 1.
// Math.random() * characters.length scales that random number to a range from 0 up to the array’s length.
// Math.floor() rounds down to the nearest whole number, giving a valid index in the array.
// This function then uses that random index to get a character from the characters array and returns it.


// Generating a Password
// The genPass function generates a password 16 characters long.
// It starts with an empty string password.
// Then, a loop runs 16 times (i < 16), and on each loop:
// getRandomChar() is called to get a random character.
// That random character is added to password.
// After 16 characters have been added, the function returns the completed password.

function genPass() {
    let password = ""
    for ( let i = 0; i < 16; i++) {
        password += getRandomChar()
    }
    return password
}


// Displaying the Passwords
// The renderPassword function is responsible for displaying the generated passwords in the HTML elements.
// It calls genPass() twice—once for each password field—and sets the textContent of firstPass and secondPass to the generated passwords.
function renderPassword() {
    firstPass.textContent = genPass()
    secondPass.textContent = genPass()
    
}




// Summary of How It Works
// Get a random character: getRandomChar() picks a random character from the characters array.
// Create a password: genPass() uses getRandomChar() to create a 16-character password.
// Show the passwords: renderPassword() puts the generated passwords in the HTML elements with IDs password1 and password2.
