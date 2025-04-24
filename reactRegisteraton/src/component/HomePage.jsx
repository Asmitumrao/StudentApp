// import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link,Outlet } from 'react-router-dom'

const homePage = () => {
  return (
    <div>
        Welcome to my Project
        {/* {
            setTimeout(() => {
                navigate('/login');
            }, 3000)
        } */}

        <nav>
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </ul>
            
        </nav>
        <Outlet/>
    </div>
  )
}

export default homePage