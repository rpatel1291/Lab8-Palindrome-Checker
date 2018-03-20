const palindromeRoutes = require("./");

const constructorMethod = (app) => {

    app.use('/', palindromeRoutes);

    app.use('*', (req, res) => {
        res.redirect('');
    });
};

module.exports = constructorMethod;
