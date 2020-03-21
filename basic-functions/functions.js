// A javascript funtion is a block of code that is designed to perform a particular task.

// A javascript function is executed when something invokes/calls it.

/*

JavaScript Function Syntax
A JavaScript function is defined with the "function" keyword, followed by a "name", followed by "parentheses" ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}


EXAMPLE:

function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

myFunction(p1,p2);


##############################################################################################

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}


Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.


########################################################################################
FUNCTION RETURN  

Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

BODMAS:

Bracket, Off Divistion, Multiplication, Addition, Substraction


#########################################################################################3
Why Functions in Javascript?

You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.
*/

// Example
// Convert Fahrenheit to Celsius:

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
