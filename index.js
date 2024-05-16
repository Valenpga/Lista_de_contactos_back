const express = require('express');
const dbConnection = require('./config/config');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const contactRoutes = require('./routes/contactRoutes');

const appLogger = function (req, res, next) {
    console.log(req.method + " " + req.originalUrl) //Middleware para registar informacion de las solicitudes

    next()
  }
  
  app.use(appLogger)

app.use('/', express.json());
app.use('/', contactRoutes);



dbConnection()

app.listen(PORT, () => {
    console.log(`Express esta corriendo en el puerto http://localhost:${PORT}`)
})