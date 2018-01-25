const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/characters.controller');

router.get('/', charactersController.new);
router.post('/', charactersController.create);

module.exports = router;

