const valid = (string) => {
	// code here

    var str = string.split(" ").join('');

    var newStr = "";

    for(let i = str.length-1; i >= 0; i-=2)
    {
        let ch = str.charAt(i);
        newStr += ch;
        let num = parseInt(str.charAt(i-1));
        num *= 2;
        if(num > 9)
        num -= 9;
        newStr += num;
    }

    var ansNum = parseInt(newStr);
    var sum = 0;
    while(ansNum > 0)
    {
        sum += (ansNum % 10);
        ansNum = Math.floor(ansNum / 10);
    }

    if((sum % 10) == 0)
    return true;

	return false;
}

console.log(valid("8273 1232 7352 0569"));
