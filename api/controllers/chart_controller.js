const express = require('express')
const router = express.Router()
const db = require('../models')
const { Op, Sequelize } = require("sequelize");
const date = require('date-and-time');

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

        //month = []
        //month_check = null
        data_befor = []
        result.forEach(async (element, index, array) => {

            // เก็บเดือน
/*             if (String(month_check) != String(date.format(element.dataValues.createdAt, 'YYYY/MM'))){
                month_check = String(date.format(element.dataValues.createdAt, 'YYYY/MM'))
                month.push(date.format(element.dataValues.createdAt, 'MMM YYYY'))
            } */

            data_befor.push({ 
                month: date.format(element.dataValues.createdAt, 'MMM YYYY'), 
                kwh_data: element.dataValues.kwh,
                temp_data: element.dataValues.temp
            })

        });

        //console.log(data_befor);

       /*  console.log(month);
        console.log(data_befor); */

        if (await result) {
            res.status(200).json(data_befor)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
