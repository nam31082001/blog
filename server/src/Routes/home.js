const express=require('express')
const homeController=require('../Controllers/homeController')
const router=express.Router()
router.delete('/delete/:id',homeController.delete)
router.post('/add',homeController.post)
router.get('/',homeController.get)
module.exports=router