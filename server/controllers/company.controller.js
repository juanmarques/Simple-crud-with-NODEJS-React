const Company = require('../models/company.model');
var now = new Date();

exports.company_create = function (req, res) {
    let company = new Company(
        {
            companyID: req.body.id,
            createDate: now,
            name: req.body.name
        }
    );
    company.save(function (err) {
        if (err) {
            res.status(400).send({ err })
        }
        res.status(201).send('Company Created successfully')
    })
};

exports.company_findAll = function (req, res) {
    Company.find({}, { __v: 0 }).then(function (company) {
        res.status(200).send(company);
    });
};

exports.company_findbyID = function (req, res) {
    Company.find(({ companyID: req.params.id }), function (err, company) {
        if (err) {
            res.status(500).send("Error");
        }
        res.send(company);
    });
};

exports.company_update = function (req, res) {
    Company.findOneAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (err) {
            res.status(500).send("Error");
        }
        res.send("Company updated");
    });
};

exports.company_delete = function (req, res) {
    Company.findOneAndDelete(req.params.id, function (err) {
        if (err) {
            res.status(500).send("Error");
        }
        res.status(200).send("Company deleted");
    });
};