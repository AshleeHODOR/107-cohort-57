//import
import React from 'react'; //good practice to import react
import "./Navbar.css"; //import CSS for styling

//Logic
function Navbar(){
    return(
        <nav className='navbar'>
            <div className="navbar-brand"></div>
            <div className='navbar-menu'>
                <a href="/" className='navbar-item'>Home</a>
                <a href="/Products" className='navbar-item'>Products</a>
                <a href="/catalog"className='navbar-item'>About</a>
            </div>
        </nav> 
    );
}

//Export
export default Navbar; 