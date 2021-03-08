var express = require('express');
var app = express();

// application and express will run on different port, so application will give cores error
// to fix cores error we install cores in express and than use it
var cors = require('cors');
app.use(cors());

// to read the req , install body-parser and than use it
var bodyParser = require('body-parser')
// parse application/json
app.use(bodyParser.json())


var posts = [
    {name:"roshan", pwd:"test"},
    {name:"roshan1", pwd:"test1"}
]



app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/posts', function (req, res) {
    console.log("text")
    res.send(JSON.stringify(posts));
})

app.post('/register', function (req, res) {
    var userData = req.body;
    console.log(userData);
    res.json(JSON.stringify(userData));
})

app.listen(3000)