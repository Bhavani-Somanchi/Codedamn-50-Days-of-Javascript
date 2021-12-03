# Day 22

## Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

The argument can contain a string or an array

For example: `uniqueInOrder([1,2,2,3,3])` should return `[1,2,3]`

`uniqueInOrder('ABBCcAD')` should return `['A', 'B', 'C', 'c', 'A', 'D']`


```javascript

let uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array
  
};

```

## CHALLENGES (0/3 DONE)

- [ ] uniqueInOrder('AAAABBBCCDAABBB') should return ['A', 'B', 'C', 'D', 'A', 'B']
- [ ] uniqueInOrder('ABBCcAD') should return ['A', 'B', 'C', 'c', 'A', 'D']
- [ ] uniqueInOrder([1,2,2,3,3]) should return [1,2,3]

## Resources

- [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- Read more about using `typeof` [here](https://www.freecodecamp.org/news/javascript-data-types-typeof-explained/).
