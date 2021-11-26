# Day 2

## Write a program to reverse a string

- String can be reversed by iterating it and storing it in reverse order
- String can also be reversed by converting it to array, then joining it after reversing

```javascript

const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here

    return
}

console.log(`Reversed string is: ${reverseAString(str)}`)

```

## CHALLENGES (0/3 DONE)

- [ ] reverseAString("JavaScript is awesome") should return "emosewa si tpircSavaJ"
- [ ] reverseAString("Peter Parker is Spiderman") should return "namredipS si rekraP reteP"
- [ ] reverseAString("codedamn") should return "nmadedoc"

## Resources

- JavaScript does not have a built in `reverse()` function. To reverse a string use these functions instead.
- [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)