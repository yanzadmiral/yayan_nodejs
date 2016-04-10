var fs = require("fs");
var data = fs.readFileSync("test.txt");
console.log(data.toString());
console.log("program selesai");