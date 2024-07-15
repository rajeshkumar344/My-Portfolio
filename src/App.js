import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Routes,Route} from "react-router-dom"
import Homepage from './components/Homepage';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
     <Header/>

     <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
    
     </Routes>
    </div>
  );
}

export default App;
