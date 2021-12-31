function getMiddle(s) {
    // your code here
    var len = s.length;
  
    if(len % 2 == 0)
    return s.substring(len/2-1, len/2+1);
  
    return s.charAt(Math.floor(len/2));
  }