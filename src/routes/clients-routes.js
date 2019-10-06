const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/clients-controller');

router.get('/', mentionsController.listClients);
router.post('/', mentionsController.createClients);

module.exports = router;