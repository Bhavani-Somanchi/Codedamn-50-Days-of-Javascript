# Day 4

## Write a function which can convert the time input given in 12 hours format to 24 hours format

- The check for 'AM' and 'PM' can be verified using endsWith String method
- An extra 0 would be needed if the hours have single digit


```javascript

const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here

    return 
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)

```

## CHALLENGES (0/6 DONE)

- [ ] convertTo24HrsFormat("12:10AM") returns "00:10"
- [ ] convertTo24HrsFormat("5:00AM") returns "05:00"
- [ ] convertTo24HrsFormat("12:33PM") returns "12:33"
- [ ] convertTo24HrsFormat("01:59PM") returns "13:59"
- [ ] convertTo24HrsFormat("11:8PM") returns "23:08"
- [ ] convertTo24HrsFormat("10:02PM") returns "22:02"

## Resources

- [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- To learn more about Strings in JavaScript, click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)