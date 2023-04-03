import Blog from './component/blog';
import './App.css';
import Header from './component/header';
import './style/style.scss'
import AddBlog from './component/addBlog';


function App() {
  return (
    <div className="app">
       <Header/>
        <Blog />
        <AddBlog/>
    </div>
  );
}

export default App;
