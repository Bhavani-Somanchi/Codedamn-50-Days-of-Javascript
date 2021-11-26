const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here
    var posFirst = str.indexOf('X'), posLast = str.lastIndexOf('X');

    if(posFirst == -1)
    return -1;

    return (posLast - posFirst);
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
