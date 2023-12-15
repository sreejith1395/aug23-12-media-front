
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pges/Landing';
import Home from './pges/Home';
import Watchhistory from './pges/Watchhistory';
function App() {
  return (
    <>

      <Header/>

      <div className='container m-5'>

        <Routes>

             <Route path='/' element={<Landing/>}/>
             <Route path='/home' element={<Home/>}/>
             <Route path='/watchhistory' element={<Watchhistory/>}/>

         

        </Routes>


      

      </div>

       <Footer/>
     
    </>
  );
}

export default App;
