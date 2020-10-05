const express = require('express')
const rawMetController = require('../controllers/rawMetDataController')

const router = express.Router()


/**
 * @swagger 
 * /api/rawmetdata:
 *  get:
 *    tags:
 *      - RawMetData
 *    name: RawMetData
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 */

// get gapdetails 
router.get('/rawmetdata', rawMetController.getRawMetData)
// router.get('/gapdetails/:primarykey', gapdetController.getGapDetPK)

/**
 * @swagger 
 * /api/gapheader:
 *  get:
 *    tags:
 *      - GapHeader
 *    name: GapHeader
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 */



module.exports = router