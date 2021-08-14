// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const router = express.Router()
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid,
} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try{
        const cars = await Car.getAll()
        res.status(200).json(cars)
    }catch(err){
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try{
        const car = await Car.getById(req.params.id)
        res.status(200).json(car)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    res.json('posting new car')
})

module.exports = router