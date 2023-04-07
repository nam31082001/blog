import { useDispatch } from "react-redux"


const Comment = ({ item }) => {
    const dispatch = useDispatch()
    const handleClickDetail = () => {
        dispatch({ type: 'CHECK_DETAIL', payload: item })
    }
    return (
        <div onClick={() => handleClickDetail()} >
            Bình luận
        </div>
    )
}
export default Comment