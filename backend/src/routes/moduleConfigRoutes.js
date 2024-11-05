const express = require('express');
const router = express.Router();
const moduleConfigControler = require('../controllers/moduleConfigControler');

/**
 * @swagger
 * tags:
 *  - name: ModuleConfig
 *    description: Endpoint for managing the module configurations
 */

/**
 * @swagger
 * /api/v1/moduleConfig/{userId}:
 *   get:
 *     summary: Retrieve current configuration details
 *     tags: [ModuleConfig]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The Id of the User
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: current configuration of the users modules
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 config:
 *                   type: object
 *                   additionalProperties: true
 *       500:
 *         description: internal server error
 */
router.get('/:userId', moduleConfigControler.loadConfig);

/**
 * @swagger
 * /api/v1/moduleConfig/{userId}:
 *   post:
 *     summary: Save a new configuration
 *     tags: [ModuleConfig]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The Id of the User
 *         schema:
 *           type: string
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              config:
 *                type: object
 *                additionalProperties: true
 *     responses:
 *       201:
 *         description: configuration sucsessfully saved
 *       400:
 *         description: incorect inputs
 */
router.post('/:userId', moduleConfigControler.saveConfig);

/**
 * @swagger
 * /api/v1/moduleConfig/{userId}:
 *   put:
 *     summary: Update a module configuration
 *     tags: [ModuleConfig]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The Id of the User
 *         schema:
 *           type: string
 *     requestBody:
 *       requiered: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               config:
 *                 type: object
 *                 additionalProperties: true
 *     responses:
 *       200:
 *         description: sucsessfully updated
 *       404:
 *         description: configuration not found
 */
router.put('/:userId', moduleConfigControler.updateConfig);


module.exports = router;