var fs = require("fs"),
	fileName = "Sample.txt";

//Sync
//var fileContents = fs.readFileSync(fileName, {encoding : 'utf8'});

//Async
var fileContents = fs.readFile(fileName, {encoding : 'utf8'}, AsyncMethod);


function AsyncMethod(content){
	//Content will be got here	
	console.log(content);
}