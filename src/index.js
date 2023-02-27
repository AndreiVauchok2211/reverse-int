module.exports = function reverse(n) {
    let str = "" + Math.abs(n);
    let result = Number(str.split("").reverse().join(""));
    console.log(result);
    return result;
};
