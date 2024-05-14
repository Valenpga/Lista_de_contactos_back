const express = require('express')
const router = express.Router()
const contactModels = require('../models/contactModels')

router.get('/', (req, res) => (res.send('estamos dentro de las rutas')));

module.exports = router