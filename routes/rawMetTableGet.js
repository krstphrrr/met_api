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
 *        description: A successful response..
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/rawmetdata"
 *definitions:
 *  rawmetdata:
 *    type: "object"
 *    properties:
 *      TIMESTAMP:
 *        type: "string"
 *        format: "date-time"
 *      RECORD:
 *        type: "number"
 *      Switch:
 *        type: "number"
 *      AvgTemp_10M_DegC:
 *        type: "number"
 *      AvgTemp_4M_DegC:
 *        type: "number"
 *      AvgTemp_2M_DegC:
 *        type: "number"
 *      AvgRH_4m_perc:
 *        type: "number"
 *      Total_Rain_mm:
 *        type: "number"
 *      WindDir_deg:
 *        type: "number"
 *      MaxWS6_10M_m_s:
 *        type: "number"
 *      MaxWS5_5M_m_s:
 *        type: "number"
 *      MaxWS4_25M_m_s:
 *        type: "number"
 *      MaxWS3_15M_m_s:
 *        type: "number"
 *      MaxWS2_1M_m_s:
 *        type: "number"
 *      MaxWS1_05M_m_s:
 *        type: "number"
 *      StdDevWS2_1M_m_s:
 *        type: "number"
 *      AvgWS6_10M_m_s:
 *        type: "number"
 *      AvgWS5_5M_m_s:
 *        type: "number"
 *      AvgWS4_25M_m_s:
 *        type: "number"
 *      AvgWS3_15M_m_s:
 *        type: "number"
 *      AvgWS2_1M_m_s:
 *        type: "number"
 *      AvgWS1_05M_m_s:
 *        type: "number"
 *      Sensit_Tot:
 *        type: "number"
 *      SenSec:
 *        type: "number"
 *      SWUpper_Avg:
 *        type: "number"
 *      SWLower_Avg:
 *        type: "number"
 *      LWUpperCo_Avg:
 *        type: "number"
 *      LWLowerCo_Avg:
 *        type: "number"
 *      CNR4TK_Avg:
 *        type: "number"
 *      RsNet_Avg:
 *        type: "number"
 *      RlNet_Avg:
 *        type: "number"
 *      Albedo_Avg:
 *        type: "number"
 *      Rn_Avg:
 *        type: "number"
 *      Sampling_time_2m:
 *        type: "number"
 *      PM1_2m_Avg:
 *        type: "number"
 *      PM2_5_2m_Avg:
 *        type: "number"
 *      PM4_2m_Avg:
 *        type: "number"
 *      PM10_2m_Avg:
 *        type: "number"
 *      TtlMeas_2m_Avg:
 *        type: "number"
 *      Sampling_time_4m:
 *        type: "number"
 *      PM1_4m_Avg:
 *        type: "number"
 *      PM2_5_4m_Avg:
 *        type: "number"
 *      PM4_4m_Avg:
 *        type: "number"
 *      PM10_4m_Avg:
 *        type: "number"
 *      TtlMeas_4m_Avg:
 *        type: "number"
 *      ProjectKey:
 *        type: "string"
 *      
 */

// get gapdetails 
router.get('/rawmetdata', rawMetController.getRawMetData)

module.exports = router