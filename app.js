// Dependencies
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path')

// Routes
const indexRouter = require('./routes/index');

const app = express();

// Handlebars
const handlebars = hbs.create({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials'
});

app.engine('hbs', handlebars.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);

const server = app.listen(3000, () => {
    console.log('Application started on port 3000')
})