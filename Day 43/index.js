function high(x) {
    //code your magic here
  
    var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
    var words = x.split(" ");
    var maxWord;
    var maxScore = 0, score = 0;
    
    for(let i = 0; i < words.length; i++)
    {
        let word = words[i];
        score = 0;
        for(let j = 0; j < word.length; j++)
        {
            let ch = word[j];
            score += (alphabets.indexOf(ch)+1);
        }
  
        if(score > maxScore)
        {
            maxScore = score;
            maxWord = word;
        }
    }
  
    return maxWord;
  }
  
  console.log(high('what time are we climbing up the volcano'));
  