const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./src/middleware/swagger');
//Routes
const userRoutes = require('./src/routes/userRoutes.js')
const moduleConfigRoutes = require('./src/routes/moduleConfigRoutes.js')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/moduleConfig',moduleConfigRoutes)

app.get('api/v1/users', (req, res) => {
  //logic?
});















app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API',
        endpoints: [
            { method: 'GET', path: '/api', description: 'Returns the API status' },
            { method: 'GET', path: '/debug', description: 'Returns available endpoints' }
        ]
    });
});






// Einfacher Api-Endpoint

/**
 * @swagger
 * /api:
 * get:
 *  summary: Retrieve connection details
 *      responses:
 *          200:
 *              description: a status message
 * 
 */
app.get('/api', (req, res) => {
    res.json({ message: 'Backend ist live!' });
});

// Einfacher Api-Endpoint
app.get('/debug', (req, res) => {
    res.json({
        message: 'The following endpoints are available:',
        routes: [
            '/api',
            '/debug'
            // Add other routes here as necessary
        ]
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

// Function to start the server
const startServer = () => {
    return app.listen(port, () => {
        console.log(`Server läuft auf Port ${port}`);
    });
};

module.exports = { app, startServer };

// Optionally, add this if you want to allow running directly
if (require.main === module) {
    startServer();
}