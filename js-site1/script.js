var x = "Hello World"

var message = "in global"
console.log("global.message = " + message)

var a = function(){
	var message = "inside a";
	console.log("a: message = " + message)
}

a();


x = 5;  //works just like "var x = 5";
console.log("the value of x = " + x)


//string concatenation
var string = "Hello"
string += " world"
console.log(string + "!")

//regular math operators
console.log((5+4) / 3.5);
console.log(undefined/5);
function test1(a){
	console.log(a/5);
}
test1();

//Equality
var x = 4, y = 4;
if(x == y){
	console.log("x and y are equal!");
}
// time: 6:45:40