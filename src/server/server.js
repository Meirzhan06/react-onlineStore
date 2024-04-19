const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
// const bcrypt = require('bcrypt');



app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const conn = mysql.createConnection({
    host: '178.62.239.6',     // Укажите хост базы данных
    user: 'ratUser', // Укажите имя пользователя базы данных
    password: 'ratUser', // Укажите пароль пользователя
    database: 'onlineStore' // Укажите имя базы данных
});


app.post('/registration', (req, res) => {
    const {name, email, password} = req.body
    
    const query = "insert into users(username, email, password) values (?, ?, ?)"

    conn.query(query, [name, email, password], (err, result) => {
        if (err){
            console.log(err)
            return res.status(500).json({ error: 'Ошибка на сервере' });
        }
        return res.status(200).json({ message: 'все збс' })
    })
})


















const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


