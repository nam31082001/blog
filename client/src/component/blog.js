import { useEffect, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import moment from 'moment'
import '../style/blog.scss'
import { useDispatch, useSelector } from 'react-redux'
import Comment from './comment'
const Blog = () => {
    const [check, setCheck] = useState()
    const [checkLength, setCheckLength] = useState('blog_one')

    const data = useSelector(state => state.data)
    const dispatch = useDispatch()
    
    useEffect(() => { dispatch({ type: "GET" }) }, [dispatch])
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
    const handleClickLike = (index) => {
        dispatch({ type: 'COUNT_LIKE_API', payload: index })
        
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
                                <div onClick={() => handleClickLike(item)} >
                                    <AiFillLike />({item.countLike})
                                </div>
                               <Comment item={item}/>
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