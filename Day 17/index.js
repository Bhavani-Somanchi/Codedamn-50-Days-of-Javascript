/**
 *
 * @param {number[]} inputArray Array of numbers
 */
 const longestConsecutiveSequence = (inputArray) => {
	// Your code here

    var set = new Set(inputArray);
    var count = 1, maxCount = 1, element;

    for(var i = 0; i < inputArray.length; i++)
    {
        count = 1;
        element = inputArray[i];
        if(set.has(element - 1))
        continue;
        while(set.has(element + 1))
        {
            count++;
            element += 1;
        }

        maxCount = Math.max(maxCount, count);
    }

	return maxCount;
}

console.log(longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1]));