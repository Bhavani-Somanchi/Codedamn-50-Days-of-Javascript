const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
	// Write your solution here
    if(n < 0 || n > 999999999999)
    return "invalid number";

    var ans = "";
    var baseArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two","twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-six", "sixty-seven", "sixty-eight", "sixty-nine", "seventy", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty", "eighty-one", "eighty-two", "eighty-three", "eighty-four", "eighty-five", "eighty-six", "eighty-seven", "eighty-eight", "eighty-nine","ninety", "ninety-one", "ninety-two", "ninety-three", "ninety-four", "ninety-five", "ninety-six", "ninety-seven", "ninety-eight", "ninety-nine"];

    var multipleArr = ["thousand ", "million ", "billion "];

    var ans = "";

    var i = -1;

    while(n > 0)
    {
        var r = n % 1000;
        
        if(r != 0)
        {
            var part1 = r % 100;
            var part2 = (Math.floor)(r / 100);

            if(part2 != 0)
            var temp = baseArr[part2] + " hundred "+ baseArr[part1];
            else
            var temp = baseArr[part1];

            if(i >= 0)
            ans = "" + temp + " " + multipleArr[i] + ans;

            else
            ans = temp;
            
            
        }
        i++;

        n = (Math.floor)(n / 1000);
    }


	return ans;
}

console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`)