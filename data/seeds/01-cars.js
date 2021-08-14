const cars = [
    {
        vin: '2B3KA43GX6H200038',
        make: 'Acura',
        model: 'TLX',
        mileage: 0,
        title: 'noice',
        transmission: 'automatic'
    },
    {
        vin: '2V4RW4D10AR353397',
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