Find the output of the code snippets below:

```js
onsole.log(numA + numB); //OUTPUT   
var numA = 21,
  numB = 30;c
```
<!-- output is undefined -->

Find the output of the code snippets below:

```js
console.log(numA + numB); //OUTPUT
let numA = 21,
  numB = 30;
```
<!-- uncaught referenceError numA is not defined -->

Find the output of the code snippets below:

```js
let numA = 21,
  numB = 30;
console.log(numA + numB); //OUTPUT
```
<!-- output is 51  -->
Find the output of the code snippets below:

```js
console.log(sayHello()); // OUTPUT
function sayHello() {
  console.log("Hey");
}
function sayHello() {
  console.log("Hello");
}
```
<!-- it is give us hello and when  we are doing console of function it is return undefined-->

Find the output of the code snippets below:

```js
let username = "Tyrion";
sayHello(); // OUTPUT
function sayHello() {
  console.log(username);
}
```
<!-- functin is return undefined but we call the variable inside of function so function is return tyrion -->

Find the output of the code snippets below:

```js
sayHello(); // OUTPUT
let username = "Tyrion";
function sayHello() {
  console.log(username);
}
```
<!-- functin is return undefined but we call the variable inside of function so function is return tyrion -->

Find the output of the code snippets below:

```js
let username = "Tyrion";
sayHello(); // OUTPUT
let sayHello = () => {
  console.log(username);
};
```
<!-- if we are define the function arrow form then function is return UnCaught referenceError sayHello is not defined -->

Find the output of the code snippets below:

```js
sayHello(); // OUTPUT
let username = "Tyrion";
let sayHello = () => {
  console.log(username);
};
```
<!-- if we are define the function arrow form then function is return UnCaught referenceError sayHello is not defined -->

Find the output of the code snippets below:

```js
sayHello(); // OUTPUT
var username = "Tyrion";
let sayHello = () => {
  console.log(username);
};
```
<!-- Uncought reference Error sayHello is not defined  -->

Find the output of the code snippets below:

```js
var username = "Tyrion";
sayHello(); // OUTPUT
let sayHello = () => {
  console.log(username);
};

```

<!-- Uncought reference Error sayHello is not defined  -->

Find the output of the code snippets below:

```js
var username = "Tyrion";
let sayHello = () => {
  console.log(username);
  var username = "John";
};
sayHello(); // OUTPUT
```
<!-- say hello outpput is undefiend -->

Find the output of the code snippets below:

```js
var username = "Tyrion";
let sayHello = () => {
  var username = "John";
  console.log(username);
};
sayHello(); // OUTPUT
```

<!-- sayHello output is john  -->

Find the output of the code snippets below:

```js
var username = "Tyrion";
let sayHello = () => {
  console.log(username);
  let username = "John";
};
sayHello(); // OUTPUT
```
<!-- sayHello output is undefined  -->