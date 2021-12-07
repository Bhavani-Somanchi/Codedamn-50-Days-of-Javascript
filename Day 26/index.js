function findOdd(arr) {
    //happy coding!
    var ans = 0;
    
    for(var i = 0; i < arr.length; i++)
    ans ^= arr[i];
  
    return ans;
  }