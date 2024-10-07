/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack =[];
    let bracketMap ={')': '(',']':'[','}':'{'};
    for(let char of s){
        if(char in bracketMap){
            let topElement = stack.length>0?stack.pop():'#';
            if(bracketMap[char]!=top)
        }
    }
};

module.exports = { isValid };


