const swaggerJSDoc = require('swagger-jsdoc');

const definition = {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
        description: 'API Documentation',
    }

};

const options = {
    definition,
    apis: ['../routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(options);
module.exports = swaggerDocs
