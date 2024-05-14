const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema(
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

    }, {timestamps: true}
)

const ContactModels = mongoose.model('ContactModels', ContactSchema)

module.exports = ContactModels
