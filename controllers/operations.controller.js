const faker = require('faker');

module.exports = {
    home: function (req, res) {
        let home = {'routes': ['/operation/sum','/operation/substract','/operation/multiply','/operation/divide']}
        res.send(home)
    },

    sum: function (req, res) {
        var num1 = parseInt(faker.finance.amount())
        var num2 = parseInt(faker.finance.amount())
        var val = num1 + num2
        let text = `${num1} + ${num2} = ${val}`
        res.status(201).send(text);
    },

    substract: function (req, res) {
        var num1 = parseInt(faker.finance.amount())
        var num2 = parseInt(faker.finance.amount())
        var val = num1 - num2
        let text = `${num1} - ${num2} = ${val}`
        res.status(201).send(text);
    },

    multiply: function (req, res) {
        var num1 = parseInt(faker.finance.amount())
        var num2 = parseInt(faker.finance.amount())
        var val = num1 * num2
        let text = `${num1} * ${num2} = ${val}`
        res.status(201).send(text);
    },

    divide: function (req, res) {
        var num1 = parseInt(faker.finance.amount())
        var num2 = parseInt(faker.finance.amount())
        var val = num1 / num2
        let text = `${num1} / ${num2} = ${val}`
        res.status(201).send(text);
    }
};
