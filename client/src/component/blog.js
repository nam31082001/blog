import { useEffect, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import moment from 'moment'
import '../style/blog.scss'
import { useDispatch, useSelector } from 'react-redux'
const Blog = () => {
    const [check, setCheck] = useState()
    const [checkLength,setCheckLength]=useState('blog_one')
    const [idLike,setIdLike]=useState()



    const data = useSelector(state => state.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: "GET" })
    }, [dispatch])

    useEffect(() => {
        data.length === 1 ? setCheckLength('blog_one') : setCheckLength('blog')
    }, [data])
    const handleClick = (index) => {
        check === '' ? setCheck(index) : setCheck('')
    }
    const handleClickDelete = index => {
        dispatch({ type: "DELETE_DB", payload: index })
        dispatch({ type: "DELETE_CLIENT", payload: index })
    }
    return (
        <div className='blog_all'>
            {
                data.map(item => {
                    return (
                        <div className={checkLength} >
                            <div className='blog_icon'>
                                <i>N</i>
                                <div onClick={() => handleClick(item._id)}>
                                    <i>.</i>
                                    <i>.</i>
                                    <i>.</i>
                                    {item._id === check ?
                                        <>
                                            <div className='function'>
                                                <div onClick={() => handleClickDelete(item._id)}>Xóa</div>
                                                <div>Sửa</div>
                                                <div>Thêm vào thùng giác</div>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    }
                                </div>

                            </div>
                            <div className='blog_time'>
                                {moment(item.createdAt).format('HH:MM-MM/DD/YYYY')}

                            </div>
                            <div className='blog_title'>
                                {item.body}
                            </div>
                            <div className='blog_img'>
                                {item.img.map(element => {
                                    return (
                                        <>
                                            <img src={element.link} />
                                        </>
                                    )
                                })}

                            </div>
                            <hr />
                            <div className='blog_like'>
                                <div onClick={()=>setIdLike(item._id)} >
                                    <AiFillLike/>({item.countLike})
                                </div>
                                <div>
                                    Bình Luận(0)
                                </div>
                                <div>
                                    Chia sẻ(0)
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}
export default Blog