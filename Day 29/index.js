function accum(s) {
    // your code goes below
    var ans = "";
    for(let i = 0; i < s.length; i++)
    {
        let ch = s.charAt(i);
        ans += ch.toUpperCase();
        ch = ch.toLowerCase();
        ans += (ch.repeat(i) + "-");
    }
      
      ans = ans.slice(0, ans.length-1);
  
      return ans;
  }
  
  console.log(accum("ZpglnRxqenU"));