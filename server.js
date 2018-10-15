var express =require('express'),
http=require('http'),
bodyParser=require('body-parser');
items=require('./data/menu-item.json');

var app =express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

.use(express.static('public'));

const port = 3000

app.get('/items',  (req,res)=>{
    res.json(items);
})

app.post('/items',(req,res)=>{
    var matches=items.filter((item)=>{
        return item.url===req.body.url;
    });
    
    if (matches.length>0){
        res.json(409,{status:'item already exists'});
    }   else {
        req.body.id=req.url;
        items.push(req.body);
        res.json(req.body);
    }
})

app.listen(port, () => console.log(`App is listening on port ${port}!`));