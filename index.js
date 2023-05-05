const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000 ;
app.use(cors())
const Chef = require('./Data/Chef.json')
const shop = require('./Data/Outlet.json')
const dishes = require('./Data/Dishes.json')

app.get( '/', (req, res) =>{
    res.send('Chefe is coming')
})

app.get('/Chef', (req, res) =>{
    res.send(Chef)
})

app.get('/shop',(req,res)=>{
    res.send(shop)
})

app.get('/dishes',(req,res)=>{
    res.send(dishes)
})

app.get('/Chef/:id', (req,res) =>{
    const id = req.params.id ;
    console.log(id)
    const selectedChef = Chef.find(everyChef => everyChef.id == id)
    res.send(selectedChef)
})

app.listen(port, () =>{
    console.log(`Chefe API ic running on port : ${port}`)
})