const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/test.ejs', (req, res) => {
    res.render('test.ejs')
})

app.get('/game.ejs', (req, res) => {
    res.render('game.ejs')
})

app.get('/AfCuisine.ejs', (req, res) => {
    res.render('AfCuisine.ejs')
})

app.get('/AfCuisine.ejs', (req, res) => {
    res.render('AfCuisine.ejs')
})

app.get('/AmCuisine.ejs', (req, res) => {
    res.render('AmCuisine.ejs')
})

app.get('/ChCuisine.ejs', (req, res) => {
    res.render('ChCuisine.ejs')
})

app.get('/EuCuisine.ejs', (req, res) => {
    res.render('EuCuisine.ejs')
})

app.get('/JapCuisine.ejs', (req, res) => {
    res.render('JapCuisine.ejs')
})

app.get('/KoCuisine.ejs', (req, res) => {
    res.render('KoCuisine.ejs')
})

app.get('/MexCuisine.ejs', (req, res) => {
    res.render('MexCuisine.ejs')
})

app.get('/RuCuisine.ejs', (req, res) => {
    res.render('RuCuisine.ejs')
})

app.get('/Bread&pastries.ejs', (req, res) => {
    res.render('Bread&pastries.ejs')
})

app.get('/Salads.ejs', (req, res) => {
    res.render('Salads.ejs')
})

app.get('/Side_dishes.ejs', (req, res) => {
    res.render('Side_dishes.ejs')
})

app.get('/Soups.ejs', (req, res) => {
    res.render('Soups.ejs')
})

app.get('/Spicy.ejs', (req, res) => {
    res.render('Spicy.ejs')
})

app.get('/Vegetarian.ejs', (req, res) => {
    res.render('Vegetarian.ejs')
})



let port = 3001
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
})