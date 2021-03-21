const mongoose = require('mongoose')

const counter = new mongoose.Schema({
    clicked: Number
},{
    collection : 'Clicks'
})

module.exports = mongoose.model('ClickCounter', counter)