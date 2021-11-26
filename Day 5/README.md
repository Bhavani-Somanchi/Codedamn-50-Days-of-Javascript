# Day 5

## Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

- indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively
- If the match is not found, these methods return -1


```javascript

const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here

    return 
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)

```

## CHALLENGES (0/4 DONE)

- [ ] getTheGapX('XeroX') returns 4
- [ ] getTheGapX('Xamarin') returns 0
- [ ] getTheGapX('JavaScript') returns -1
- [ ] getTheGapX("F(X) !== G(X) !== F(X)") returns 18

## Resources

- [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [`lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)