const express=require('express')
const homeController=require('../Controllers/homeController')
const router=express.Router()
router.put('/put/:id',homeController.put)
router.delete('/delete/:id',homeController.delete)
router.post('/add',homeController.post)
router.get('/',homeController.get)
module.exports=router