const express = require('express')
const bodyParser = require('body-parser')
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

dbPool.getConnection((e, c) => {
    c.query("create database if not exists mycloud;").on("error", () => {
        console.log("couldn't create database")
    })

    c.query("create table if not exists cloud_users()")
})

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/users/new', (req, res) => {
    console.log(req.body.email)

})

// Start The Server Listening
app.listen(5000, () => {
    console.log("[SERVER] Listening On Port 5000")
})

