const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const definition = {
    openapi: '3.0.0',
    info: {
        title: 'Module Marketplace API',
        version: '1.0.0',
        description: 'This API handles the communication between the client and the server. It provides a varierty of routes to handle the traffic scalable. In theory you shouldn\'t be able to see this, nor comminucating with the api on your own.',
    },
    servers: [
        {
            url:"http://localhost:5000/",
            description: "local server"
        },
    ]

};

const options = {
    definition,
    apis: [path.join(process.cwd(),'/src/routes/*.js'), path.join(process.cwd(),'/src/controllers/*.js')],
};

const swaggerDocs = swaggerJSDoc(options);
module.exports = swaggerDocs
