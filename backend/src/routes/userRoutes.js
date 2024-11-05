const express = require('express');
const router = express.Router();
const userControler = require('../controllers/userControler');

//define User routes
/**
 * @swagger
 * tags:
 *  - name: Users
 *    description: Endpoint for managing Users
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Retrieve list of all Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all Users in Database
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 config:
 *                   type: object
 *                   additionalProperties: true
 *       500:
 *         description: internal server error - Error fetching User-list
 */
router.get('/',userControler.getAllUsers);


//define User routes
/**
 * @swagger
 * tags:
 *  - name: Users
 *    description: Endpoint for managing Users
 */

/**
 * @swagger
 * /api/v1/users:
 *   POST:
 *     summary: Create User
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: creating a new user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 config:
 *                   type: object
 *                   additionalProperties: true
 *       400:
 *         description: Error creating User
 */
router.post('/', userControler.createUser);

module.exports = router;