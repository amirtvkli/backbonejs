const express =require('express'),
http=require('http'),
bodyParser=require('body-parser'),
favicon = require('serve-favicon'),
logger = require('morgan'),
methodOverride = require('method-override'),
//session = require('express-session'),
multer = require('multer'),
errorHandler = require('errorhandler');

items=require('./data/menu-item.json');
const port = 3000


/** procedure one **/
var app = express()
    .set('view enging', 'jade')
    .use(favicon(__dirname + '/public/favicon.ico'))
    .use(logger('dev'))
    .use(methodOverride())
    .use(bodyParser.json())
    .use(express.static('public'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(multer),
    .use(express.static(path.join(__dirname +'/public')));

// app.get('/',(req,res)=>{
// })

// app.get('/items',  (req,res)=>{
//     res.json(items);
// })

// app.post('/items',(req,res)=>{
   
//     var matches=items.filter((item)=>{
//         return item.url===req.body.url;
//     });
    
//     if (matches.length>0){
//         res.json(409,{status:'item already exists'});
//     }   else {
//         req.body.id=req.url;
//         items.push(req.body);
//         res.json(req.body);
//     }
// })

app.listen(port, '127.0.0.1');
console.log('Server ready at http://localhost:3000');

/*** procedure two *************************************
// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    //res.end('Hell Backbone!\n');
});

// Start the server on port 3000
*******************************************************/




