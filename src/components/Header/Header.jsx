import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {

    const navbarList = ['home', 'productos', 'gestion'];

  return (
    <div className='header'>
        <div className='header__title'>
            <img className='logo' src='./img/shopeame_icon.jpg' alt='shopeame icon'/>
            <span> Shopeame!</span>
        </div>
        <div className='header__routes'>
            <nav >
                <ul>

                    {navbarList.map((item,index) => {   
                      return ( 
                            <li key={index}>
                                
                            
                                <Link to={item.toLowerCase()}>
                                    <img src={`./img/${item}_icon.svg`} alt=''/>
                                    {item}
                                </Link>
                            </li>
                        )
                    })}
                    {/* <Link to='/'>Home</Link>
                    <Link to='productos'>Productos</Link>
                    <Link to='gestion'>Gestion</Link> */}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header