/********var**********/
//It can be updated and redeclared
//Supports global and function scope 
//not block level scope
var course = "zero to hero"
 // prints zero to hero
var course = "zero to hero in lwc"
 //prints zero to hero in lwc
// console.log(window.course)

function abc () {
    var anotherCourse = "Another hero in lwc"
    console.log(anotherCourse)
    //only works within the scope of the function
}
// abc();


//block scope it gets appeneded to the window obj by default
// if ( 2 === 2 ) {
//     var x = 10
// }
// console.log(x)


/********let********/
// It can be updated but NOT redeclared
//let keyword supports function and block level scope and global
//unlike var they it doesn't create a property on the global obj
let course2= "zero to hero"
course2 = "zero to hero in lwc"
//cannot do let course2 = "zero to hero in lwc" --->> this is redeclaring
// console.log(course2)
var g = 'global'
console.log(this.g)
//prints global
let y = 'global'
console.log(this.y)
//prints undefined

// console.log(window.course2)
 //returns undefined

 function abc() {
     let x = "lexinator"
    //  console.log(x)
 }
//  abc()
 //prints "lexinator"

//  console.log(x)
 //comes back x is not defined

 //**************const**************/
 // it cannot be updated or redclared
//const keyword supports function and block level and global
//unlike var they it doesn't create a property on the global obj
 const course3 = "zero to hero"
 console.log(course3)
//  const course3 = "lwc"
 //throws err already declared

function abc(){
    const x = 20
    console.log(x) 
    //returns 20
}
abc() 
// returns 20
// console.log(x)
//returns x is not defined
//console.log(window.course3) ==> returns Uncaught ReferenceError: x is not defined
const x = 30; 
console.log(x)
//returns 30 because in a different scope

if (1 ==1 ){
    const x = 40
    console.log(x)
    //returns 40
}

console.log(x)
//returns 30
