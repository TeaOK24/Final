import express from 'express'
const app = express()
import db from "./db.js"
import config from './config.js';
const Russian_cuisine =db.russian_cuisine;
import base from './db/base.js';



/*app.set('view engine', 'ejs')
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
})*/


/*app.get('/', (req, res) => {
    pool.query('SELECT * FROM russian_cuisine').then(function (data) {
        res.json(data)
    })
})*/


let port = config.PORT || 8080
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}...`)
})

await db.authenticate()
await db.sync()