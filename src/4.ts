// Generate a random number between 1 and 10
const randNum = Math.floor(Math.random() * 10) + 1;
console.log(`The random number is: ${randNum}`);

// Generate a random string of length 5
const randStr = Array(5).fill(null).map(() => String.fromCharCode(65 + Math.random() * 26)).join('');
console.log(`The random string is: ${randStr}`);
