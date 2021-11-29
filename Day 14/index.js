/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
 const convertDigitsToAskedBase = (digits, baseA, baseB) => {
	// Your code here
    
    var num = parseInt(digits.join(''));

    var ans = 0;

    if(baseA != 10)
    {
        var temp = num, i = 0;
        while(temp > 0)
        {
            var r = temp % 10;
            ans += (r * Math.pow(baseA, i));
            i++;
            temp = Math.floor(temp / 10);
        }
    }

    else 
    ans = num;
    
    var ansArr = new Array();
    if(baseB != 10)
    {
        var temp = ans, i = 1;
        while(temp > 0)
        {
            var r = temp % baseB;
            ansArr.unshift(r);
            temp = Math.floor(temp / baseB);
        }
    }
    else
    ansArr = ans.toString().split('').map(Number);
    
	return ansArr;
}

console.log(convertDigitsToAskedBase([5,10], 8, 2));
