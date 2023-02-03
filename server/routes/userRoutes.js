const {User} = require('../models')
const router = require('express').Router()

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll(req.body)
        res.json(userData)
    }catch(err){
        res.status(400).json({msg:'Something went wrong. ', err})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const userData = await User.findOne({where:{id: req.params.id}})
        res.json(userData)
    }catch(err){
        res.status(400).json({msg:'Something went wrong. ', err})
    }
})

router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body)
        res.status(200).json({msg:'Your POST request was completed Successfully. ', userData})
    }catch(err){
        res.status(400).json({msg:'Something went wrong.', err})
    }
})

router.put('/:id', async (req, res) => {
    try{
        const userData = await User.update({...req.body},
            {where:{
                id:req.params.id
            }})
        res.status(200).json({msg:'Your information was updated successfully. ', userData})
    }catch(err){
        res.status(400).json({msg:'Something went wrong. ', err})
    }
})

module.exports = router