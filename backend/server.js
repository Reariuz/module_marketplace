const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//Einfacher Api-Endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Backend ist live!'});
});

app.listen(port,() => {
    console.log('Server läuft auf Port ${port}');
});