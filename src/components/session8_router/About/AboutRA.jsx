import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Navigate } from 'react-router-dom'

export default function AboutRA() {
    let isLogin = false;
  return (
    <div>
        {isLogin ? (
            <div>
                <NavBar/>
                <p>AboutRA</p>
            </div>

        ) : <Navigate to={'/mẻhkejhrkehroe'}/>}
        
    </div>
  )
}
