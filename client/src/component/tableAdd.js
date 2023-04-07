import { useState } from "react"
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from "react-redux";
import CheckClose from "./checkClose";
const TableAdd = ({ clickClose }) => {
    const check = clickClose
    const [img, setImg] = useState([])
    const [checkOut, setCheckOut] = useState(false)
    const [data, setData] = useState({ title: "", body: "" });
    const dispatch = useDispatch();



    const handleChangeFile = (e) => {
        const link = e.target.files[0]
        link.preview = URL.createObjectURL(link)
        const id = Math.floor(Math.random() * 100);
        const data = {
            id: id,
            link: link.preview
        }
        setImg([...img, data])
    }
    const setValueForData = (key, value) => {
        const newVal = { ...data, [key]: value };
        setData(newVal);
    };
    const handleClickClose = () => {
        setCheckOut(!checkOut)
    }
    const handleClickDeleteImg = (index) => {
        const copy = img.filter(item => item.id !== index)
        setImg(copy)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataCopy = { ...data, img, countLike: 0 }
        dispatch({ type: "ADD_NEWS", payload: dataCopy });
        clickClose()
    }
    return (
        <div className='table_add'>
            <div className="header">
                <h2> Thêm bài viết</h2>
                <i onClick={() => handleClickClose()}><GrClose /></i>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label for="title">Title</label><br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Your name.."
                    onChange={e => setValueForData("title", e.target.value)}
                />
                <br />
                <label for="body">Body</label>
                <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="body"
                    name="body"
                    placeholder="Your last name.."
                    onChange={e => setValueForData("body", e.target.value)}

                />
                <input type='file' onChange={(e) => handleChangeFile(e)} />
                <br />
                <br />

                <div className="div_img">
                    {
                        img.map(item => {
                            return (
                                <div key={item.id}>
                                    <div onClick={() => handleClickDeleteImg(item.id)}>X</div>
                                    <img src={item.link} />
                                </div>
                            )
                        })
                    }
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
            {checkOut && <CheckClose check={check} handleClickClose={handleClickClose} />}

        </div>
    )
}
export default TableAdd