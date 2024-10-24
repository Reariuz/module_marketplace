const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Einfacher Api-Endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Backend ist live!' });
});

// Einfacher Api-Endpoint
app.get('/debug', (req, res) => {
    res.json(
        {   message: 'The following endpoints are available:',
            1: '/api',
            2:'api/json-files' 
        });
});




// Route zum Auslesen der JSON-Dateien
app.get('/api/json-files', (req, res) => {
    const modulesDir = path.join(__dirname, 'modules');
    let jsonData = [];

    fs.readdir(modulesDir, (err, modules) => {
        if (err) {
            return res.status(500).json({ error: 'Fehler beim Lesen des Moduls-Verzeichnisses' });
        }

        let readFilesPromises = modules.map(module => {
            const modulePath = path.join(modulesDir, module);
            return fs.promises.readdir(modulePath).then(files => {
                let jsonFiles = files.filter(file => file.endsWith('.json'));
                return Promise.all(jsonFiles.map(jsonFile => {
                    const jsonFilePath = path.join(modulePath, jsonFile);
                    return fs.promises.readFile(jsonFilePath, 'utf8').then(data => {
                        jsonData.push({ file: jsonFile, content: JSON.parse(data) });
                    });
                }));
            });
        });

        Promise.all(readFilesPromises)
            .then(() => res.json(jsonData))
            .catch(err => res.status(500).json({ error: 'Fehler beim Lesen der JSON-Dateien' }));
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
