const Blog = require('../Models/blog')
class homeController {
    get(req, res) {
        Blog.find({})
            .then(item => { res.json(item) })
            .catch(err => res.status(500).json({ error: err }))
    }
}

module.exports = new homeController();