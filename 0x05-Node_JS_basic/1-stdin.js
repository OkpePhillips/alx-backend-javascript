const readline = require('readline');

// Creating an interface to read input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Displaying a message to the user
console.log('Welcome to Holberton School, what is your name?\n');

// Listening for user input
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

// Handling the close event
rl.on('close', () => {
  console.log('This important software is now closing');
});
