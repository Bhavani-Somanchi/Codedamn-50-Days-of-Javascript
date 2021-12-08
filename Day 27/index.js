function getCount(str) {
    let vowelsCount = 0;
    // enter your magic here
  
    for(var i = 0; i < str.length; i++)
    {
        var ch = str.charAt(i);
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        vowelsCount++;
    }
  
    return vowelsCount;
  }
  
  console.log(getCount("abracadabra"));
  