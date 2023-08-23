import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import About from './pages/About'
import AboutRA from './About/AboutRA'
import AboutRS from './About/AboutRS'
import NotFound from './NotFound'



export default function Router() {
    
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop/:id' element={<Shop/>}/>

        <Route path='/about' element={<About/>}>
            <Route path='aboutRA' element={<AboutRA/>}/>
            <Route path='aboutRS' element={<AboutRS/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
