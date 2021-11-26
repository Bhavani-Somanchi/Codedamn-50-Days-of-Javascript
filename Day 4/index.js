const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here

    let check = time.indexOf(":"), len = time.length;
    
    // Dividing the time into hours and minutes
    let hours = parseInt(time.substring(0,check)), minutes = time.substring(check, len-2);

    var ans = "";
    
    //Check if minutes have a single digit if yes add a zero
    if(minutes.length == 2)
    minutes = minutes.charAt(0) + "0" + minutes.charAt(1);
    
    if(time.endsWith("AM"))
    {
        if(hours == 12)
        ans = ans.concat("00", minutes);

        else
        ans = ans.concat("0", hours, minutes);
    }
    
    else
    {
        if(hours == 12)
        ans = ans.concat(hours, minutes);

        else
        ans = ans.concat((12+hours), minutes);
    }
    return ans;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)