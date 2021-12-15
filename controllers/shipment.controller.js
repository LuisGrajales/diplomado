const faker = require('faker');

//deberas de utilizar faker para generar los datos
module.exports = {
    home: function (req, res) {
        let home = {'routes': ['/shipment/create','/shipment/change']}
        res.send(home)
    },
    createShipment: function (req, res) {
        // debera de simular un envio con dirección un precio y una persona con sus datos
        let details = {
            'Order':{
                'OrderID': faker.finance.mask(),
                'FirstName': faker.name.firstName(),
                'LastName': faker.name.lastName()
            },
            'Price': faker.finance.amount(),
            'Address':{
                'Street': faker.address.streetAddress(),
                'Zip': faker.address.zipCode(),
                'City': faker.address.city(),
                'State': faker.address.state(),
                'Country': faker.address.country(),
            },
        }
        console.log()
        res.status(201).send(details);
    },
    changeStatus: function (req, res) {
        //Debera de retornar una dirección random
        // codigo de respuesta 201
        // data la direcciòn random
        res.status(201).send(faker.address.streetAddress(true));
    },
};
