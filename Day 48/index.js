function formatDuration(seconds) {
    // your code here
    if(seconds === 0)
    return "now";
  
    var arr = [31536000, 86400, 3600, 60];
    var words = ["year", "day", "hour", "minute"];
    var ans = "";
  
    for(let i = 0; i < 4; i++)
    {
        let quo = Math.floor(seconds/arr[i]);
        if(quo > 0)
        {
            seconds = seconds % arr[i];
            ans += (quo > 1 ? (quo + " " + words[i] + "s, ") : (quo + " " + words[i] + ", "))
        }
    }
  
    if(ans.length == 0)
    ans += (seconds > 1 ? (seconds + " seconds") : (seconds + " second"));
  
    else
    {
        ans = ans.substring(0, ans.length-2);
    if(ans != "" && seconds != 0)
    ans += (seconds > 1 ? (" and " + seconds + " seconds") : (" and " + seconds + " second"));
    }
  
    return ans;
  
  }
  
  console.log(formatDuration(78765678));
  