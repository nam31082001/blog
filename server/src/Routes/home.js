const express=require('express')
const homeController=require('../Controllers/homeController')
const router=express.Router()
router.get('/data',homeController.get)
module.exports=router