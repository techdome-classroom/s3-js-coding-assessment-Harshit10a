/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack =[];
    let bracketMap ={')': '(',']':'[','}':'{'};
    for(let char of s){
        if(char in bracketMap){
            let topElement = stack.length
        }
    }
};

module.exports = { isValid };


