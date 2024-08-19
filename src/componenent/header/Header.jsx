import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const Header = () => {
  return (
    <header id="headerElement" className="flex">
    <div className="logo">
    <FontAwesomeIcon  
    style={{

      width:"1.5rem",
      marginRight:"0.3rem"
    }

    }
    icon={faHouse} />
      <span style={{fontWeight: 'bold'}}>AWU</span>
      <p style={{letterSpacing: '0.5px'}}>Shopping</p>
    </div>

    <nav className="Links">
      <Link style={{position: 'relative'}} className="cart" href="/cart">
      <FontAwesomeIcon   
      
    style={{

      width:"0.8rem",
 
    }

    }
    icon={faCartShopping} />
        $0.00
        <span className="products-number">2</span>
      </Link>
      <Link className="sign-in" href="/signin">
      <FontAwesomeIcon   
      
      style={{
  
        width:"0.8rem",
   
      }
  
      }
      icon={faRightToBracket} />
        Sign in</Link>
    
      <a className="register" href="/register">
      <FontAwesomeIcon   
      
      style={{
  
        width:"0.8rem",
   
      }
  
      }
      icon={faUserPlus} />
        Register</a
      >
    </nav>
  </header>
  )
}

export default Header