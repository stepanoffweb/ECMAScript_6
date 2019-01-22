// Any varible that is declared with var outside a function block  is globally scoped and available for use
// in the whole window. And this can couse issues as a follow one: 
var greeter = "hi";
    var notCloseFriend = true;

    if (notCloseFriend) {
        var greeter = "say Hello instead"; 
    }

    console.log(greeter) //"say Hello instead"
    
//    We never know if there is identical variable name in the web page because of third-side scripts and our 
//    local variable might redefine it.
    
//     Since let is a block scoped variable, it can be updated but not redeclared:
 let greeting = "say Hi";
    let greeting = "say Hello instead";//error: Identifier 'greeting' has already been declared
//Unlike var, the 'let' keyword is not initialized as 'undefined' so if you try to use a let variable before
// declaration, you'll get a Reference Error.

// The value of a variable declared with const cannot be updated or redeclared:
const greeting = "say Hi";
    greeting = "say Hello instead";//error : Assignment to constant variable. 

const greeting = "say Hi";
    const greeting = "say Hello instead";//error : Identifier 'greeting' has already been declared

// But! While a const object cannot be updated, the properties of const objects can be updated!

// while var variables are initialized with undefined, let and const variables are not initialized and they
//  must be initialized during declaration.
// As a general rule it recommends to use let only for loop counters or only if you really need reassignment.
// Everywhere else, use const.

// All the var, let and const variables have a curious property: hoisting, where variables and function 
// declarations are moved to the top of their scope before code execution. 
