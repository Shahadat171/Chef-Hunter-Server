const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;

const Chef = require('./Data/Chef.json')

app.get( '/', (req, res) =>{
    res.send('Chefe is coming')
})

app.get('/Chef', (req, res) =>{
    res.send(Chef)
})

app.listen(port, () =>{
    console.log(`Chefe API ic running on port : ${port}`)
})