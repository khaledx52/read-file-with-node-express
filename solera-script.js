// var http = require('http');
// var fs = require('fs');

// const PORT=5252; 

// fs.readFile('./solera-l.csv', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });
const fs = require('fs')
var express = require('express')
var app = express()

// respond with a message that read from csv file
app.get('/message', function (req, res) {
    var data = 'welcome';
    fs.readFile('./solera-l.csv', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
        data = data;
        
        res.send(data)
      })
})
app.listen(5252);