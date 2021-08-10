module.exports = function reverse (n) {
    n = Math.abs(n);
    let tempString = n + "";
    let arr = tempString.split("");
    arr.reverse()
    let result = arr.join("")
    return result;
}
