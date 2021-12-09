function toWeirdCase(string) {
    // Your code goes here
    var ans = "";
    for(let i = 0; i < string.length; i++)
    {
        var ch = string.charAt(i);
        if(ch.match(/[a-zA-Z]/))
        {
            if(i % 2 == 0)
            ans += ch.toUpperCase();
            else
            ans += ch.toLowerCase();
        }
  
        else 
        ans += ch;
    }
  
    return ans;
  }
  
  console.log(
    `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
  );
  