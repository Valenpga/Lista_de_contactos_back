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
const getContactById = async (req, res) => {
    const {id} = req.params;

    try{
        const contact = await ContactModels.find(id)
        if(!contact){
            return res.status(404).json({error:'Contacto no encontrado'})
        }
        res.status(200).json(contact)

    }catch(error){
        console.log(error)
    }
}
const updateContactsById = async (req, res) => {
    const {id} = req.params;
    const {fullName, phoneNumber, email} = req.body
    try{
    const updateContact = await ContactModels.findByIdAndUpdate(id, {fullName, phoneNumber, email}, {new: true});
    if(!updateContact){
        return res.status(404).json({error:"No se encuentra el contacto"})
    }
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Error al actualiar"})
    }
}


module.exports = {
    createContact,
    getAllContacts,
    getContactById,
    updateContactsById
}