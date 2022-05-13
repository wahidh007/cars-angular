const express = require('express')
const path = require('path')
const cors = require('cors')
const carRoutes = require('./routes/cars.routes')

const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://wahid:88ciKvnaGvM4HdHa@cluster0.rpxl2.mongodb.net/CarsDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('database connected !')
  })
  .catch(() => {
    console.log('connection failed !!!!')
  })

// ajouter les routes
// Car List
const cars = [
  {"id" : 1, "prop": "Wahid", "marque": "Porche", "dateCirulation" : new Date()},
  {"id" : 2, "prop": "Ferid", "marque": "Ferrari", "dateCirulation" : new Date()},
  {"id" : 3, "prop": "Henda", "marque": "Lamborguini", "dateCirulation" : new Date()},
]

app.use('/api/cars', carRoutes)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})

