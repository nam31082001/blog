const homeRouter=require('./home')
const commentRouter=require('./comment')

function route(app){
    app.use('/',homeRouter)
    app.use('/comment',commentRouter)
}
module.exports=route