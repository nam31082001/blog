const express=require('express')
const commentController=require('../Controllers/commentController')

const router=express.Router()

router.post('/add',commentController.post)
router.get('/',commentController.get)

module.exports=router