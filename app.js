const express = require('express');
const hbs = require('hbs');
const path = require('path')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('main.hbs');
})

const server = app.listen(3000, () => {
    console.log('Application started on port 3000')
})