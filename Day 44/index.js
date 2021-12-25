function getDivisorsCnt(num) {
    // code below
  
    var count = 0;
    var square = Math.floor(Math.sqrt(num));
    
    for(let i = 1; i <= square; i++)
    {
        if(num % i == 0)
        {
            if(num / i == i)
            count++;
            else
            count += 2;
        }
    }
  
    return count;
  }
  
  console.log(getDivisorsCnt(25));