const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("palindrome/static", {});
});

router.post('/', (req, res) => {

});

module.exports = router;