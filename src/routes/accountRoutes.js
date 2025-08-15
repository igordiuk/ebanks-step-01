const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.post('/reset', accountController.reset);
router.get('/balance', accountController.getBalance);
router.post('/event', accountController.handleEvent);

module.exports = router;