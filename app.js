const express = require('express'); //Requiero express
const app = express(); //Requiero la funcionalidad de Express
const port = 3000; // Numero del servidor

app.listen(port, () => console.log('Algo' + port));


