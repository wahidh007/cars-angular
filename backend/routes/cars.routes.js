const express = require('express')
const Car = require('../models/car')

const router = express.Router()

router.get('', (req, res) => {
  // console.log(cars)
  // res.status(200).json(cars)

  Car.find().then((document) => {
    console.log(document)
    res.status(200).json(document.map((c) => {
      return { id: c._id, prop: c.prop, marque: c.marque, dateCirulation: c.dateCirulation }
    }))
  })
})

router.get('/:id', (req, res) => {
  // const id = parseInt(req.params.id)
  // let car = cars.find((c) => c.id === id)
  // console.log(car)
  // res.status(200).json(car)

  Car.findById(req.params.id)
    .then(document => {
      console.log(document)
      res.status(200).json(document)
    })
    .catch(() => {
      console.log('Not found !')
      res.status(404).json('Not found !')
    })
})

router.post('', (req, res) => {
  // cars.push(req.body)

  const car = new Car({
    prop : req.body.prop,
    marque : req.body.marque,
    dateCirulation : req.body.dateCirulation
  })
  console.log(car)

  car.save().then((createdCar) => {
    console.log(createdCar)
    Car.find().then((document) => {
      console.log(document)
      res.status(201).json(document.map((c) => {
        return { id: c._id, prop: c.prop, marque: c.marque, dateCirulation: c.dateCirulation }
      }))
    })
  })

  console.log('1 record added!')
})

router.put('/:id', (req, res) => {
  // const id = parseInt(req.params.id)
  // let car = cars.find((c) => c.id === id)

  // car.prop = req.body.prop
  // car.marque = req.body.marque
  // car.dateCirulation = req.body.dateCirulation

  // console.log('1 record updated!')
  // res.status(200).json(car)

  Car.updateOne({_id: req.params.id}, {prop: req.body.prop, marque:  req.body.marque, dateCirulation:  req.body.dateCirulation}).
    then(() => {
      console.log('1 record updated!')
      Car.find().then((document) => {
        console.log(document)
        res.status(200).json(document.map((c) => {
          return { id: c._id, prop: c.prop, marque: c.marque, dateCirulation: c.dateCirulation }
        }))
      })
    })
    .catch(() => {
      console.log('Not found')
      res.status(404).json('Not found !')
    })
})

router.delete('/:id', (req, res) => {
  // id = parseInt(req.params.id)
  // let car = cars.find((c) => c.id === id)
  // cars.splice(cars.indexOf(car), 1)

  // console.log('1 record deleted!')
  // res.status(200).json(cars)

  Car.deleteOne({_id: req.params.id}).
  then(() => {
    console.log('1 record deleted!')
    Car.find().then((document) => {
      console.log(document)
      res.status(200).json(document.map((c) => {
        return { id: c._id, prop: c.prop, marque: c.marque, dateCirulation: c.dateCirulation }
      }))
    })
  })
  .catch(() => {
    console.log('Not found')
    res.status(404).json('Not found !')
  })
})

module.exports = router
