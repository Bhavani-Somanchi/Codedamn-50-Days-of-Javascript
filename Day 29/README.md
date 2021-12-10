# Day 29

## Mumbling

Each char becomes `n*chars` where n is the index + 1, and the first char is capitalized divided by `-` instead of space.

Only alphabets are passed as arguments for the `accum(s)` funciton

Example: `accum("ZpglnRxqenU")` should return `"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"`


```javascript

function accum(s) {
  // your code goes below
 
}

```

## CHALLENGES (0/3 DONE)

- [ ] accum("ZpglnRxqenU") returns "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
- [ ] accum("NyffsGeyylB") returns "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
- [ ] accum("MjtkuBovqrU") returns "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"

## Resources

- [`repeat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
- [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)