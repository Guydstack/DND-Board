const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_schema = new Schema({

    name:{
        type:String,
        required: true,
        unique: true
    },

    email:{
        type:String,
        unique: true,
        lowercase: true,
        required: true
    },

    message:{
        type:String,
        required: true
    },
})


module.exports = mongoose.model('contact', user_schema)