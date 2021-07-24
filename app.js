// Requires
const path = require('path');

const express = require('express');
const nunjucks = require('nunjucks');

const errorController = require('./controllers/error');

// Init express
const app = express();

// Config view engine
nunjucks.configure(
    [
        'node_modules/nhsuk-frontend/packages/components',
        'views',
    ], {
        express: app,
        watch: true
    });

app.set('view engine', 'njk');

// Meta title suffix
app.use((req, res, next) => {
    res.locals.metaTitleSuffix = ' - NHS';
    next();
});

// Parse body
// app.use(express.urlencoded({ extended: false }));

// Serve static 
app.use(express.static(path.join(__dirname, 'public')));

// 404 fallback
app.use(errorController.get404);

// Listen
app.listen(process.env.PORT || 3000);