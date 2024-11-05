// src/models/User.js
const mongoose = require('mongoose');

const connectorSchema = new mongoose.Schema({
    input: [String],
    output: [String]
});

const moduleSchema = new mongoose.Schema({
    module_name: {
        type: String,
        required: true
    },
    module_Type: {
        type: String,
        required: true
    },
    module_description: {
        type: String,
        required: true
    },
    connectors: {
        type: connectorSchema,
        required: true
    }
});

module.exports = mongoose.model('module', moduleSchema);

