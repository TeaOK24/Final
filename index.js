import express from 'express'
const app = express();
import db from "./db.js"
import config from './config.js';
import base from './db/base.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';
import russian_cuisine_controller from './controller/russian_cuisine_controller.js';
import africa_cuisine_controller from './controller/africa_cuisine_controller.js';
import america_cuisine_controller from './controller/america_cuisine_controller.js';
import china_cuisine_controller from './controller/china_cuisine_controller.js';
import europa_cuisine_controller from './controller/europa_cuisine_controller.js';
import japan_cuisine_controller from './controller/japan_cuisine_controller.js';
import korea_cuisine_controller from './controller/korea_cuisine_controller.js';
import mexico_cuisine_controller from './controller/mexico_cuisine_controller.js';
import breadpastries_controller from './controller/breadpastries_controller.js';
import salads_controller from './controller/salads_controller.js';
import sidedishes_controller from './controller/sidedishes_controller.js';
import soups_controller from './controller/soups_controller.js';
import spicies_controller from './controller/spicies_controller.js';
import vegetarians_controller from './controller/vegetarians_controller.js';


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
// app.use(express.static())
app.use(fileUpload({}))
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)



app.get('/test', (req, res) => {
    res.render('test.ejs')
})

app.get('/', (req, res) => {
    res.render('index')
})

//1 способ
app.get('/add', (req, res) => {
    res.render('add')
})

app.get('/res_log', (req, res) => {
    res.render('res_log')
})

app.get('/game', (req, res) => {
 res.render('game')
})

app.get('/AfCuisine', async (req,res)=>{
    let africa_cuisine = await africa_cuisine_controller.getAll()
    res.render('AfCuisine', {africa_cuisine:africa_cuisine})
})

app.get('/AmCuisine', async (req,res)=>{
    let america_cuisine = await america_cuisine_controller.getAll()
    res.render('AmCuisine', {america_cuisine:america_cuisine})
})

app.get('/ChCuisine', async (req,res)=>{
    let china_cuisine = await china_cuisine_controller.getAll()
    res.render('ChCuisine', {china_cuisine:china_cuisine})
})

app.get('/EuCuisine', async (req,res)=>{
    let europa_cuisine = await europa_cuisine_controller.getAll()
    res.render('EuCuisine', {europa_cuisine:europa_cuisine})
})

app.get('/JapCuisine', async (req,res)=>{
    let japan_cuisine = await japan_cuisine_controller.getAll()
    res.render('JapCuisine', {japan_cuisine:japan_cuisine})
})

app.get('/KoCuisine', async (req,res)=>{
    let korea_cuisine = await korea_cuisine_controller.getAll()
    res.render('KoCuisine', {korea_cuisine:korea_cuisine})
})

app.get('/MexCuisine', async (req,res)=>{
    let mexico_cuisine = await mexico_cuisine_controller.getAll()
    res.render('MexCuisine', {mexico_cuisine:mexico_cuisine})
})

app.get('/RuCuisine', async (req,res)=>{
    let russian_cuisine = await russian_cuisine_controller.getAll()
    res.render('RuCuisine', {russian_cuisine:russian_cuisine})
})

app.get('/Bread&pastries', async (req,res)=>{
    let breadpastries = await breadpastries_controller.getAll()
    res.render('Bread&pastries', {breadpastries:breadpastries})
})

app.get('/Salads', async (req,res)=>{
    let salads = await salads_controller.getAll()
    res.render('Salads', {salads:salads})
})

app.get('/Side_dishes', async (req,res)=>{
    let side_dishes = await sidedishes_controller.getAll()
    res.render('Side_dishes', {side_dishes:side_dishes})
})

app.get('/Soups', async (req,res)=>{
    let soups = await soups_controller.getAll()
    res.render('Soups', {soups:soups})
})

app.get('/Spicy', async (req,res)=>{
    let spicies = await spicies_controller.getAll()
    res.render('Spicy', {spicies:spicies})
})

app.get('/Vegetarian', async (req,res)=>{
    let vegetarian = await vegetarians_controller.getAll()
    res.render('Vegetarian', {vegetarian:vegetarian})
})







let port = config.PORT || 8080
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}...`)
})

await db.authenticate()
await db.sync()