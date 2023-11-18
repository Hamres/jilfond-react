import React from 'react';
import './App.module.scss';
import Home from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import UserProfile from "./components/pages/userProfile/UserProfile";
import HomeClear from "./components/pages/homeClear/HomeClear";
import Header from "./components/header/Header";
import style from './App.module.scss'

function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <div className={style.main}>
          <Home/>
          <Routes>
            <Route path='/' element={<HomeClear/>}/>
            <Route path='/user/:id' element={<UserProfile/>} />
          </Routes>
        </div>
      </div>
    </>

  );
}

export default App;
