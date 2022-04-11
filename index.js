const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const users = require('./routes/users')
const Mentorias = require('./routes/mentorias')



// forma de ler json
app.use(
    express.urlencoded({
        extended: true,
    }),

)

// rotas da API 
app.use(express.json({limit: '50mb'}))
app.use(cors())


app.use('/users', users)
app.use('/montoria', Mentorias)



const url = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_SENHA}@hackathon-fcamar.y71xw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => {
    console.log('connectamos ao mongoDB')
    app.listen(8080)
})
.catch((err) => console.log(err))