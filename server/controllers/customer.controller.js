const customer = require('../models/customer.model');
var now = new Date();

exports.customer_create = function (req, res) {
    let customer = new customer(
        {
            customerID: req.body.id,
            companyID: req.body.companyid,
            createDate: now,
            rewardsNumber: req.body.rewardsNumber,
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob
        }
    );
    customer.save(function (err) {
        if (err) {
            res.status(400).send({ err })
        }
        res.status(201).send('customer Created successfully')
    })
};

exports.customer_findAll = function (req, res) {
    customer.find({}, { __v: 0 }).then(function (customer) {
        res.status(200).send(customer);
    });
};

exports.customer_findbyID = function (req, res) {
    customer.find(({ customerID: req.params.id }), function (err, customer) {
        if (err) {
            res.status(500).send("Error");
        }
        res.send(customer);
    });
};

exports.customer_update = function (req, res) {
    customer.findOneAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (err) {
            res.status(500).send("Error");
        }
        res.send("customer updated");
    });
};

exports.customer_delete = function (req, res) {
    customer.findOneAndDelete(req.params.id, function (err) {
        if (err) {
            res.status(500).send("Error");
        }
        res.status(200).send("customer deleted");
    });
};