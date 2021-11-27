const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here

    var stringSplit = str.split(" ");


    return stringSplit.slice(0, wordLimit).join(" ");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)