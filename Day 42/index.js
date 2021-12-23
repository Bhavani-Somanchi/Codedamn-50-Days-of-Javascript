function sumTwoSmallestNumbers(numbers) {
    //Code below
    var min1, min2;
  
    if(numbers[0] < numbers[1])
    [min1, min2] = [numbers[0], numbers[1]];
  
    else
    [min1, min2] = [numbers[1], numbers[0]];
  
    for(let i = 2; i < numbers.length; i++)
    {
        if(numbers[i] < min1)
        [min1, min2] = [numbers[i], min1];
  
        else if(numbers[i] < min2)
        min2 = numbers[i];
    }
  
    return (min1 + min2);
  }
  
  console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
  