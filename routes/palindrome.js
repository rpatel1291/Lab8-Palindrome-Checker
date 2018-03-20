const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("palindromes/form", {});
});

router.post('/', (req, res) => {

});

module.exports = router;