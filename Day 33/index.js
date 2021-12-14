function set(arrOfNum) {
	// write your code here
    ans = new Set();

    for(let i = 0; i < arrOfNum.length; i++)
    ans.add(arrOfNum[i]);
    
	return Array.from(ans);
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));