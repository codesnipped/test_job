const express = require('express')
const router = express.Router()
const db = require('../models')
const { Op, Sequelize } = require("sequelize");

router.get('/chart', async (req, res) => {
    try {
        const result = await db.Charts.findAll()
        if (await result) {
            res.status(200).json(result)
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

        month = []
        avgKwh = []
        result.forEach((element, index, array) => {
            let month = null
            if (month != element.dataValues.createdAt){
                month.push(element.dataValues.createdAt)
            }
            console.log(element.dataValues.createdAt);
            //
            //avgKwh
        });



        if (await result) {
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
