/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
 const convertDigitsToAskedBase = (digits, baseA, baseB) => {
	// Your code here
    
    var num = parseInt(digits.join(''), baseA);

    var ans = num.toString(baseB);

    var len = ans.length;

    var arr = new Array(len);
    for(var i = 0; i < len; i++)
    {
        var ch = ans.charAt(i);
        if(ch == 'a')
        arr[i] = 10;

        else if(ch == 'b')
        arr[i] = 11;

        else if(ch == 'c')
        arr[i] = 12;
        
        else if(ch == 'd')
        arr[i] = 13;

        else if(ch == 'e')
        arr[i] = 14;

        else if(ch == 'f')
        arr[i] = 15;

        else arr[i] = parseInt(ch);
    }
	return arr;
}

console.log(convertDigitsToAskedBase([5,10], 8, 10));
