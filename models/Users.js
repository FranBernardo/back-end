const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    nome: {
       type: String,
       
    },
    email: {
        type: String,
        
    },
    senha: {
        type: String,
        
    },
    contato: {
        type: String,
    },
    mentor: {
        type: Boolean,
        
    },
    data: {
       type: Date
    },
    habilidades:[
    ]
 })

 module.exports = mongoose.model('Users', esquema, 'users')