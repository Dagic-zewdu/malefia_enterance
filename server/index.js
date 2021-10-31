const express = require('express');
const app = express()
const cors = require('cors')
const { port, dburl } = require('./config');
const connect = require('./src/Db/connection/connection');
const router = require('./src/Router/router');
app.use(express.json())
connect(dburl)
app.use('/api', router)
app.listen(port, (err) => {
    if (err)
        console.log(err)
    console.log("server up and running on port-" + port)
})