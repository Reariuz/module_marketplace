const ModuleConfig = require('../models/moduleConfigmodel');

exports.loadConfig = (req, res) => {
    const userId = req.params.userId;
    const config = ModuleConfig.getConfig(userId); // Annahme: getConfig ist eine Methode im Modell

    if (config) {
        res.json(config);
    } else {
        res.status(404).send('configuration not found');
    }
};

exports.saveConfig = (req, res) => {
    const userId = req.params.userId;
    const configData = req.body;
    ModuleConfig.createConfig(userId, configData); // Annahme: createConfig ist eine Methode im Modell
    res.status(201).send('cofiguration created');
};

exports.updateConfig = (req, res) => {
    const userId = req.params.userId;
    const configData = req.body;

    if (ModuleConfig.exists(userId)) { // Annahme: exists prüft, ob die Konfiguration existiert
        ModuleConfig.updateConfig(userId, configData); // Annahme: updateConfig ist eine Methode im Modell
        res.send('configuration updatet');
    } else {
        res.status(404).send('configuration not found');
    }
};