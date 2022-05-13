const express = require('express')
const path = require('path')
const routeVoiture = require('./routes/voiture.route')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://wahid:88ciKvnaGvM4HdHa@cluster0.rpxl2.mongodb.net/voitureDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connection reussie !')
  })
  .catch((err) => {
    console.log('Problème de connection !' + err)
  })

app.use('/api/voiture', routeVoiture)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3333, () => {
  console.log('Server listening on port 3333...')
})
