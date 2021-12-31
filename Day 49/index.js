function isTriangle(a, b, c) {
    // your code here
  
    if((a+b) > c && (b+c) > a && (a+c) > b)
    return true;
  
    return false;
  
  }