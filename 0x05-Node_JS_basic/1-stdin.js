process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.once('data', function(data) {
  const name = data.toString().trim();

  console.log("Your name is:", name);
  console.log("This important software is now closing");
  process.exit();
});
