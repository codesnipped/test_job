const https = require('https');
var http = require('http');
const fs = require('fs');
const express = require('express')
const cors = require('cors')
const app = express()
require("dotenv").config();

const options = {
    key: fs.readFileSync('cert/privkey.pem'),
    cert: fs.readFileSync('cert/cert.pem'),
    csr: fs.readFileSync('cert/fullchain.pem'),
};

const corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost', 'https://test.codesnipped.com'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// middle ware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./controllers/chart_controller'))

//kr_api.SentApi2()

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

const PORT = process.env.PORT || 15000
httpsServer.listen(PORT, () => {
    const env = `${process.env.NODE_ENV || 'test'}`
    console.log(`App listening on port ${PORT}`)
    console.log(`App listening on env ${env}`)
    console.log(`Press Ctrl+C to quit.`)
})
