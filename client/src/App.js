import Blog from './component/blog';
import './App.css';
import Header from './component/header';
import './style/style.scss'
import AddBlog from './component/addBlog';
import Detail from './component/detail';
import { useSelector } from 'react-redux';


function App() {
  const detail=useSelector(state=>state.detail)
  const checkDetail=useSelector(state=>state.checkDetail)
  
  return (
    <div className="app">
       <Header/>
        <Blog />
        <AddBlog/>
      {checkDetail&&<Detail detail={detail}/>}
    </div>
  );
}

export default App;
