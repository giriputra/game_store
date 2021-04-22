const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const session = require('express-session')

const router = require('./routes/index')

//session
app.use(session({
    secret: 'supersce',
    resave: false,
    saveUninitialized: true,
}))

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})