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
        res.status(500).json({error:"Contacto no creado"})
    }
    
}
const getAllContacts = async (req, res) => {
    try{
        const contacts = await ContactModels.find()
        res.json(contacts)
    }catch(error){
        console.log(error)
        res.status(500).json({error:"No se han conseguido los contactos"})
    }
}
const getContactById = async (req, res) => {
    const {id} = req.params;

    try{
        const contact = await ContactModels.findById(id)
        if(!contact){
            return res.status(404).json({error:'Contacto no encontrado'})
        }
        res.status(200).json(contact)

    }catch(error){
        console.log(error)
        res.status(500).json({error:"No se encuentra el contacto"})
    }
}
const updateContactById = async (req, res) => {
    const {id} = req.params;
    const {fullName, phoneNumber, email} = req.body
    try{
    const updateContact = await ContactModels.findByIdAndUpdate(id, {fullName, phoneNumber, email}, {new: true});
    if (updateContact) {
        res.status(200).json({updateContact})
      } else {
        res.status(500).json({mensaje:"Error de validacion"})
      }
    
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Error al actualiar"})
    }
}
const deleteContactById = async (req,res) => {
    const {id} = req.params
    try{
        const deleteContact = await ContactModels.findByIdAndDelete(id)
        if(!deleteContact) {
            return res.status(500).json({Error:"Contacto no encontrado"})
        }
        res.status(200).json({mensaje:"contacto eliminado correctamente"}) 
    }catch(error){
        console.error(error)
        res.status(500).json({error:"No se elimino el contacto"})
    }
}


module.exports = {
    createContact,
    getAllContacts,
    getContactById,
    updateContactById,
    deleteContactById
}