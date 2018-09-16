const express = require('express');
const router = express.Router();

const customer_controller = require('../controllers/customer.controller');


router.post('/create', customer_controller.customer_create);
router.get('/listcustomers', customer_controller.customer_findAll);
router.get('/findbyid/:id', customer_controller.customer_findbyID);
router.put('/update/:id', customer_controller.customer_update);
router.post('/delete/:id', customer_controller.customer_delete);

module.exports = router;