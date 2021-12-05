function expandedForm(num) {
    // Your code here
    var str = "";
    var i = 1;
    while(num > 0)
    {
        var r = num % 10;
        if(i == 1)
        str = (r * i);
        else
        str = (r * i) + "+" + str;
        i *= 10;
        num = Math.floor(num / 10);
    }
  
    return str;
  }
  
  console.log(expandedForm(6231));