const PAYMENT_FILE_PATH = 'payment-generated';
const VALUES_FILE_PATH = 'new-payment-generated.txt';
const faker = require('faker');
const fs = require('fs');
const LINE_ENDING = require('os').EOL
const lineReader = require('line-reader');
const txtToJson = require("txt-file-to-json");


module.exports = {
    home: function (req, res) {
        let home = {'routes': ['/payment/create','/payment/discount','/payment/view','/payment/promos']}
        res.send(home)
    },

    create: function (req, res) {
        const fd = fs.openSync(PAYMENT_FILE_PATH, 'a');
        fs.appendFileSync(fd, faker.commerce.price() + LINE_ENDING, 'utf8');

        home = {'routes': ['/payment/view']}
        res.status(201).send(home);
    },

    applyDiscount: function (req, res) {
        
        //debera de restar una cantidad a cada precio en payment-generated.txt
        lineReader.eachLine(PAYMENT_FILE_PATH, function(line) {
            var intLine = parseInt(line)
            var random_value = faker.commerce.price()
            intLine = intLine - random_value
            const fd = fs.openSync(VALUES_FILE_PATH, 'a');
            fs.appendFileSync(fd, intLine + LINE_ENDING, 'utf8');            
        });
        res.send('Done, visit: /view')
    },

    viewDiscount: function (req, res) {
        const dataInJSON = txtToJson({ filePath: './new-payment-generated.txt'});
        console.log(dataInJSON)
        res.json(dataInJSON)
    },

    getPromos: function (req, res) {
        res.json([
            {name: "BUENFIN"},
            {name: "HOTSALE"},
            {name: "CYBERMONDAY"},
            {name: "BLACKFRIDAY"},
            {name: "PRIMEDAY"},
        ]);
    }
};
