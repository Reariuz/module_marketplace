

// src/controllers/userController.js
const User = require('../models/userModels'); // Importiere das User-Modell

exports.getAllUsers = async (req, res) => {
    try {
        // Abrufen aller Benutzer aus der Datenbank
        const users = await User.find(); // Findet alle Benutzer

        // Sende die Liste der Benutzer zurück
        res.status(200).json(users);
    } catch (error) {
        // Fehlerbehandlung
        console.error(error);
        res.status(500).json({ message: 'Error fetching User-list', error: error.message });
    }
};


exports.createUser = async (req, res) => {
    const { name, email } = req.body; // Destrukturiere die Daten aus dem Request-Body

    try {
        // Erstelle ein neues Benutzerobjekt
        const newUser = new User({
            name,
            email,
        });

        // Speichere den neuen Benutzer in der Datenbank
        const savedUser = await newUser.save();

        // Sende die Antwort mit dem gespeicherten Benutzer
        res.status(201).json(savedUser);
    } catch (error) {
        // Fehlerbehandlung
        console.error(error);
        res.status(400).json({ message: 'Fehler beim Erstellen des Benutzers', error: error.message });
    }
};
