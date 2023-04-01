const express=require('express')
const homeController=require('../Controllers/homeController')
const router=express.Router()
router.get('/',homeController.get)
module.exports=router