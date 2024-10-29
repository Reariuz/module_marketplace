// models/moduleConfig.js
const moduleConfigs = {12345:'loremipsum'}; // In-Memory-Datenbank für das Beispiel

exports.getConfig = (userId) => {
    return moduleConfigs[userId];
};

exports.createConfig = (userId, configData) => {
    moduleConfigs[userId] = configData;
};

exports.updateConfig = (userId, configData) => {
    moduleConfigs[userId] = configData;
};

exports.exists = (userId) => {
    return userId in moduleConfigs;
};
