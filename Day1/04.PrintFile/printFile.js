var fs = require("fs"),
	fileName = "Sample.txt";

var fileContents = fs.readFileSync(fileName, {encoding : 'utf8'});
console.log(fileContents);