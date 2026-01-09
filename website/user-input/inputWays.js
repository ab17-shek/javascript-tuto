/* 
1. By using window.prompt(), we can take input from the user.
2. The input value is always stored as a string.
3. We can store the input value in a variable for further use.


let username;

username = window.prompt("Please enter your name:");

document.getElementById("myH1").textContent = `Hello, ${username}! Welcome to our website.`;
*/

//////////////////////////////////////////////////////////////////////////////////////////////

// -------------------- PROFESSIONAL WAY --------------------

let username;

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("username").value;
    document.getElementById("myH1").textContent = "Hello, " + username + "! Welcome to our website.";
}