var fs = require("fs");
var data = fs.readFile("test.txt",function(err,data){
	if (err) return console.error(err);
	console.log(data.toString());
});
console.log("program ended");