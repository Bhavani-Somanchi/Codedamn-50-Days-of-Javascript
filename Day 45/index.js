function findOutlier(integers) {
    //your code here
    var even = integers.filter(a => (a%2 == 0));
    var odd = integers.filter(a => (a%2 != 0));
  
    return ((even.length == 1)? even[0] : odd[0]);
  }
  
  console.log(findOutlier([0,0,3,0,0]))
  