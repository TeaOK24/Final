import express from 'express'
const app = express();
import db from "./db.js"
import config from './config.js';
import base from './db/base.js';
import cors from 'cors';
import path from 'path';
import russian_cuisine_controller from './controller/russian_cuisine_controller.js';

import router from './routes/indexRouter.js'
import { json } from 'sequelize';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';




//Последний, завершающий
app.use(ErrorHandlingMiddleware)

app.use(express.static(path.resolve(path.resolve(), 'public')))
app.set('views', path.resolve(path.resolve(), 'views'))
app.set('view engine', 'ejs')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)

//посмотреть
//app.get('/', (req, res) => {
   // res.sendFile(`${__dirname}/views/index.ejs`);
//})

app.get('/test', (req, res) => {
    res.render('test.ejs')
})

//1 способ
app.get('/RuCuisine', async (req,res)=>{
    let russian_cuisine = await russian_cuisine_controller.getAll()
    res.render('RuCuisine', {russian_cuisine:russian_cuisine})
})

app.get('/add', (req, res) => {
    res.render('add')
})

/*app.get('/game.ejs', (req, res) => {
 res.render('game.ejs')
})

app.get('/AfCuisine', (req, res) => {
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