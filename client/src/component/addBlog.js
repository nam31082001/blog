import { useState } from 'react'
import '../style/addBlog.scss'
import TableAdd from './tableAdd'
const AddBlog = () => {
    const [check,setCheck]=useState(false)
    const handleClickAdd=()=>{
        setCheck(true)
    }
    const clickClose=()=>{
        setCheck(false)
    }
    return (
       <>
        <div className="add_blog" onClick={()=>handleClickAdd()}>
            +
        </div>
        {check&& <TableAdd clickClose={clickClose}/>}
       
       </>
    )
}
export default AddBlog