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
        if (bracketMap[char]) { 
            
            if (stack.length > 0 && stack[stack.length - 1] === bracketMap[char]) {
                stack.pop(); 
                return false; 
            }
        } else {
           
            stack.push(char);
        }
    }

    
    return stack.length === 0;
};

module.exports = { isValid };