const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controllers/user.controllers');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min : 3}).withMessage('Firstname must be atleast 3 character long'),
    body('password').isLength({min: 6}).withMessage('Password must be atlest 6 character long')
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password Invalid')
],
    userController.loginUser
)



module.exports = router;