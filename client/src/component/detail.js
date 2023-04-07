import moment from 'moment'
import '../style/detail.scss'
import { AiOutlineSend } from 'react-icons/ai'

const Detail = ({ detail }) => {
    return (
        <div className="detail">
            <div>
                <div>
                    <div className='detail_name'>
                        N
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
                    <div className='detail_input'>
                        <div>
                            <input /><div>
                                <AiOutlineSend />
                            </div>
                        </div>
                    </div>
                    <div className='detail_comment'>
                              
                              <div className='detail_comment_name'>
                                     
                              </div>
                              <div className='detail_comment_title'>

                              </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail