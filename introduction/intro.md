// This is a single line comment

/\*
This is a mult line comment

A multi line comment allows you to write comments in multiple lines without any error in any programming langueage

\*/

/\* ################## WHAT IS JAVASCRIPT? ###########################

JavaScript is a scripting or programming language that allows you to
implement complex features on web pages — every time a web page does
more than just sit there and display static information for you to look
at — displaying timely content updates, interactive maps, animated 2D/3D
graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript
is probably involved. It is the third layer of the layer cake of standard
web technologies, two of which (HTML and CSS) we have covered in much more
detail in other parts of the Learning Area.

## What is a scripting Language?

A scripting language is used to write scripts.
These contain a series of commands that are
interpreted one by one at runtime unlike programming
languages that are compiled first before running.

Nowadays, scripts are generally associated with web development where they are widely used to make dynamic web applications.
Scripting languages can be divided into two categories:

Server Side Scripting Languages
Client Side Scripting Languages

Easy learning: The user can learn to code in scripting languages quickly, not much knowledge of web technology is required.

Fast editing: It is highly efficient with the limited number of data structures and variables to use.

Interactivity: It helps in adding visualization interfaces and combinations in web pages. Modern web pages demand the use of scripting languages. To create enhanced web pages, fascinated visual description which includes background and foreground colors and so on.
Functionality: There are different libraries which are part of different scripting languages. They help in creating new applications in web browsers and are different from normal programming languages.
Application of Scripting Languages: Scripting languages are used in many areas:

Scripting languages are used in web applications. It is used in server side as well as client side. Server side scripting languages are: JavaScript, PHP, Perl etc. and client side scripting languages are: JavaScript, AJAX, jQuery etc.
Scripting languages are used in system administration. For example: Shell, Perl, Python scripts etc.
It is used in Games application and Multimedia.
It is used to create plugins and extensions for existing applications.
\*/

Note − It is a good programming practice to use semicolons.

Case Sensitivity
JavaScript is a case-sensitive language. This means that the language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.

So the identifiers Time and TIME will convey different meanings in JavaScript.

NOTE − Care should be taken while writing variable and function names in JavaScript.

## Note − JavaScript does not make a distinction between integer values and floating-point values. All numbers in JavaScript are represented as floating-point values. JavaScript represents numbers using the 64-bit floating-point format defined by the IEEE 754 standard.

## Note − Use the var keyword only for declaration or initialization, once for the life of any variable name in a document. You should not re-declare same variable twice.

JavaScript is untyped/loosely typed language. This means that a JavaScript variable can hold a value of any data type. Unlike many other languages, you don't have to tell JavaScript during variable declaration what type of value the variable will hold. The value type of a variable can change during the execution of a program and JavaScript takes care of it automatically.

JavaScript Variable Scope
The scope of a variable is the region of your program in which it is defined. JavaScript variables have only two scopes.

## Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.

## Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

Within the body of a function, a local variable takes precedence over a global variable with the same name. If you declare a local variable or function parameter with the same name as a global variable, you effectively hide the global variable. Take a look into the following example.
