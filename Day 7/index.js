const number = '+919876543210';

function validateMobile(number) {
    // write your solution here

    const regex = /^(?:\+91|0)?\s?[0-9]{10}$/;

    return regex.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)