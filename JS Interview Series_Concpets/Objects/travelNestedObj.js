
  let valuesArray = [];
  function getAllPrpertyValues(obj) {
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            const value  = obj[key];
            if (value !== null && typeof value === 'object'){
                getAllPrpertyValues(value);
            } else {
                valuesArray.push(value)
            }
        }
    }
    return valuesArray;
  }
  
  const originalObject = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4],
      e: {
        f: 5
      }
    }
  };


  console.log(getAllPrpertyValues(originalObject));