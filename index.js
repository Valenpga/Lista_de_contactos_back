const express = require('express');
const cors = require('cors')
const dbConnection = require('./config/config');
require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const appLogger = function (req, res, next) {
    console.log(req.method + " " + req.originalUrl) //Middleware para registar informacion de las solicitudes

    next()
  }
  
  app.use(appLogger)

app.use('/', express.json());
app.use(cors());
app.use('/', contactRoutes);



dbConnection()

app.listen(PORT, () => {
    console.log(`Express esta corriendo en el puerto http://localhost:${PORT}`)
})