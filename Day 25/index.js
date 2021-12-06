function spinWords(string) {
    //TODO Have fun :)
    var words = string.split(" ");
    for(let i = 0; i < words.length; i++)
    {
        let word = words[i];
        if(words[i].length >= 5)
        {
            word = word.split('').reverse().join('');
            words[i] = word;
        }
    }
    return words.join(" ");
  }
  
  console.log(spinWords("This is a test"));