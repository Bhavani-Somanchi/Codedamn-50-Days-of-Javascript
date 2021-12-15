function mostFreq(arr) {
	// write your code here
    map = new Map();
    for(let i = 0; i < arr.length; i++)
    {
        if(map.has(arr[i]))
        map.set(arr[i], map.get(arr[i])+1);
        else
        map.set(arr[i], 1);
    }

    var max = 0, ansKey;
    for(const [key, value] of map)
    {
        if(value > max)
        {
            max = value;
            ansKey = key;
        }
    }
    
	return (ansKey + " " + map.get(ansKey));
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));