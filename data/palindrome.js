let exportedMethods = {
    async checkIfPalindrome(inputString) {
        if (inputString === "") throw "Invalid Input String";
        let inputStringLower = inputString.toLowerCase();
        let newInputString = inputStringLower.replace(/[^a-z0-9]/g, '');

        let result = true;

        if (newInputString.length % 2 == 1) {
            for (var start = 0, end = newInputString.length - 1; start !== end; start++ , end--) {
                if (newInputString[start] !== newInputString[end]) return !result;
            }
        } else {
            for (var start = 0, end = newInputString.length - 1; start < end; start++ , end--) {
                if (newInputString[start] !== newInputString[end]) return !result;
            }
        }
        return result;
    }
};
module.exports = exportedMethods;