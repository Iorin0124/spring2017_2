const fs = require('fs');
const path = require('path');
fs.writeFile(path.join(__dirname,'/hello.txt'),'Node始めました２\n',function(err){
      if(err) return console.log("Error!");
});
