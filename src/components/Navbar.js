import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../src/images/Logo.png'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper" style={{ backgroundColor: '#7EBEC5'}}>
                <div className="container">
                    
                    <Link to="/" className="brand-logo" ><img className="img-responsive" src={logo} style={{width: 230, height: 80}} alt="logo"/></Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons"  style={{ backgroundColor: 'transparent'}} >shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;