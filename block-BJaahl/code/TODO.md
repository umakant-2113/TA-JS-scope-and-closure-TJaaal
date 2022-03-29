1. Write a function that accepts a callback function and return another function. But the function should only be called once.

```js
function once(cb) {
let count = 0
return function (){
  count = count + 1
  if(count>1){
    return undefined
  }else {
    cb()
  }
}
}
function sayHello() {
  alert('Call me once!');
}
let log = once(sayHello);
log(); // alert message "You can only call me once!"
log(); // return undefinde (can't be called twice)
```

2. Change the above function in such a way that the function accepts two parameter a callback function and parameter for the callback function. When calling the function pass the parameters.

```js
function once(cb ,str) {
  let count=0;
  return function (){
    count=count+1;
    if(count>1){
      return undefined;
    }else{
      cb(str)
    }
  }
}


let log = once(console.log, 'Hello Console');
log(); // log message "Hello Console"
log(); // return undefinde (can't be called twice)
```

3. Change the above function in such a way that it can accept `n` number of parameters for the callback function.

**For handling `n` number of parameter use `rest` parameters `...` or predefined arguments variable present in every function declaration.**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

```js
function once(cb a,b) {
  let count=0;
  return function (){
    count=count+1;
    if(count>1){
      return `undefined`
    }else{
      cb(a,b)
    }
  }
}

// TEST
let log = once(console.log, 'Message one', 'Message Two');
log(); // log message "Message One Message Two"
log(); // return undefinde (can't be called twice)
```

4. Create a new function `nTimes` whose 1st parameter is a callback function, 2nd parameter is the number of times the function should be called and 3rd ... nth parameter should be passed to the callback function.

```js
function nTimes(cb, times, ...rest) {
for(let i=0;rest.length>i;i++){
let count=0;
  return function (){
    count=count+3
    if(count>3){
      return undefined;
    }else{
      cb(rest[i])
    }
  }
  return function (){
    count=count+3
    if(count>3){
      return undefined;
    }else{
      cb(rest)
    }
  }  
}
  
}

// TEST
let log = (msg) => console.log(msg);
let logThreeTimes = nTimes(log, 3, 'Hello Arya');
logThreeTimes(); // log message "Hello Arya" (1)
logThreeTimes(); // log message "Hello Arya" (2)
logThreeTimes(); // log message "Hello Arya" (3)
log(); // return undefinde (can't be called)
```
