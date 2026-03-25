const age =[32,33,15,78]
const result =age.filter(checkage)
function checkage(age){
    return age<=18
}
console.log(result)

//function add(a,b){
   // return a+b;
//}
//var result = add(2,5)
//console.log(result)

// way to write functions

//var add = function(a,b){
//return a+b
//}

//var add = (a,b)=>{return a+b}

//var add =(a,b)=> a+b

//(function(){
    //console.log("pranesh")
//})()

//function callback(){
    //console.log("added successfully!")
//}

//const add = function(a,b, callback){
    //var result = a+b
    //console.log("result:"+result)
    //callback()
//}
//add(3,4,callback)

const add = function(a,b, callback){
    var result = a+b
    console.log("result:"+result)
    callback()
}
add(3,4,function(){
    console.log("added")
})