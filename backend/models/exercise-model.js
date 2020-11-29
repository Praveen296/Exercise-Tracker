const mongoose = require('mongoose');
const {userSchema} = require('../models/user-model');


const exerciseSchema = new mongoose.Schema({
    user: {
        type:userSchema,
        required:true,
    },
    description : {
        type:String,
        required:true,
    },
    duration : {
        type:Number,
        required:true,
    },
    date : {
        type:Date,
        required:true,
        unique:true
    }
},
{
    timestamps : true
});

const Exercise = mongoose.model('Exercise',exerciseSchema);

exports.Exercise = Exercise;
