const express = require('express')
const mysql = require('mysql')
const app = express()

// Create Connection Pool Object
const dbPool = mysql.createPool(
{
    host: 'localhost',
    user: 'tcj',
    password: 'tcj',
    database: 'login_db'
})

app.use(express.static('public'))

app.get('/api', (req, res) => {
})

// Start The Server Listening
app.listen(5000, () => {
    console.log("[SERVER] Listening On Port 5000")
})

