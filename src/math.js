const pow = (number, exponent) => number ** exponent;
const sqrt = (number) => Math.sqrt(number);

// we can include this one individually by using object destructuring
export const sum  = (numberA, numberB) => numberA + numberB;

// module.exports = {pow, sqrt}; //Math.pow
export default {pow, sqrt}; // Cannot be destructured, it has to be used as one object
