const express = require("express")
const app = express()// by convention app
const db =require('./db');//db.js is exported here
const person =require('./models/person'); 
const menuitem =require('./models/menuitem');
require("dotenv").config();

const bodyParser =require('body-parser');
app.use(express.json());
const PORT =process.env.PORT || 3000;

app.get('/', function(req, res){    //res means what response it had to do here it is hello world
    res.send("hello, your welcome here")
})




//impport the router files
const personroutes = require('./routes/personroutes');
//use the router
app.use('/person',personroutes);

const menuitemroutes =require('./routes/menuitemroutes');
app.use('/menuitem',menuitemroutes );

app.listen(3000)// listening through port 3000
//search localhost:3000/ on browser  = localhost for address 3000  is room no. and / is menu item