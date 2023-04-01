const Blog=require('../Models/blog')

class homeController{
get(req,res){
    res.send('Hello')
}
}

module.exports = new homeController();