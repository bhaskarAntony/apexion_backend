const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    service:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const contactDatabase = mongoose.model('contactDatabseApexion', contactSchema);
module.exports = contactDatabase;