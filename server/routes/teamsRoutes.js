const {Teams} = require('../models')
const router = require('express').Router()

router.get('/', async (req, res) => {
    try{
        const teamsData = await Teams.findAll(req.body)
        res.json(teamsData)
    }catch(err){
        res.status(400).json({msg:'Something went wrong. ', err})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const teamsData = await Teams.findOne({where:{id: req.params.id}})
        res.json(teamsData)
    }catch(err){
        res.status(400).json({msg:'Something went wrong. ', err})
    }
})

router.post('/', async (req, res) => {
    try{
        const teamsData = await Teams.create(req.body)
        res.status(200).json({msg:'Your POST request was completed Successfully. ', teamsData})
    }catch(err){
        res.status(400).json({msg:'Something went wrong.', err})
    }
})

router.put('/:id', async (req, res) => {
    try{
        const teamsData = await Teams.update({...req.body},
            {where:{
                id:req.params.id
            }})
        res.status(200).json({msg:'Your information was updated successfully. ', teamsData})
    }catch(err){
        res.status(400).json({msg:'Something went wrong. ', err})
    }
})

module.exports = router