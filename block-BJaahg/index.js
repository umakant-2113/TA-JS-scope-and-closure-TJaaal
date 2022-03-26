const addOne = (num) => {
    return num + 1;
  };
  const subTwo = (num) => {
    return num - 2;
  };
  const multiplyThree = (num) => {
    return num * 3;
  };
  const half = (num) => {
    return num / 2;
  };
  
  let allFunctions = [
    addOne,

  ];
  
  

  allFunctions.reduce((acc,cv)=>{
    return cv(acc)
    },100)