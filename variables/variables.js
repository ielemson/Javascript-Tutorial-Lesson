//LESSON 1: HOW TO DECLARE JAVASCRIPT VARIABLES

/*

Basic JavaScript: Declare JavaScript Variables

In computer science, data is anything that is meaningful to the computer. JavaScript provides seven different data types which are:

undefined,
 null, 
 boolean, 
 string, 
 symbol, 
 number, 
 and object.

For example, computers distinguish between numbers, such as the number 10, and strings, such as "10", "fish", or "1234 dogs", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string!!.

Variables allow computers to store and manipulate data in a dynamic way. They do this by using a "label" to point to the data rather than using the data itself. Any of the seven data types may be stored in a variable.

Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.

We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

var varName;

creates a variable called varName. In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

Use the var keyword to create a variable called myName.

You can see below for examples:
*/

// ###################### Basic JavaScript: Storing Values with the Assignment Operator

var myName;
//Not the pattern the variable was name. It is a known pattern in variable naming called camelCasing.
//This assigns the variable value to unefined.

console.log(myName);
/* As discussed above we declared our variable with the name: myName. but we did not initialize yet. 
    In this situation javscript will see our variable as *undefined* which is unfortunaltely a data type in javascript.
    Run the code to confirm the output.
 */

myName = "Elemson Ifeanyi";

/*

This assigns the String value Elemson Ifeanyi to myName.

Assignment always goes from right to left. Everything to the right of the = operator is resolved before the value is assigned to the variable to the left of the operator.
*/
console.log(myName);
/*
    Our variable have been asigned a data
*/

var myInfo = " Elemson Ifeanyi, Nigerian ,from Imo state 25 years old";

var printBio = myInfo;

console.log(printBio);

/*

Quick one: 
    *Assign your name to the variable myName.

    *Assign the contents of myName to another variable printName.

    *Console.log(printName) and run your code;


*/
