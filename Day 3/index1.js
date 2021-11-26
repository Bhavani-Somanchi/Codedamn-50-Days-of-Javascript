const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here

    var temp = num;
    var rev = 0, r = 0;
    while(temp > 0)
    {
        r = temp % 10;
        rev = rev * 10 + r;
        temp = Math.floor(temp / 10);
    }

    return rev;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)