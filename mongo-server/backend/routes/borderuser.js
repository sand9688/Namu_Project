const express = require('express')
const router = express.Router()
const {getUser, setUser, loGin} = require('../controller/bordercontroller')

router.get('/', getUser);
router.post('/', setUser);
router.post('/login', loGin)




module.exports = router
