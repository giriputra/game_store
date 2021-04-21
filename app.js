const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const router = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})