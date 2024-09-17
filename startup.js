// Este arquivo guarda configurações
const express = require('express')
const app = express()
const consign = require('consign')
const path = require('path')

app.set('view engine','ejs')
app.set('views','mvc/views/ctrldev')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('mvc/views/public'))

consign()
    .include('mvc/controllers')
    .into(app)


app.listen(3000, () => console.log('Online server at port 3000'))
module.exports = app

