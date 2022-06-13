const express = require('express');

const app = express();


app.get('/', function (req, res)
{
    res.send("A1. Instalación y uso de módulo externos para proyectos en NodeJS. Yonathan Uriel Pastrana Tepectzin");
});

app.listen(3000);