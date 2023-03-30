const express = require('express')
const router = express.Router()
const db = require('../models')
const { Op, Sequelize } = require("sequelize");
const date = require('date-and-time');

router.get('/chart', async (req, res) => {
    try {
        const result = await db.Charts.findAll()

        data_befor = []
        result.forEach(async (element, index, array) => {
            data_befor.push({
                month: date.format(element.dataValues.createdAt, 'MMM YYYY'),
                kwh_data: element.dataValues.kwh,
                temp_data: element.dataValues.temp
            })

        });

        if (await result) {
            res.status(200).json(data_befor)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/chart', async (req, res) => {
    try {
        const result = await db.Charts.findAll({
            where: {
                [Op.or]: [{
                    created_at: {
                        [Op.between]: [req.body.start, req.body.end]
                    }
                }]
            }
        })

        data_befor = []
        result.forEach(async (element, index, array) => {
            data_befor.push({ 
                month: date.format(element.dataValues.createdAt, 'MMM YYYY'), 
                kwh_data: element.dataValues.kwh,
                temp_data: element.dataValues.temp
            })

        });

        if (await result) {
            res.status(200).json(data_befor)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
