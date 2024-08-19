import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
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

    <div className="links">
      <a style={{position: 'relative'}} className="cart" href="./pages/cart.html">
      <FontAwesomeIcon   
      
    style={{

      width:"0.8rem",
 
    }

    }
    icon={faCartShopping} />
        $0.00
        <span className="products-number">2</span>
      </a>
      <a className="sign-in" href="./pages/signin.html">
      <FontAwesomeIcon   
      
      style={{
  
        width:"0.8rem",
   
      }
  
      }
      icon={faRightToBracket} />
        Sign in</a
      >
      <a className="register" href="./pages/register.html">
      <FontAwesomeIcon   
      
      style={{
  
        width:"0.8rem",
   
      }
  
      }
      icon={faUserPlus} />
        Register</a
      >
    </div>
  </header>
  )
}

export default Header