var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/', require('./home/index'));
router.get('/banner', require('./modulos/banner'));

module.exports = router;
