const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignUpModel')

router.post('/signup',(req,res)=>{
    const signedUpUser = new signupTemplateCopy({
        fullName: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    })

    signedUpUser.save().then((data)=>{
        res.json(data)
    }).catch((e)=>{
       console.log(e)
        res.json(e)
    })
})


module.exports = router