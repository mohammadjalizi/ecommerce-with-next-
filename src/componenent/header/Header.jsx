import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const Header = ({issigninpage=false,isragestirpage=false}) => {
  return (
    <header id="headerElement" className="flex">
    <Link href={"/"} className="logo">
    <FontAwesomeIcon  
    style={{

      width:"1.5rem",
      marginRight:"0.3rem"
    }

    }
    icon={faHouse} />
      <span style={{fontWeight: 'bold'}}>AWU</span>
      <p style={{letterSpacing: '0.5px'}}>Shopping</p>
    </Link>


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
      <Link className={`sign-in ${issigninpage? "border":null  } `} href="/signin">
      <FontAwesomeIcon   
      
      style={{
  
        width:"0.8rem",
   
      }
  
      }
      icon={faRightToBracket} />
        Sign in</Link>
    
      <Link className={`sign-in ${isragestirpage? "border":null  } `} href="/register">
      <FontAwesomeIcon   
      
      style={{
  
        width:"0.8rem",
   
      }
  
      }
      icon={faUserPlus} />
        Register
        </Link>
 
    </nav>
  </header>
  )
}

export default Header