const express = require('express')
const Voiture = require('../model/voiture.model')

const router = express.Router()

const voitures = [
  {'_id': 'FGFJFJ222', 'prop': 'Ali', 'marque': 'BMW', 'dateCir': '12/10/2015'},
  {'_id': 'ZEZE1233', 'prop': 'Salah', 'marque': '404', 'dateCir': '05/09/2011'},
  {'_id': 'TTV45555', 'prop': 'Fatma', 'marque': 'Porsche', 'dateCir': '10/03/2018'}
]

router.get('', (req, res) => {
  // res.status(200).json(voitures);
  Voiture.find().then((voituresList) => {
    res.status(200).json(voituresList)
  })
})

router.get('/:id', (req, res) => {
  let voiture = voitures.find((v) => v._id === req.params.id)

  res.status(200).json(voiture);
})

router.post('', (req, res) => {
  let v = new Voiture({
    prop: req.body.prop,
    marque: req.body.marque,
    dateCir: req.body.dateCir
  })
  v.save().then((newVoiture) => {
    console.log(newVoiture)
  })

  // console.log(req.body)
  voitures.push(req.body)

  console.log('Voiture crée !')
  res.status(201).json(voitures);
})

router.put('/:id', (req, res) => {
  let v = voitures.find((v) => v._id === req.params.id)
  v.prop = req.body.prop
  v.marque = req.body.marque
  v.dateCir = req.body.dateCir

  console.log('Voiture mise à jour !')
  res.status(200).json(voitures);
})

router.delete('/:id', (req, res) => {
  let v = voitures.find((v) => v._id === req.params.id)
  index = voitures.indexOf(v)
  voitures.splice(index, 1)

  console.log('Voiture supprimée !')
  res.status(200).json(voitures);
})

module.exports = router
