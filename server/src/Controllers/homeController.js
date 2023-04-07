const Blog = require('../Models/blog')
class homeController {
    get(req, res) {
        Blog.find({})
            .then(item => { res.json(item) })
            .catch(err => res.status(500).json({ error: err }))
    }
    post(req, res) {
        const { title, body, img, countLike } = req.body
        const newItem = new Blog({ title: title, body: body, img: img, countLike: countLike })
        newItem.save()
            .then(item => res.json(item))
            .catch(err => { res.status(500).json({ error: err }) })
    }
    delete(req,res){
        Blog.deleteOne({_id:req.params.id})
        .then(() => res.send('Xóa thành công'))
        .catch(err => res.status(500).json({ error: err }))
    }
    put(req,res){
        const data=req.body
        const {id}=req.params
        Blog.findByIdAndUpdate(id,data,{new:true})
        .then(item=>{
            if(!item){
                return res.status(404).send('item not found')
            }
            res.send(item)
        })
        .catch(error=>{
            res.status(500).send(error.message)
        })
    }
}

module.exports = new homeController();