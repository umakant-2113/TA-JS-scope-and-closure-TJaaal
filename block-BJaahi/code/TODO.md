For the given code below:

- re-write the code in ways that system will understand

For Example:

1.

```js
var username = 'Arya';
let brothers = ['John', 'Ryan', 'Bran'];

console.log(username, brothers[0]);

function sayHello(name) {
  return `Hello ${name}`;
}

let message = sayHello(username);
var nextMessage = sayHello('Test');
```

<!-- Answer -->

```js
// Declaration Phase
var username = undefined;
let brothers;

function sayHello(name) {
  return `Hello ${name}`;
}

let message;
var nextMessage = undefined;

// Execution Phase

username = 'Arya';
brothers = ['John', 'Ryan', 'Bran'];

console.log(username, brothers[0]);

message = sayHello(username);
nextMessage = sayHello('Test');
```

2.

```js
console.log(username, numbers);

var username = 'Arya';
let number = 21;

function sayHello(name) {
  return `Hello ${name}`;
}

let message = sayHello(username);
var nextMessage = sayHello('Test');


<!-- Answer -->
<!-- decleretion phase -->
 

```js
<!-- decleretion phase -->
 ```jsvar userName="unndefined";
 let num=
function sayHello(name) {
  return `Hello ${name}`;
}
let massage=;
nextMessage="undefined";

<!-- ececution phase -->
var userNmae="arya";
let num=21;
let message= sayHello(userName);
let nextMessage=sayHello("test")
```

3.

```js
console.log(username, numbers);
let username = 'Arya';
let number = 21;

let sayHello = function (name) {
  return `Hello ${name}`;
};

let message = sayHello(username);
var nextMessage = sayHello('Test');
```

<!-- Answer -->

```js
// decelaration phase

let userName=;
let nnumber=;
let sayHello=function  (name){
  return `hello ${name}`
}
let message=;
var nextMessage="undefined";

// execution phase  
console.log(userName,number);
let userName="arya"
let nnumber="21"

let message=sayHello(userName)
var nextMessage="test";
```

4.

```js
let username = 'Arya';
console.log(username, numbers);

let number = 21;
let message = sayHello(username);

let sayHello = function (name) {
  return `Hello ${name}`;
};

var nextMessage = sayHello('Test');
```

<!-- Answer -->

```js
// decelaration phase

let userName=;
let number=;
let message;
let sayHello=;
var nextMessage="undefined";
// execution phase
let userName="arya";
let number=21;
let message=sayHello(userName);
let sayHello=`hello${name}`
var nextMessage= sayHello(`Test`)
```

5.

```js
console.log(name);
console.log(age);
var name = 'Lydia';
let age = 21;
```

<!-- Answer -->

```js
// decelaration phase
var name="undefined";
let age=;
// execution phase
console.log(name);
console.log(age);
var name="lydia";
let age=21;
```

6.

```js
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

<!-- Answer -->

```js
// decelaration phase
function sayHi(name){
  console.log(name);
  console.log(age);
  var name="lydia";
  let age=21;
}
// 

```

7.

```js
sayHi();
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}
```

<!-- Answer -->

```js
// decelaration phase
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}
// execution phase
sayHi();

```

8.

```js
sayHi();
let sayHi = function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
};
```

<!-- Answer -->

```js
// decleration phase
let sayHi = function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
};
// execution phase
sayHi();
```

9.

```js
let num1 = 21;
console.log(sum);
var sum = num1 + num2;
let num2 = 30;
```

<!-- Answer -->

```js
// declaration phase
let num1=;
var sum=undefined;
let num2=;
// execution phase
let num1=21;
console.log(sum);
var sum=num1+num2;
let num2=30;
```


10.

```js
var num1 = 21;

let sum2 = addAgain(num1, num2, 4, 5, 6);

let add = (a, b, c, d, e) => {
  return a + b + c + d + e;
};
function addAgian(a, b) {
  return a + b;
}
let num2 = 200;

let sum = add(num1, num2, 4, 5, 6);
```

<!-- Answer -->

```js
// declaration phase
let num1=;
let sum2=;
let add=;
function addAgian(a, b) {
  return a + b;
}
let num2=;
let sum=;
// execution phase
let num1=21;
let sum2=addAgain(num1,num2,4,5,6)
let num2=200;
let sum=add(num1,num2,4,5,6)
```

11.

```js
function test(a) {
  let num1 = 21;
  return add(a, num1);
}

let sum = test(100);

let add = (a, b) => {
  return a + b;
};
```

<!-- Answer -->

```js
// decleration phase
function test(a) {
  let num1 = 21;
  return add(a, num1);
}
let sum=;
let add=;

// execution phase
let  sum= test(a,b)
```

12.

```js
function test(a) {
  let num1 = 21;
  return add(a, num1);
}

let sum = test(100);

function add(a, b) {
  return a + b;
}
```

<!-- Answer -->

```js
// decleration phase
function test(a) {
  let num1 = 21;
  return add(a, num1);
}
let sum=;
function add(a, b) {
  return a + b;
}
// execution phase
let sum=test(100);
```
