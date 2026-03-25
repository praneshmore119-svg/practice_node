//var fs = require('fs')
//var os = require('os')

//var user = os.userInfo()
//console.log(user)
//console.log(user.username)

//fs.appendFile("greeting.txt","hello "+ user.username+"!\n",()=>{
    //console.log("file created")
//})

//console.log(fs)// to check what fs can do
//console.log(os)// to check what os can do

const notes =require('./notes.js')
var age = notes.age
var result = notes.addnumber(age,18)
console.log(age)
console.log(result)