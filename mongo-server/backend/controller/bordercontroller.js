const asyncHandler = require('express-async-handler')
const BorderUser = require('../models/BorderUser')

const getUser = asyncHandler( async (req,res) => {
    const user = await BorderUser.find()
    res.status(200).json(user)
})


const setUser = asyncHandler(async (req,res) => {
    if(!req.body.id){
        res.status(400)
        throw new Error(req.body.id)
    }
    const user = await BorderUser.create({
        id : req.body.id,
        pw : req.body.pw,
        email : req.body.email,
    })
    res.status(200).json(user)
})

const loGin = asyncHandler(async (req,res) => {
    const userId = await BorderUser.findOne({'id': req.body.id})
    if(!userId){
        res.status(400)
        throw new Error('ID를 확인해 주세요')
    }else{
        const userPW = userId.password
        if(userPW != req.body.password){
            res.status(400)
            throw new Error('PW 를 확인해 주세요 ')
        }
    }

    res.status(200).json(userId)

})




module.exports = {
    getUser, setUser, loGin
}