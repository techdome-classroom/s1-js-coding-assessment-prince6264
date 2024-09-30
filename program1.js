/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Mapping of closing brackets to opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];

    for (const char of s) {
        if (bracketMap[char]) {  // If it's a closing bracket
            // Check if the stack is not empty and matches the opening bracket
            if (stack.length > 0 && stack[stack.length - 1] === bracketMap[char]) {
                stack.pop();  // Valid match found, pop the opening bracket
            } else {
                return false;  // Invalid closing bracket
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // Stack should be empty if valid
    return stack.length === 0;
};

module.exports = { isValid };