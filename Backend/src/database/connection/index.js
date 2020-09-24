const DBconfig = require('../../configs/database')
const mongoose = require('mongoose')

mongoose.connect(DBconfig.uri, DBconfig.configOptions, err => {
    if(err) throw new Error(`Error on Connect to MongoDB -> ${err}`)
})
const connection = mongoose.connection

module.exports = connection
