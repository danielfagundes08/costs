const express = require('express');

const testeController = require('./controller/TesteController');

const router = express.Router();

router.get('/', testeController.getAll);

module.exports = router;