function isIsogram(str) {
    // your code here
  
    if(str.length == 0)
    return true;
  
    str = str.toLowerCase();
  
    var arr = new Array(26).fill(0);
  
    for(let i = 0; i < str.length; i++)
    arr[str.charCodeAt(i) - 97]++;
  
    for(let i = 0; i < 26; i++)
    if(arr[i] > 1)
    return false;
  
    return true;
  }
  
  console.log(isIsogram("moOse"))
  
  