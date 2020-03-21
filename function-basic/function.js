/*

Basic Functions:

What are functions?

A JavaScript function is a block of code designed to perform a particular task, by running the code wthin the curly braces {}

A JavaScript function is executed when "something" invokes it (calls it).

Example of a function

function myFunction(){

    //the code within this curly braces are executed.
}

A javascript function can accept paremeters if there if a need.

Parameters here simply means varibles.

Ex:

function myFunction(param1,param2){

    param1 * param2

    //here , the function accepted two parameters , mind you the function can accept as many parameters as you can assign to it.


}


Function call:

A function can only be executed when it is called or invoked.

Ex:

function myFunction(){
    console.log("Elemson ifeanyi")
}

for the above function to work , we need to call it, like this:

myFunction()

Ex:

function myFunction(){
    console.log("Elemson ifeanyi")
}

myFunction()    //function invocation or call.

### First task:  write a function to add /mulitiply two digits and console log your result   #####



What are Function Parameters and Arguments ?

Function parameters are the names listed in the function definition. Ex: our param1 and param2 above are called parameters

function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function arguments are the real values passed to (and received by) the function. These asre the values our param1 and param2 holds.

Ex:

function myFunction(a, b) {
  

}

myfunction(2,3)

From the above function ... a , b is our parameter , and 2,3 is the arguments which our parameters represents or holds.
That means, our a , b are variables.  To represent our argument in a function , we simply pass a value to our function during invocation or call
e.g myFunction() can have any type of value ... numbers , string ,boolean ... array, etc in our example, our function arguments are numbers.


Parameter Rules
JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the passed arguments.

JavaScript functions do not check the number of arguments received.



Parameter Defaults
If a function is called with missing arguments (less than declared), the missing values are set to: undefined

Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:


*/
