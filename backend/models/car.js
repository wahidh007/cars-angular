const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
  prop : { type: String, required: true },
  marque : { type: String, required: true },
  dateCirulation : { type: Date, required: true },
})

module.exports = mongoose.model('Car', carSchema)
