const asyncHandler = require('express-async-handler')
const Content = require('../models/Content')

const getConTent = asyncHandler( async (req,res) => {
    const detail = await Content.find()
    res.status(200).json(detail)
})

const getLen = asyncHandler( async (req,res) => {
    const detail = await Content.find()
    res.status(200).json(detail.length)
})


const setConTent = asyncHandler(async (req,res) => {
    if(!req.body.twitter){
        res.status(400)
        throw new Error(req.body.twitter)
    }
    const detail = await Content.create({
        num : req.body.num,
        title : req.body.title,
        twitter : req.body.twitter,
        content : req.body.content,
        visiter : req.body.visiter,
        img : req.body.img,
    })
    res.status(200).json(detail)
})

const getfind = asyncHandler( async (req,res) => {
    const detail = await Content.find({'num': req.params.num})
    if(detail.length == 0 ){
        res.status(400)
        throw new Error('정보를 확인 해주세요')
    }
    res.status(200).json(detail)
})


const updateContent = asyncHandler(async (req,res) => {
    const detail = await Content.find({'num' : req.params.num})

    if(!detail) {
        res.status(400)
        throw new Error('detail not found')
    }

    const updateddetail = await Content.findOneAndUpdate({'num': req.params.num}, req.body, {
        new: true
    })


    res.status(200).json(updateddetail)
})

const deleteContent = asyncHandler(async (req,res) => {
    const detail = await Content.findOne({'num' : req.params.num})

    if(!detail) {
        res.status(400)
        throw new Error('detail not found')
    }

    await detail.remove();

    res.status(200).json({num : req.params.num})
})




module.exports = {
    getConTent, updateContent, setConTent, deleteContent, getfind, getLen
}