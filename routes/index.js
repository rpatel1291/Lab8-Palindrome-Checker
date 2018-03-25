const router = require("express").Router();
const palindrome = require("../data/palindrome");

let resultingMessage = "";
let inputString = "";
let colorClass = "";

router.get('/', async (req, res) => {
    res.render('input');
});

router.get('/result', async (req, res) => {
    res.render('result', { message: resultingMessage, textToTest: inputString, setColor: colorClass });
});

router.post('/result', async (req, res) => {
    inputString = req.body.textToTest;
    let result = undefined;
    try {
        result = await palindrome.checkIfPalindrome(inputString);
    } catch (e) {
        res.status(400);
    }
    if (result) {
        colorClass = "success";
        resultingMessage = inputString + " is a palindrome string";
    } else {
        colorClass = "failure";
        resultingMessage = inputString + " is not a palindrome string";
    }

    res.redirect('/result');

});

module.exports = router;