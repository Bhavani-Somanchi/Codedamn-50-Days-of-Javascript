function findEvenIndex(arr) {
    //Code goes here!
    var total = 0, add = 0;
    for(let i = 0; i < arr.length; i++)
    total += arr[i];
  
    for(let i = 0; i < arr.length; i++)
    {
        total -= arr[i];
        if(add == total)
        return i;
  
        add += arr[i];
    }
    
    return -1;
  }
  
  console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]));
  