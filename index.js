const express = require('express');
const dbConnection = require('./config/config');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const contactRoutes = require('./routes/contactRoutes');

app.use('/',contactRoutes)


dbConnection()

app.listen(PORT, () => {
    console.log(`Express esta corriendo en el puerto http://localhost:${PORT}`)
})