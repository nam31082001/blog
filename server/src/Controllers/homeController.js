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
}

module.exports = new homeController();