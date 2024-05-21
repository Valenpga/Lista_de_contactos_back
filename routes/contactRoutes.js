const express = require('express')
const router = express.Router()
const contactControllers = require('../controllers/contactControllers')

router.post('/contacts', contactControllers.createContact);
router.get('/contacts', contactControllers.getAllContacts);
router.get('/contacts/:id', contactControllers.getContactById);
router.put('/contact/:id', contactControllers.updateContactById);
router.delete('/contact/:id', contactControllers.deleteContactById);



module.exports = router;