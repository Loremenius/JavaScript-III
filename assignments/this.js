/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. windowbinding calls to the window object unless you use strict mode. in strict mode this is undefined
* 2. implicit binding calls the object that owns the function that is using the this keyword
* 3. new binding is when the this keyword works for the newly constructed object but it is coded in advance(codded in the constructor function but the this is used in context of the new object that was created)
* 4. explicit is telling the function exactly what the this keyword is 
*
* write out a code example of each explanation above
*/

// Principle 1
function zed(){
    console.log(this)
}
zed();
// code example for Window Binding

// Principle 2

// code example for Implicit Binding

let Kenobi ={
    Name:"Kenobi",
    Nemisis:"General Grievous",
    speak: function(){
        console.log(`Hello there! I am ${this.Name}`);
    }
}

Kenobi.speak();

// Principle 3
function Ghost(name){
    this.guardianName = name;
    this.speak = () =>{
        console.log(`Eyes up Guardian. My new partner is ${this.guardianName}`);
    }
}

const myGhost = new Ghost("Loremenius");

myGhost.speak();

// code example for New Binding

// Principle 4
function sangheli(){
    console.log(this.speak);
}

let mySangheli ={
    name: "Rtas Vadum",
    speak: 'Blarg!'
}

sangheli.call(mySangheli);
// code example for Explicit Binding