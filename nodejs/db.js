//this file is goin to be responsible for connection with database
const mongoose =require('mongoose')
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URL)
// define the mongoDB connection URL
//const mongoURL = 'mongodb://localhost:27017/mydb'//replace "mydb" with your database name (this is local url)
const mongoURL =process.env.MONGODB_URL;//(this is online url)
// setup mongodb connection
mongoose.connect(mongoURL)
//get the default connection
//mongoose maintains a default connection object representing the mongodb connection.
const db =mongoose.connection;//db represents mongodb connection

db.on('connected', () =>{//define event listener using methods like disconnected, error and connected
    console.log('connected to mongoDB server');//reaction of event listener  when connected to database
})
db.on('disconnected', () =>{
    console.log('disconnected to mongoDB server');
})
db.on('error', (err) =>{
    console.error('mongoDB connection error ',err);
})

//export database connection
module.exports=db;
