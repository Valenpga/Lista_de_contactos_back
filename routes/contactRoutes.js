const express = require('express')
const router = express.Router()
const ContactModels = require('../models/ContactModels')
const contactControllers = require('../controllers/contactControllers')

router.post('/create', contactControllers.createContact);
router.get('/', contactControllers.getAllContacts);


module.exports = router;