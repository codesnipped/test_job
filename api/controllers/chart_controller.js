const express = require('express')
const router = express.Router()
const db = require('../models')
const { Op, Sequelize, FLOAT } = require("sequelize");
const date = require('date-and-time');

router.get('/chart', async (req, res) => {
    try {

        const result = await db.Charts.findAll({
            attributes: [
                'createdAt',
                [Sequelize.fn('MONTH', Sequelize.col('created_at')), 'month'],
                [Sequelize.fn('YEAR', Sequelize.col('created_at')), 'year'],
                [Sequelize.fn('AVG', Sequelize.col('kwh')), 'average_kwh'],
                [Sequelize.fn('AVG', Sequelize.col('temp')), 'average_temp'],
            ],
            group: ['year', 'month'],
        })

        const temp_hight = await db.Charts.findAll({
            attributes: [
                [Sequelize.fn('MONTH', Sequelize.col('created_at')), 'month'],
                [Sequelize.fn('YEAR', Sequelize.col('created_at')), 'year'],
                [Sequelize.fn('AVG', Sequelize.col('temp')), 'average_temp_hight'],
            ],
            group: ['year', 'month'],
            where: {
                temp: {
                    [Op.between]: [40, 100]
                }
            }
        })

        const temp_low = await db.Charts.findAll({
            attributes: [
                [Sequelize.fn('MONTH', Sequelize.col('created_at')), 'month'],
                [Sequelize.fn('YEAR', Sequelize.col('created_at')), 'year'],
                [Sequelize.fn('AVG', Sequelize.col('temp')), 'average_temp_low'],
            ],
            group: ['year', 'month'],
            where: {
                temp: {
                    [Op.between]: [0, 39]
                }
            }
        })

        /* จัดระเบียบ */
        month = []
        avg_kwh = []
        avg_temp = []
        avg_temp_hight = []
        avg_temp_low = []
        result.forEach((element, index, array) => {
            month.push(date.format(element.createdAt, 'MMM YYYY'))
            avg_kwh.push(Number(element.dataValues.average_kwh.toFixed(2)))
            avg_temp.push(Number(element.dataValues.average_temp.toFixed(2)))
        });
        temp_hight.forEach((element, index, array) => {
            avg_temp_hight.push(Number(element.dataValues.average_temp_hight.toFixed(2)))
        });
        temp_low.forEach(async (element, index, array) => {
            avg_temp_low.push(Number(element.dataValues.average_temp_low.toFixed(2)))
        });
        /* จัดระเบียบ end*/


        if (await result) {
            //res.status(200).json({ main: result, temp_hight: temp_hight, temp_low: temp_low })
            res.status(200).json({
                month: month,
                avg_kwh: avg_kwh,
                avg_temp: avg_temp,
                avg_temp_hight: avg_temp_hight,
                avg_temp_low: avg_temp_low
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/chart', async (req, res) => {
    try {
        const result = await db.Charts.findAll({
            attributes: [
                'createdAt',
                [Sequelize.fn('MONTH', Sequelize.col('created_at')), 'month'],
                [Sequelize.fn('YEAR', Sequelize.col('created_at')), 'year'],
                [Sequelize.fn('AVG', Sequelize.col('kwh')), 'average_kwh'],
                [Sequelize.fn('AVG', Sequelize.col('temp')), 'average_temp'],
            ],
            group: ['year', 'month'],
            where: {
                created_at: {
                    [Op.between]: [req.body.start, req.body.end]
                }
            }
        })

        const temp_hight = await db.Charts.findAll({
            attributes: [
                [Sequelize.fn('MONTH', Sequelize.col('created_at')), 'month'],
                [Sequelize.fn('YEAR', Sequelize.col('created_at')), 'year'],
                [Sequelize.fn('AVG', Sequelize.col('temp')), 'average_temp_hight'],
            ],
            group: ['year', 'month'],
            where: {
                temp: {
                    [Op.between]: [40, 100]
                },
                created_at: {
                    [Op.between]: [req.body.start, req.body.end]
                }
            }
        })

        const temp_low = await db.Charts.findAll({
            attributes: [
                [Sequelize.fn('MONTH', Sequelize.col('created_at')), 'month'],
                [Sequelize.fn('YEAR', Sequelize.col('created_at')), 'year'],
                [Sequelize.fn('AVG', Sequelize.col('temp')), 'average_temp_low'],
            ],
            group: ['year', 'month'],
            where: {
                temp: {
                    [Op.between]: [0, 39]
                },
                created_at: {
                    [Op.between]: [req.body.start, req.body.end]
                }
            }
        })

        /* จัดระเบียบ */
        month = []
        avg_kwh = []
        avg_temp = []
        avg_temp_hight = []
        avg_temp_low = []
        result.forEach((element, index, array) => {
            month.push(date.format(element.createdAt, 'MMM YYYY'))
            avg_kwh.push(Number(element.dataValues.average_kwh.toFixed(2)))
            avg_temp.push(Number(element.dataValues.average_temp.toFixed(2)))
        });
        temp_hight.forEach((element, index, array) => {
            avg_temp_hight.push(Number(element.dataValues.average_temp_hight.toFixed(2)))
        });
        temp_low.forEach(async (element, index, array) => {
            avg_temp_low.push(Number(element.dataValues.average_temp_low.toFixed(2)))
        });
        /* จัดระเบียบ end*/

        if (await result) {
            //res.status(200).json({ main: result, temp_hight: temp_hight, temp_low: temp_low })
            res.status(200).json({
                month: month,
                avg_kwh: avg_kwh,
                avg_temp: avg_temp,
                avg_temp_hight: avg_temp_hight,
                avg_temp_low: avg_temp_low
            })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/test', async (req, res) => {
    try {

        const result = await db.Charts.findAll({
            attributes: [
                'createdAt',
                [Sequelize.fn('MONTH', Sequelize.col('created_at')), 'month'],
                [Sequelize.fn('YEAR', Sequelize.col('created_at')), 'year'],
                [Sequelize.fn('AVG', Sequelize.col('kwh')), 'average_kwh'],
                [Sequelize.fn('AVG', Sequelize.col('temp')), 'average_temp'],
            ],
            group: ['year', 'month'],
            /* where: {
                createdAt: {
                    [Op.gte]: new Date('2022-01-01'),
                    [Op.lt]: new Date('2023-01-01')
                }
            } */
        })

        const temp_hight = await db.Charts.findAll({
            attributes: [
                [Sequelize.fn('MONTH', Sequelize.col('created_at')), 'month'],
                [Sequelize.fn('YEAR', Sequelize.col('created_at')), 'year'],
                [Sequelize.fn('AVG', Sequelize.col('temp')), 'average_temp_hight'],
            ],
            group: ['year', 'month'],
            where: {
                temp: {
                    [Op.between]: [70, 1000]
                }
                /* createdAt: {
                    [Op.gte]: new Date('2022-01-01'),
                    [Op.lt]: new Date('2023-01-01')
                } */
            }
        })

        const temp_low = await db.Charts.findAll({
            attributes: [
                [Sequelize.fn('MONTH', Sequelize.col('created_at')), 'month'],
                [Sequelize.fn('YEAR', Sequelize.col('created_at')), 'year'],
                [Sequelize.fn('AVG', Sequelize.col('temp')), 'average_temp_low'],
            ],
            group: ['year', 'month'],
            where: {
                temp: {
                    [Op.between]: [0, 69]
                }
                /* createdAt: {
                    [Op.gte]: new Date('2022-01-01'),
                    [Op.lt]: new Date('2023-01-01')
                } */
            }
        })

        /* จัดระเบียบ */
        month = []
        avg_kwh = []
        avg_temp = []
        avg_temp_hight = []
        avg_temp_low = []
        result.forEach((element, index, array) => {
            month.push(date.format(element.createdAt, 'MMM YYYY'))
            avg_kwh.push(Number(element.dataValues.average_kwh.toFixed(2)))
            avg_temp.push(Number(element.dataValues.average_temp.toFixed(2)))
        });
        temp_hight.forEach((element, index, array) => {
            avg_temp_hight.push(Number(element.dataValues.average_temp_hight.toFixed(2)))
        });
        temp_low.forEach(async (element, index, array) => {
            avg_temp_low.push(Number(element.dataValues.average_temp_low.toFixed(2)))
        });
        /* จัดระเบียบ end*/


        if (await result) {
            //res.status(200).json({ main: result, temp_hight: temp_hight, temp_low: temp_low })
            res.status(200).json({
                month: month,
                avg_kwh: avg_kwh,
                avg_temp: avg_temp,
                avg_temp_hight: avg_temp_hight,
                avg_temp_low: avg_temp_low
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/mockup', async (req, res) => {
    try {
        const now = new Date();
        month_befor = date.addDays(now, -365);

        data = []
        created_at = ''
        t = 0
        for (let i = 0; i < 8640; i++) {
            let temp
            let kwh
            if((t/2 != 1)){
                kwh = Number((Math.random() * 40).toFixed(2))
                temp = (Number(kwh) * 2).toFixed(2)
            }else{
                kwh = Number((Math.random() * 70).toFixed(2))
                temp = (Number(kwh) / 2).toFixed(2)
            }
            t = t+1

            month_cal = date.addHours(month_befor, +1)
            created_at = date.format(month_cal, 'YYYY-MM-DD HH:mm:s');
            month_befor = date.addHours(month_befor, +1)
            
            data.push({ kwh: kwh, temp: temp, createdAt: created_at })
        }

        await db.Charts.bulkCreate(data)

        /* const result_get = await db.Charts.findAll({
            attributes: ['id','created_at'],
        })
        result_get.forEach((element, index, array) => {
            month_cal = date.addHours(month_befor, +1)
            created_at = date.format(month_cal, 'YYYY-MM-DD HH:mm:s');
            month_befor = date.addHours(month_befor, +1)

            data.push({ kwh: kwh, temp: temp, created_at: created_at })
        }); */

        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
