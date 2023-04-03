const CheckClose = ({check,handleClickClose}) => {
    return (
        <div className="check_close" >
            
                <h4>Bạn có muốn tiếp tục không</h4>
                <div>
                    <button onClick={()=>check()}>Thoát</button>
                    <button onClick={()=>handleClickClose()}>Tiếp Tục</button>
                </div>
            
        </div>
    )
}
export default CheckClose