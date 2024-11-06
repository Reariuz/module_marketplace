// src/models/Module.js
const mongoose = require('mongoose');

// Schema für die Connectors
const connectorSchema = new mongoose.Schema({
    input: [String],  // Liste von Eingaben, z.B. API-Endpunkte, Datenquellen
    output: [String]  // Liste von Ausgaben, z.B. Zielsysteme, Verarbeitungslogik
});

// Haupt-Schema für Module
const moduleSchema = new mongoose.Schema({
    module_id: {
        type: String,
        required: true, // Eindeutige ID für jedes Modul
        unique: true     // Sicherstellen, dass jede ID nur einmal existiert
    },
    module_name: {
        type: String,
        required: true   // Der Name des Moduls (z.B. Asterix, Obelix, etc.)
    },
    module_version: {
        type: String,
        required: true   // Die Version des Moduls
    },
    module_Type: {
        type: String,
        required: true,  // Die Kategorie des Moduls (z.B. Konnektor, Fragment, etc.)
    },
    module_description: {
        type: String,
        required: true   // Die Beschreibung des Moduls
    },
    connectors: {
        type: connectorSchema,
        required: true    // Verbundene Datenströme oder Endpunkte
    }
});

// Modell für das Modul
module.exports = mongoose.model('Module_short', moduleSchema);
