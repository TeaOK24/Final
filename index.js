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

app.get('/game.html', (req, res) => {
    res.sendFile(__dirname + '/game.html')
})

let port = 3001
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
})