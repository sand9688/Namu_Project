const express = require('express')
const router = express.Router()
const {getConTent, updateContent, setConTent, deleteContent, getfind, getLen} = require('../controller/contentcontroller')

router.get('/', getConTent);
router.get('/:num', getfind)
router.post('/', setConTent);
router.put('/:num', updateContent);
router.delete('/:num', deleteContent);




module.exports = router
