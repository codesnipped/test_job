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

module.exports = router
