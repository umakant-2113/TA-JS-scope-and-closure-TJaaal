1. Convert the function below into different forms of function expression.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}

// Your code goes here
```
let totalAmount=function(marks,total){
    return (marks*100)/total;
}
totalAmount(200,10);

let totalAmount= (marks,total)=> (
  marks*100)/total;
totalAmount(200,10);

let totalAmount=(mark,total)=>{
  return (mark*100)/total;
}



2. Write Function Declaration or Function Expression next to the function.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}
// Your answer
```

```js
let percentage = function percentage(marks, total) {
  return (marks * 100) / total;
};
```

```js
let percentage = function (marks, total) {
  return (marks * 100) / total;
};
```

```js
let percentage = (marks, total) => {
  return (marks * 100) / total;
};
```

```js
let percentage = (marks, total) => (marks * 100) / total;
```

3. Why is a function definition an expression in JavaScript? Give one example of function expression.

Function Expression  allows us to create an anonymous function which doesn’t have any function name which is the main difference between Function Expression and Function Declaration.
<!-- function declaration -->

function sum(a,b){
  return a+b
}
sum(10,10);
<!-- function expression -->
let multiple =(a,b)=>{
  return a*b
}
multiple(10,20);

4. Why is a function call an expression in JavaScript?

A function call expression is used to execute a specified function with the provided arguments. If the function being called is overloaded, the compiler will attempt to match the argument types with the function parameter types. If there are no matching function declarations, a compile-time error will be raised.


5. Write VALID and INVALID next to each example below with the reason.

```js
function add(a, b) {
  return a + b;
}

let five = add(2, 3); // Answer

// valid the value of five is 5;
five = add; // Answer

// it is not valid  why add is return function expression;
five = five(10, 11); // Answer

// it is return value 
five = function () {
  return 'Hello';
}; // Answer
// it is return a function we not call the function so it is return function;
// if we call the function return the value;
```

6. What is the difference between function definition and function call? Explain with an example.


Defining a function is different from “calling a function.” When you “call” a function, you just write the name of the function followed by (); like this: nameOfFunctionToRun(); This will actually run the code inside that function, whereas defining the function does not run the code. It just defines the name

function  introduction(){
  return "hi i ma umakant rajput ";
}
introduction();
 <!--this is example of function callling  -->

function  introduction(){
  return "hi i ma umakant rajput ";
}
introduction;
<!-- this is example of function defination -->

7. What is the similarities between function definition and function call?

A function definition is the same as a function call. if we write the the function with pranthesis 
it is give us output and if we do not write thr function;


8. Is the code below valid or invalid. Explain with reason.

```js
function hello() {
  console.log('Hello World!');
}

hello.user = 'Sam'; // valid or invalid
// it is valid   because function is a object so we want to see the object then we can do console.dir;
```

9. What is higher order function explain with an example.

Higher-order functions are functions that take other functions as arguments or return functions as their results.

function rm(){
    return function ra(){
        return "hello umakant"
    }
    return ra;
}
let ans=rm();
ans();

function hello(){
  return "hi umakant rajput bangra"
}

function deepak(ra){
  return ra();
}
deepak(hello)

10. Explain what is callback function. Why you can pass a function inside a function?


A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);