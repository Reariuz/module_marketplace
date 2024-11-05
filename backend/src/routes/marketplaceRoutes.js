const express = require('express');
const router = express.Router();
const marketplaceControler = require('../controllers/marketplaceControler');

//define marketplace routes

/**
 * @swagger
 * tags:
 *  - name: Marketplace
 *    description: Management of all the transactions and deployment
 */

/**
 * @swagger
 * /api/v1/marketplace/modules:
 *   get:
 *     summary: Retrieve List of all Modules available
 *     tags: [Marketplace]
 *     responses:
 *       200:
 *         description: List of all Modules in their recent version 
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
router.get('/',marketplaceControler.getAllModules); //list all available modules

/**
 * @swagger
 * /api/v1/marketplace/modules/{moduleId}:
 *   get:
 *     summary: Retrieve aditional infomation about a module
 *     tags: [Marketplace]
 *     parameters:
 *       - name: moduleId
 *         in: path
 *         required: true
 *         description: The Unique ID of the module
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucsessfully fetched information about module
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
router.get('/:moduleId', marketplaceControler.getSingleModule);



module.exports = router;