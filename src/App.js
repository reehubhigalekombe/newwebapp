import React from 'react';
import "./App.css"
import Home from "./pages/Home";
import Sneakers from "./pages/Sneakers";
import Sport from "./pages/Sport";
import Newsletter from "./pages/Newsletter";
import Official from "./pages/Official";
import Men from "./pages/Men";
import Slips from "./pages/Slips"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Puma from './pages/Puma';
import Gifts from "./pages/Gifts";
import Adidas from "./pages/Adidas";
import Louis from './pages/Louis';
import Clarks from './pages/Clarks';
import Skechers from './pages/Skechers';
import {
   BrowserRouter as Router,
  Routes,
  Route}  from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import Crocs from './pages/Crocs';
import Deckers from './pages/Deckers';
import FloatingButton from './pages/FlaotingButton';
import ShoesInformation from './components/ShoesInformation';
function App() {

  return (
    <div className='App'> 
      <Router>
    <Navbar />
    <Routes>
        <Route path="/home" exact element={<Home/>} />
        <Route path="/men"  exact  element={<Men/>} />
        <Route path="/women" exact  element={<Women/>} />
        <Route path="/kids" exact  element={<Kids/>} />
        <Route path="/sport" exact  element={<Sport/>} />
        <Route path="/official" exact  element={<Official/>} />
        <Route path="/sneakers" exact  element={<Sneakers/>} />
        <Route path="/slips" exact  element={<Slips/>} />
        <Route path="/newsletter" exact  element={<Newsletter/>}/>
        <Route path="/gifts" exact  element={<Gifts/>} />
        <Route path="/puma" exact  element={<Puma/>} />
        <Route path="/adidas" exact  element={<Adidas/>} />
        <Route path="/crocs" exact  element={<Crocs/>} />
        <Route path="/louis" exact  element={<Louis/>} />
        <Route path="/clarks" exact  element={<Clarks/>} />
        <Route path="/deckers" exact  element={<Deckers/>} />
        <Route path="/skechers" exact  element={<Skechers/>} />
        <Route path="/shoe.id" exact  element={<ShoesInformation/>} />
        <Route path="/search" exact  element={<SearchResults/>} />
        
      </Routes>
      <FloatingButton/>
      <Footer/>
    </Router>
    </div>
  )
}

export default App

