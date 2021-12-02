const unionOfArrays = (arr1, arr2) => {
    // code below here
  
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    let union = new Set(set1);
  
    for(let elem of set2)
    union.add(elem);
  
    return Array.from(union);
  };
  
  console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);