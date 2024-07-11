import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import {
  Main,
  Section1,
  Test1,
  Section3,
  FreeContent,
  NotFound } from './pages'
import GNB from './components/GNB';

function App() {
  const [device, setDevice] = useState()

  // f. 반응형 - 모바일, 태블릿, PC
  const handleResize = () => {
      const windowWidth = document.documentElement.clientWidth
      // i. 중단점 설정값 768px. i. 중단점 설정값 1280px.  
      if(windowWidth < 768){
          setDevice('mobile')
      }else if(windowWidth >= 768 && windowWidth < 1280){
          setDevice('tablet')
      }else if(windowWidth >= 1280){
          setDevice('pc')
      }
  }

  useEffect(() => {
    const windowWidth = document.documentElement.clientWidth
    if(windowWidth < 768){
        setDevice('mobile')
    }else if(windowWidth >= 768 && windowWidth < 1280){
        setDevice('tablet')
    }else if(windowWidth >= 1280){
        setDevice('pc')
    }

    window.addEventListener('resize', handleResize)
}, [])

  return (
    <div className="App">
      <header>
      {/* 1. 헤더 제작 */}
        <GNB device={device}/>
      </header>
      {/* 2. 메인 컨텐츠 제작 */}
      <Routes>
        {/* i. main */}
        <Route exact path='/' element={<Main/>}/>
        {/* j. section1 */}
        <Route exact path='/section1' element={<Section1/>}/>
        {/* k. test1 */}
        <Route exact path='/test1' element={<Test1 device={device}/>}/>
        {/* l. section3 */}
        <Route exact path='/section3' element={<Section3 device={device}/>}/>
        <Route exact path='/freeContent' element={<FreeContent/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
