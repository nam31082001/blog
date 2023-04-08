const Comment=require('../Models/coment')
class commentController{
    get(req, res) {
        Comment.find({})
            .then(item => { res.json(item) })
            .catch(err => res.status(500).json({ error: err }))
    }
    post (req,res){
        const {id,commentClient,feedback,countLike}=req.body
        const newItem=new Comment(
            {
                id:id,
                commentClient:commentClient,
                feedback:feedback,
                countLike:countLike
            }
        )
        newItem.save()
        .then(item => res.json(item))
            .catch(err => { res.status(500).json({ error: err }) })
    }
}
module.exports=new commentController()