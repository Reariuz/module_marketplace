const request = require('supertest');
const { app, startServer } = require('./server'); // Ensure this is correct
let server;

//describe('API Server Tests', () => {
    beforeAll(async () => {
        console.log('server start');
        server = startServer();

        // Optional: Wait for a bit to ensure the server is ready
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log('Server is responsive');
    });


    test('1_load', async () => {

        const response = await request(app).get('/'); // Use relative path
        console.log('response is:', response.body); // Log response body directly
        expect(response.status).toBe(200);
    });

    test('2_route to debug', async () => {

        const debugResponse = await request(app).get('/debug'); // Correct endpoint
        console.log('Debug response:', debugResponse.body); // Log debug response
        expect(debugResponse.status).toBe(200);
    });

    test('3_pool data', async () => {

        const debugResponse = await request(app).get('/api/json-files'); // Correct endpoint
        console.log('Debug response:', debugResponse.body); // Log debug response
        expect(debugResponse.status).toBe(200);
    });

    
    /*


    test('Check each debug route', async () => {
        const debugResponse = await request(app).get('/debug'); // Get debug routes
        const debugRoutes = debugResponse.body;

        for (const route of Object.values(debugRoutes)) {
            const response = await request(app).get(route); // Make requests to each route
            console.log(`Checking route: ${route}, Response status: ${response.status}`);
            expect(response.status).toBe(200);
        }
    }); */

    afterAll(async () => {
        console.log('Closing server...');
        await new Promise(resolve => server.close(resolve));
    });
//});
