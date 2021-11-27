const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here

    var date1 = new Date(dateText1);
    var date2 = new Date(dateText2);

    var dateDiff = Math.abs(date1 - date2);

    return (dateDiff/DAY_IN_MILLISECONDS);
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)