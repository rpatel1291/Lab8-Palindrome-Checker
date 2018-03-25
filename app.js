const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');
const path = require('path');

let routes = require('./routes');

let app = express();

app.engine('handlebars', handlebars({ defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, () => {
    console.log("Your routes will be running on http://localhost:3000");
});

module.exports = app;
