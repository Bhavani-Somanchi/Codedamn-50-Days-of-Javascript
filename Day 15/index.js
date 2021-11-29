const isPangram = (input) => {
	// Code here

    var arr = new Array(26).fill(0);
    input = input.toLowerCase();

    for(var i = 0; i < input.length; i++)
    {
        var ch = input.charAt(i);
        if(ch.match(/[a-z]/));
        arr[ch.charCodeAt(0)-97]++;
    }
    for(var i = 0; i < arr.length; i++)
    if(arr[i] == 0)
    return false;

   
	return true;
}