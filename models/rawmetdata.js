const Sequelize = require('sequelize')
const db = require("../config/database")

/**
 * @swagger 
 * definitions:
 * 	Raw_met_data:
 * 		type:object
 * 		properties:
 * 			
 * 
 */

const rawMetData = db.define('raw_met_data', {
	TIMESTAMP: {
		type: Sequelize.DATE,
		allowNull: true,
		primaryKey:true
	},
	RECORD: {
		type: Sequelize.REAL,
		allowNull: true
	},
	Switch: {
		type: Sequelize.REAL,
		allowNull: true
	},
	AvgTemp_10M_DegC: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	AvgTemp_4M_DegC: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	AvgTemp_2M_DegC: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	AvgRH_4m_perc: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Total_Rain_mm: {
		type: Sequelize.REAL,
		allowNull: true
	},
	WindDir_deg: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	MaxWS6_10M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	MaxWS5_5M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	MaxWS4_25M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	MaxWS3_15M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	MaxWS2_1M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	MaxWS1_05M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	StdDevWS2_1M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	AvgWS6_10M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	AvgWS5_5M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	AvgWS4_25M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	AvgWS3_15M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	AvgWS2_1M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	AvgWS1_05M_m_s: {
		type: Sequelize.REAL,
		allowNull: true
	},
	Sensit_Tot: {
		type: Sequelize.REAL,
		allowNull: true
	},
	SenSec: {
		type: Sequelize.REAL,
		allowNull: true
	},
	SWUpper_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	SWLower_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	LWUpperCo_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	LWLowerCo_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	CNR4TK_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	RsNet_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	RlNet_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	Albedo_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	Rn_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	Sampling_time_2m: {
		type: Sequelize.REAL,
		allowNull: true
	},
	PM1_2m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	PM2_5_2m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	PM4_2m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	PM10_2m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	TtlMeas_2m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	Sampling_time_4m: {
		type: Sequelize.REAL,
		allowNull: true
	},
	PM1_4m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	PM2_5_4m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	PM4_4m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	PM10_4m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	TtlMeas_4m_Avg: {
		type: Sequelize.REAL,
		allowNull: true
	},
	ProjectKey: {
		type: Sequelize.TEXT,
		allowNull: true,
		primaryKey:true
	},
	BattV_Min: {
		type: Sequelize.REAL,
		allowNull: true
	}
	}, {
		tableName: 'raw_met_data',
		createdAt: false,
		updatedAt:false,
	});

module.exports = rawMetData
