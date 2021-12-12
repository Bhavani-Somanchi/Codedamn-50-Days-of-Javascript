function factorial(n) {
	// write your code here
    
    if(n == 0)
    return 1;

    var ans = 1;

    for(let i = n; i > 0; i--)
    ans *= i;
    
	return ans;
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));