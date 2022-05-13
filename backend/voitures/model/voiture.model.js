const mongoose = require('mongoose')
const { stringify } = require('querystring')

const voitureSchema = mongoose.Schema({
  prop: {type: String, required: true},
  marque: {type: String, required: true},
  dateCir: {type: Date, required: true},
})

module.exports = mongoose.model('Voiture', voitureSchema)
