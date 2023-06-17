const process = require('process');

console.log(process);
var usage = process.memoryUsage()

// Memory Usage value
console.log(usage);

// Printing the current time stamp
const now = Date.now();

// Looping to delay the process for 100 milliseconds
while (Date.now() - now < 100);

usage = process.memoryUsage(usage)

// Memory Usage by this process
console.log(usage);