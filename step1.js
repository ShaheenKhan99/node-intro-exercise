const fs = require('fs');
const process = require('process')

/** read file at given path and print it out  */
function cat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if(err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else{
      console.log("This is file one.")
    }
  });    
}

cat(process.argv[2]);


