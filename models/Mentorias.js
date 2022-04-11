const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    mentorado: {
        type: mongoose.ObjectId,
        ref: 'Users',
    },
    data: {
       type: Date
    },
    mentor: {
        type: mongoose.ObjectId,
        ref: 'Users',
    }
 })
 mongoose.set("strictPopulate", false);
 module.exports = mongoose.model('Mentorias', esquema, 'mentorias')