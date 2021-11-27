const obj = { key: 1 };

function isEmpty(obj) {
    // write your solution here

    var arr = Object.entries(obj);

    if(arr.length == 0)
    return true;

    return false;
}

console.log(`is empty object: ${isEmpty(obj)}`)