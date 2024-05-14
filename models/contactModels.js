const mongoose = require('mongoose')

const ContacSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }

    }
)

const ContactModel = mongoose.ContacSchema('ContactModel', ContacSchema)

module.exports = ContactModel
