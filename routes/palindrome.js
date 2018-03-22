const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("palindromes/input", {});
});

router.post('/', (req, res) => {
    res.render("palindromes/result", {});
});

module.exports = router;