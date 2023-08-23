const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

let port = 3001
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
})