function palindrome(str) {
    var letters = str.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();
    var reverse = letters.split("").reverse().join("");

    if (reverse == letters) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome("122a"));