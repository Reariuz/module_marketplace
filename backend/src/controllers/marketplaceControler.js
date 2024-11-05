const Module = require('../models/marketplaceModuleModel');

exports.getAllModules = async (req, res) => {
    try {
        // Abrufen aller Benutzer aus der Datenbank
        const modules = await Module.find(); // Findet alle Benutzer

        // Sende die Liste der Benutzer zurück
        res.status(200).json(modules);
    } catch (error) {
        // Fehlerbehandlung
        console.error(error);
        res.status(500).json({ message: 'Error fetching models-list', error: error.message });
    }
};

exports.getSingleModule = async (req, res) => {
    try {
        const moduleId = req.params.moduleId;
        // Abrufen aller Benutzer aus der Datenbank
        const singleModule = await Module.find({ moduleId: moduleId }); // Findet alle Benutzer

        // Sende die Liste der Benutzer zurück
        res.status(200).json(singleModule);
    } catch (error) {
        // Fehlerbehandlung
        console.error(error);
        res.status(500).json({ message: 'Error fetching models-list', error: error.message });
    }
};