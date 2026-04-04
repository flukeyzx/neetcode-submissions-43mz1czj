class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !this.alphaNumeric(s[left])) {
            left += 1;
        }
        while (right > left && !this.alphaNumeric(s[right])) {
            right -= 1;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left += 1;
        right -= 1;
    }

    return true;
}

alphaNumeric(c) {
    return (("A".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "Z".charCodeAt(0))
            || ("a".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0))
            || ("0".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0)));
}

}
