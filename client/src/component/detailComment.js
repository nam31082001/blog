import { AiOutlineMore } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const DetailComment = ({detail}) => {
    const commentData = useSelector(state => state.comment)
    return (
        <>
            <div className='detail_comment'>
                {commentData.map(item => {
                    return (
                        <span>
                            <div className='detail_comment_name'>
                                <div >K</div>
                            </div>
                            <div className='detail_comment_title'>
                                <div>
                                    <p>{item.commentClient}

                                        <span>
                                            <AiOutlineMore />
                                        </span>
                                    </p>
                                    <span>
                                        <span>Thích</span>
                                        <span>Phản hồi</span>
                                        <span> 2s</span>
                                    </span>
                                </div>
                                {/* <div>
                        <div>
                            <div>
                                K
                            </div>
                        </div>
                        <div>
                            <div>
                                Tôi chụp ở trog nam
                                <span>
                                    <AiOutlineMore />
                                </span>
                            </div>
                        </div>
                    </div> */}

                            </div>
                        </span>
                    )
                })}


            </div>
        </>
    )
}
export default DetailComment