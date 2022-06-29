'use strict';

// ------------------- Scope and The Scope Chain -------------------

function calcAge(birthyear){
    const age = 2022 - birthyear;
    console.log(firstName);

    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthyear}`;
        console.log(output);

        if(birthyear>=2000 && birthyear<=2019){
            var drive = true;

            //creating new variable with same as outer scope
            const firstName = 'Ayush';
            const str = `you can drive, ${firstName}`;
            console.log(str);

            function add(a,b){
                return a+b;
            }

            //reassingning outer scope's variable
            output = 'New Output...!';
        }
        console.log(drive);
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Naman';
calcAge(2001);

// ------------------- Hoisting and TDZ in Practice -------------------

// Hoisting with Variables

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Naman';
let job = 'Programmer';
const year = 2001;

// Hoisting with Function

// console.log(addDeclaration(3,2));
// console.log(addExprassion(3,2));
// console.log(addArrow(3,2));

function addDeclaration(a,b){
    return a + b;
}

const addExprassion = function(a,b){
    return a + b;
}

const addArrow = (a,b) => a + b;

// Example

if(!numberProducts) deleteShoppingCart();

var numberProducts = 10;
// let numberProducts = 10; 
// const numberProducts = 10; 
// if you use let OR const instead of var, u will get error, bcz in var, hosting is avalable and not in let OR const...
// Hosting: JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. 
// Hoisting allows functions to be safely used in code before they are declared.      

function deleteShoppingCart(){
    console.log('deleted cart...!');
}

// ------------------ The this Keyword in Practice ------------------

console.log(this);  // Window.

const calcAge1 = function(birthyear1){
    console.log(2022 - birthyear1);
    console.log(this); // it gets "undefined" bcz the regular function is not attached to any object .
}
calcAge1(2001);

const calcAge2 = birthyear2 => {
    console.log(2022 - birthyear2);
    console.log(this); // Aerrow Function not gets this keyword, so it simplay point this keyword from it's parent's scope --- in this case: it is 'Window'.
}
calcAge2(2001);

const naman = {
    year: 2001,
    calcAge2: function(){
        console.log(this); // in this case object is 'naman', so this keyword points to the 'naman' and give function value.
        console.log(2022 - this.year);
    }
}
naman.calcAge2();

const matilda = {
    year: 2017,
};

matilda.calcAge2 = naman.calcAge2; // Method borrowing
matilda.calcAge2();

// ----------------- Regular Functions vs. Arrow Functions -----------------

const naman1 = {
    firstName1 : 'Ajay',
    year: 2001,
    calcAge2: function(){
        console.log(this); 
        console.log(2022 - this.year);

        const ismatilda = function(){
            console.log(this); // its a regular function so this keyword is undefind.
        };
        ismatilda();
        
        const self = this;
        const ismatilda1 = function(){
            console.log(self); 
        };
        ismatilda1(); 
    },

    greet: () =>  {
    console.log(this);
    console.log(`Hey ${this.firstName1}`); // gives undefind bcz arrow fun not has it's this keyword, it simplay uses it from parent's scope and in this case it is undefind. so never use aerow function at method.
    }
}
naman1.greet();
naman1.calcAge2();

// ---------- arguments in function ----------

const addExprassion1 = function(a,b){
    console.log(arguments);
    return a + b;
}
addExprassion1(2,3);
addExprassion1(2,3,4,3);

const addExprassion2  = (a,b) => {
    console.log(arguments);
    return a + b;
}
// addExprassion2(2,3); 
// arguments is not defined for arrow function.

// ----------------- Primitives vs. Objects (Primitive vs. Reference Types) -----------------

// Primitive Types
let age1 = 30;
let oldAge = age1;
age1 = 31;
console.log(oldAge);
console.log(age1);

// Reference Types

const me1 = {
    name: 'naman',
    age1 : '30',
}
const friend = me1; // copy object from me1 to friend.
friend.age1 = 27;
console.log(friend); 
console.log(me1);   // it does not change age.

let name1 = 'naman';
let oldname = name1;
name1 = 'michael';
console.log(oldname);
console.log(name1);

const name2 = {
    firstName: 'naman',
    lastName: 'padaliya',
}

const newname2 = name2;
name2.firstName = 'micheal';
console.log(newname2);
console.log(name2);

// copying objects

const jassica = {
    firstName: 'jassica',
    lastName: 'williams',
    age: 27,
    family: ['alice', 'bob'],
};

const jassicaCopy = Object.assign({}, jassica);
console.log(jassicaCopy);
jassicaCopy.lastName = 'davis';

console.log(jassica);
console.log(jassicaCopy); // we copied the object and then make changes so it get reflected.

jassicaCopy.family.push('mary');
jassicaCopy.family.push('john');

console.log(jassica);
console.log(jassicaCopy); // family object is deaply nasted so it changes on both parent objects.