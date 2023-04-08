import moment from 'moment'
import '../style/detail.scss'
import { AiOutlineSend } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import DetailComment from './detailComment'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

const Detail = ({ detail }) => {
    const [dataInput, setDataInput] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: "GET_COMMENT" })
    }, [dispatch])

    const handleOnChange = (e) => {
        setDataInput(e.target.value)
    }

    const handleClickComment = () => {
        setDataInput('')
        const data = {
            id: detail._id,
            dataInput: dataInput
        }
        dispatch(
            {
                type: "ADD_COMMENT",
                payload: data
            }
        )
    }
    return (
        <div className="detail">
            <div>
                <div className='section'>
                    <div className='detail_name'>
                        <div>
                            N
                        </div>
                        <div onClick={() => dispatch({ type: 'CLOSE_DETAIL' })}>
                            <GrClose />
                        </div>

                    </div>
                    <div className='detail_createAt'>
                        {moment(detail.createdAt).format('HH:MM-MM/DD/YYYY')}
                    </div>
                    <div className='detail_body'>
                        {detail.body}
                    </div>
                    <br />
                    <div className='detail_img'>
                        {detail.img.map(element => {
                            return (
                                <>
                                    <img src={element.link} />
                                </>
                            )
                        })}
                    </div>
                    <hr />
                    <div className='like_share'>
                        <p>Like({detail.countLike})</p>
                        <p>Chia sẻ</p>
                    </div>
                    <hr />
                    <DetailComment detail={detail}/>
                    <div className='detail_input'>
                        <div>
                            <input type="text" placeholder='Bạn có ý kiến gì không ...' onChange={(e) => handleOnChange(e)} />
                            <div onClick={() => handleClickComment()}>
                                <AiOutlineSend />
                            </div>
                        </div>
                        <div className='icon'></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Detail