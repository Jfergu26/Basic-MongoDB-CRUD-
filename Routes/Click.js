const express = require('express')
const ClickCounter = require('../Models/ClickModel')
let count = require('../server')

const Router = express.Router()



Router.get('/', (req,res) => {
    const query =  ClickCounter.findById('604518a929ed220a5b4e69ae')
        query
        .exec(function(err,clicks){
            if(err){
                res.send('error has occured');
            }
            else{
                // the value is saved 
                
                
                clicks.clicked += 1;
                clicks.save();
                console.log(clicks.clicked)
                res.send(`Clicked: ${clicks.clicked}`)

                
            }
        })

})
module.exports = Router;