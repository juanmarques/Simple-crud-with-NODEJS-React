const express = require('express');
const router = express.Router();

const company_controller = require('../controllers/company.controller');

router.post('/create', company_controller.company_create);
router.get('/listcompanies', company_controller.company_findAll);
router.get('/findbyid/:id', company_controller.company_findbyID);
router.put('/update/:id', company_controller.company_update);
router.post('/delete/:id', company_controller.company_delete);

module.exports = router;