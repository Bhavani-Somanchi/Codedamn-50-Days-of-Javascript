let uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    if(typeof(iterable) === 'object')
    iterable = iterable.join('');
  
    var ans = check = iterable.charAt(0);
    var i = 1;
  
    while(i < iterable.length)
    {
        let ch = iterable.charAt(i);
        if(check === ch)
        {
            i++;
            continue;
        }
  
        ans += ch;
        check = ch;
        i++;
    }
  
    if(ans.match(/\d+/))
    return ans.split('').map(Number);
  
    return ans.split('');
    
  };
  
  console.log(uniqueInOrder([1,2,2,3,3]));
  