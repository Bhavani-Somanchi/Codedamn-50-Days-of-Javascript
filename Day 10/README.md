# Day 10

## Write a function to remove array element based on object property

- How to remove array element based on object property?


```javascript

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here

    return
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)

```

## CHALLENGES (0/3 DONE)

- [ ] removeArrayElement("money") returns the array without the money object
- [ ] removeArrayElement("id") returns the array without the id object
- [ ] removeArrayElement("cStatus") returns the array without the cStatus object

## Resources

- Read more about `Object` Class [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).
- Get comfortable working with objects by reading [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects).
- [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)