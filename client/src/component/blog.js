import img from '../img/z2735607355474_b681e9e29621760cb9d85af902856793.jpg'
import '../style/blog.scss'
const Blog = () => {
    return (
        <div className='blog_all'>
            <div className="blog" >
                <div className='blog_icon'>
                    <i>N</i>
                    <div>
                        <i>.</i>
                        <i>.</i>
                        <i>.</i>
                    </div>
                </div>
                <div className='blog_time'>
                    4/2/2023
                </div>
                <div className='blog_title'>
                    Hoa nhà tôi đó
                </div>
                <div className='blog_img'>
                    <img src={img} />
                </div>
                <hr />
                <div className='blog_like'>
                    <div>
                        Like
                    </div>
                    <div>
                        Bình Luận
                    </div>
                    <div>
                        Chia sẻ
                    </div>
                </div>
            </div>
            <div className="blog" >
                <div className='blog_icon'>
                    <i>N</i>
                    <div>
                        <i>.</i>
                        <i>.</i>
                        <i>.</i>
                    </div>
                </div>
                <div className='blog_time'>
                    4/2/2023
                </div>
                <div className='blog_title'>
                    Hoa nhà tôi đó
                </div>
                <div className='blog_img'>
                    <img src={img} />
                </div>
                <hr />
                <div className='blog_like'>
                    <div>
                        Like
                    </div>
                    <div>
                        Bình Luận
                    </div>
                    <div>
                        Chia sẻ
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog