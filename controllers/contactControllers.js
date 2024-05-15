const ContactModels = require('../models/ContactModels')

const createContact = async (req, res) => {
    const contact = new ContactModels({
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });
    try{
        const newContact = await contact.save()
        res.status(201).json(newContact);

    }catch(error){
        console.log(error)
    }
    
}
const getAllContacts = async (req, res) => {
    try{
        const contacts = await ContactModels.find()
        res.json(contacts)
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    createContact,
    getAllContacts
}