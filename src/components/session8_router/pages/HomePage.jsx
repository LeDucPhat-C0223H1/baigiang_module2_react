import React from 'react'
import NavBar from '../NavBar/NavBar'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate();
  return (
    <div>
        <NavBar/>
        <p>đay là home page</p>
        <button style={{backgroundColor:'blue', color:'white'}} onClick={() => navigate('/shop')}>Chuyển qua shop</button>
    </div>
  )
}
