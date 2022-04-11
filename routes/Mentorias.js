const router = require('express').Router()

const Mentorias = require('../models/Mentorias')
const Users = require('../models/Users')



router.post('/', async (req, res) =>{
    try{
        const aulas = new Mentorias(req.body)
        await aulas.save();
        const id = aulas._id
        const mentorias = await Users.mentorias.findById('624e3951c4fb25ee0e17c30e')
        await mentorias.save();

        res.status(200).json({message: 'usuario autenticado!'})
    } catch (error){
        res.status(500).json({message: error})
    }
} )

router.post('/:id/mentoria', async (req, res) =>{
    const id = req.params.id
    try{
        const people = await Mentorias.findOne({name: id})

        res.status(200).json(people)
    } catch (error){
        res.status(500).json({message: error})
    }
})

router.get('/', async function (req, res) {
   
   if(Object.keys(req.query).length > 0) { // Se houver query string
      busca(req, res)
   }
   else { // sem query string
      try {
         // find(), sem parâmetros, retorna todos
         // O parâmetro de populate() é o *ATRIBUTO* relacionado
         const lista = await Mentorias.find().populate('mentor mentorado')
         res.send(lista) // HTTP 200 implícito
      }
      catch (erro) {
         console.log(erro)
         res.status(500).send(erro)
      }
   }

})

async function busca(req, res) {
    let criterio = {}
   
    const atrib = Object.keys(req.query)[0]
    const valor = Object.values(req.query)[0]
    
    // $options: 'i' => case insensitive
    criterio[atrib] = { $regex: valor, $options: 'i'}
 
    try {
       const lista = await Mentorias.find(criterio)
       res.send(lista)
    }
    catch(erro) {
       console.log(erro)
       res.status(500).send(erro)
    }
 }

 module.exports = router