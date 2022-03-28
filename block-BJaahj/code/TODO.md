## Advanced working with higher order function

1. Construct a function `objOfMatches` that accepts two arrays and a callback. `objOfMatches` will build an object and return it. To build the object, `objOfMatches` will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

```js
function objOfMatches(array1, array2, callback) {
    let obj={};
    for(let arr2 of array2){
        array1.map(elm=>{
             obj[ callback(elm)]=arr2; 
})  
 }
    return obj
}
console.log(
  objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function (str) {
      return str.toUpperCase();
    }
  )
); // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// bhai solution
function objOfMatches(array1,array2,callbaxck){
  return array1.reduce((acc,cv,index)=>{
if(array2[index]===callback(cv)){
  acc[cv]=array2[index];
}
return acc;
  },{})
}
console.log(
  objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function (str) {
      return str.toUpperCase();
    }
  )
); 
```

2. Construct a function `multiMap` that will accept two arrays: an array of values and an array of callbacks. `multiMap` will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

```js
function multiMap(arrVals, arrCallbacks) {
    let obj={}
    let objarr=[]
    for (let arr2 of arrVals){
    arrCallbacks.map(elm=>{
       objarr.push(elm(arr2));
     obj[arr2]=objarr.filter(elm=> elm.toUpperCase().includes(arr2.toUpperCase()))
    })
}
return obj;

}   
console.log(
  multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return (
          str[0].toUpperCase() + str.slice(1).toLowerCase()
        );
      },
      function (str) {
        return str + str;
      },
    ]
  )
); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// bhai solution 

function multiMap(arrVals,arrCallbacks){
return arrVals.reduce((acc,cv)=>{
  let value = arrCallbacks.map(elm=> elm(cv))
  acc[cv]=value;
  return acc;
},{})
}console.log(
  multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return (
          str[0].toUpperCase() + str.slice(1).toLowerCase()
        );
      },
      function (str) {
        return str + str;
      },
    ]
  )
);



```

3. Construct a function `objOfMatchesWithArray` that accepts three arrays. First two array will be an array of same length. Third array is a collection function in an array. `objOfMatchesWithArray` will build an object and return it. Look at the example below to understand better

To build the object, `objOfMatchesWithArray` will test each element of the first array through all the function in the third array one after another(The output of one function will become the input of another).

The final output from the third array will be matched agains the same indexed element of second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

```js
function objOfMatchesWithArray(array1, array2, callback) {
  return array1.reduce((acc,cv,index)=>{
   let val= callback.reduce((acc,fn)=>fn(acc),cv);
   if(val=== array2[index]){
     acc[cv]=array2[index]
   }
    return acc
  },{})
}
console.log(
  objOfMatchesWithArray(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HiHi', 'HowdyHowdy', 'BYEBYE', 'LATER', 'helloHello'],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return (
          str[0].toUpperCase() + str.slice(1).toLowerCase()
        );
      },
      function (str) {
        return str + str;
      },
    ]
  )
); // should log: { hi: 'HiHi', howdy: 'HowdyHowdy'}

//bhai solution

```

4. Construct a function `objectWithArrayValues` that accepts two arrays. First array will be array of any values, second array will be array of functions.

To build the object, `objectWithArrayValues` will pass each value of the first array through all the function in the second array one after another.

In the final object the key will be the value form the first array like `hi` and value will be an array of values returned from each function like `['HI', 'Hi', 'HiHi']`

```js
function objOfMatchesWithArray(array1, callback) {
    let obj={};
    let arr = []
 for(let i=0;i<array1.length;i++){
     let val = array1[i]
obj[val] = callback.map((elm)=> {
    return elm(val)
})

 }
   return obj
}

console.log(
  objOfMatchesWithArray(
    ['hi', 'howdy', 'bye'],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return (
          str[0].toUpperCase() + str.slice(1).toLowerCase()
        );
      },
      function (str) {
        return str + str;
      },
    ]
  )
); // should log: { hi: ['HI', 'Hi', 'hihi'], bye: ['BYE', 'Bye', 'byebye'], later: ['LATER', 'Later', 'laterlater'] }
```

5.

```js
function sayHi() {
  console.log('Hi');
}
function sayHello() {
  console.log('Hello');
}
function sayHey() {
  console.log('Hey');
}
```

Create a function named `schedule` which accept two arguments an array of functions like `[sayHi, sayHello, sayHey]` and array of seconds like `[1, 2, 3]`. Both array will be of same length. If that's not the case alert a message saying `invalid input`. (1 second is 1000 ms)

The function `schedule` will execute the function at first index after the value in value on first index in second array. i.e execute `sayHi` after `1` second and `sayHello` after `2` second.

```js
function schedule(array1,array2 ) {
    for(let i=0;array2.length>i;i++){  
return array1.reduce((acc,cv)=>{
    return setTimeout(cv,1000*array2[i]);
},0)
}
}
function sayHi() {
  console.log('Hi');
}
function sayHello() {
  console.log('Hello');
}
function sayHey() {
  console.log('Hey');
}
schedule([sayHi, sayHello, sayHey], [2, 3, 4]);

// sayHi will be executed after 2 seconds
// sayHello will be executed after 3 seconds
// sayHey will be executed after 4 seconds
```
