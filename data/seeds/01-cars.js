// const { default: knex } = require("knex")

const cars = [
    {
        vin: '1234567891012',
        make: 'Acura',
        model: 'TLX',
        mileage: 0,
        title: 'noice',
        transmission: 'automatic'
    },
    {
        vin: '1234567891022',
        make: 'Genesis',
        model: '370',
        mileage: 0,
        title: 'new',
        transmission: 'automatic'
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}